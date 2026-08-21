import { createFileRoute, redirect } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";

type OAuthNamespace = {
  getAuthorizationDetails: (id: string) => Promise<{ data: AuthorizationDetails | null; error: Error | null }>;
  approveAuthorization: (id: string) => Promise<{ data: AuthorizationResult | null; error: Error | null }>;
  denyAuthorization: (id: string) => Promise<{ data: AuthorizationResult | null; error: Error | null }>;
};

type AuthorizationDetails = {
  client?: { name?: string | null } | null;
  redirect_url?: string | null;
  redirect_to?: string | null;
};

type AuthorizationResult = {
  redirect_url?: string | null;
  redirect_to?: string | null;
};

function oauthApi(): OAuthNamespace {
  return (supabase.auth as unknown as { oauth: OAuthNamespace }).oauth;
}

export const Route = createFileRoute("/.lovable/oauth/consent")({
  // Browser-only: o cliente lê a sessão do localStorage, ausente no SSR.
  ssr: false,
  validateSearch: (s: Record<string, unknown>) => ({
    authorization_id: typeof s['authorization_id'] === "string" ? s['authorization_id'] : "",
  }),
  loader: async ({ location }) => {
    const authorizationId = new URLSearchParams(location.search).get("authorization_id");
    if (!authorizationId) throw new Error("Missing authorization_id");

    const { data: sessionData } = await supabase.auth.getSession();
    if (!sessionData.session) return null;

    const { data, error } = await oauthApi().getAuthorizationDetails(authorizationId);
    if (error) throw error;

    const immediate = data?.redirect_url ?? data?.redirect_to;
    if (immediate && !data?.client) throw redirect({ href: immediate });
    return data;
  },
  component: Consent,
  errorComponent: ({ error }) => (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <p className="max-w-md text-center text-sm text-muted-foreground">
        Não foi possível carregar este pedido de autorização:{" "}
        {String((error as Error)?.message ?? error)}
      </p>
    </main>
  ),
});

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 text-card-foreground shadow-lg">
        {children}
      </div>
    </main>
  );
}

function Consent() {
  const details = Route.useLoaderData();
  const { authorization_id } = Route.useSearch();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSession, setHasSession] = useState<boolean | null>(null);

  useEffect(() => {
    let active = true;
    supabase.auth.getSession().then(({ data }) => {
      if (active) setHasSession(Boolean(data.session));
    });
    return () => {
      active = false;
    };
  }, []);

  async function signIn() {
    setBusy(true);
    setError(null);
    const result = await lovable.auth.signInWithOAuth("lovable", {
      redirect_uri: window.location.href,
    });
    if ("error" in result && result.error) {
      setBusy(false);
      setError(result.error.message);
      return;
    }
    window.location.reload();
  }

  async function decide(approve: boolean) {
    setBusy(true);
    setError(null);
    const api = oauthApi();
    const { data, error: decisionError } = approve
      ? await api.approveAuthorization(authorization_id)
      : await api.denyAuthorization(authorization_id);

    if (decisionError) {
      setBusy(false);
      setError(decisionError.message);
      return;
    }
    const target = data?.redirect_url ?? data?.redirect_to;
    if (!target) {
      setBusy(false);
      setError("O servidor de autorização não retornou um destino de redirecionamento.");
      return;
    }
    window.location.href = target;
  }

  if (hasSession === null) {
    return (
      <Shell>
        <p className="text-center text-sm text-muted-foreground">Carregando…</p>
      </Shell>
    );
  }

  if (!hasSession) {
    return (
      <Shell>
        <h1 className="text-xl font-bold">Entrar para continuar</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Faça login para autorizar o acesso às ferramentas do I.C.E.C.O.
        </p>
        {error && (
          <p role="alert" className="mt-4 text-sm text-destructive">
            {error}
          </p>
        )}
        <button
          type="button"
          disabled={busy}
          onClick={signIn}
          className="mt-6 w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
        >
          Entrar
        </button>
      </Shell>
    );
  }

  const clientName = details?.client?.name ?? "um aplicativo";

  return (
    <Shell>
      <h1 className="text-xl font-bold">Conectar {clientName} à sua conta</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Isso permite que {clientName} use o portal do I.C.E.C.O. como você.
      </p>
      {error && (
        <p role="alert" className="mt-4 text-sm text-destructive">
          {error}
        </p>
      )}
      <div className="mt-6 flex gap-3">
        <button
          type="button"
          disabled={busy}
          onClick={() => decide(true)}
          className="flex-1 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
        >
          Autorizar
        </button>
        <button
          type="button"
          disabled={busy}
          onClick={() => decide(false)}
          className="flex-1 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent disabled:opacity-60"
        >
          Recusar
        </button>
      </div>
    </Shell>
  );
}
