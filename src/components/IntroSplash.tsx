import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import logoAsset from "@/assets/logo-iceco.jpg.asset.json";

const TOTAL_MS = 3200;
const FADE_MS = 700;

/**
 * Abertura apresentativa exibida uma vez por sessão antes do site.
 * Toda a animação é CSS (sem dependências) e o overlay é removido do DOM ao fim.
 */
export function IntroSplash() {
  const [mounted, setMounted] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Evita mismatch de hidratação: decide apenas no cliente.
    let alreadySeen = false;
    try {
      alreadySeen = sessionStorage.getItem("iceco-intro") === "1";
    } catch {
      alreadySeen = false;
    }
    if (alreadySeen) {
      setDone(true);
      return;
    }

    setMounted(true);
    document.body.style.overflow = "hidden";

    const leaveTimer = window.setTimeout(() => setLeaving(true), TOTAL_MS - FADE_MS);
    const endTimer = window.setTimeout(() => {
      setDone(true);
      document.body.style.overflow = "";
      try {
        sessionStorage.setItem("iceco-intro", "1");
      } catch {
        /* sessionStorage indisponível: apenas ignora */
      }
    }, TOTAL_MS);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(endTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (done || !mounted) return null;

  return (
    <div
      role="presentation"
      aria-hidden="true"
      className={cn(
        "fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-background",
        leaving && "intro-fade-out",
      )}
    >
      {/* Halo de fundo nas cores institucionais */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,var(--primary)_0%,transparent_55%)] opacity-10" />
      <div className="intro-sweep pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-accent/25 to-transparent" />

      <img
        src={logoAsset.url}
        alt="I.C.E.C.O."
        className="intro-logo relative h-32 w-auto sm:h-44 md:h-52"
      />

      <div className="relative mt-8 overflow-hidden px-6 text-center">
        <h1 className="intro-title text-2xl font-extrabold tracking-tight text-primary sm:text-4xl">
          I.C.E.C.O.
        </h1>
        <p className="intro-subtitle mt-2 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground sm:text-sm">
          Cultura · Esporte · Inclusão
        </p>
      </div>

      <div className="relative mt-10 h-[3px] w-40 overflow-hidden rounded-full bg-muted sm:w-56">
        <div className="intro-bar h-full rounded-full bg-gradient-to-r from-primary to-accent" />
      </div>
    </div>
  );
}
