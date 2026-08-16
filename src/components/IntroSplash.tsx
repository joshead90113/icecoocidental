import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import logoAsset from "@/assets/logo-iceco-transparent.png.asset.json";

const TOTAL_MS = 3800;
const FADE_MS = 900;
const PARTICLES = [
  { left: "10%", delay: "0.2s" },
  { left: "18%", delay: "0s" },
  { left: "26%", delay: "1.2s" },
  { left: "32%", delay: "0.5s" },
  { left: "40%", delay: "0.9s" },
  { left: "48%", delay: "1s" },
  { left: "56%", delay: "0.15s" },
  { left: "64%", delay: "0.3s" },
  { left: "72%", delay: "1.4s" },
  { left: "80%", delay: "0.8s" },
  { left: "88%", delay: "0.6s" },
];



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
      <div className="intro-halo pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,var(--primary)_0%,transparent_55%)]" />
      <div className="intro-sweep pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-accent/25 to-transparent" />

      {PARTICLES.map((p) => (
        <span
          key={p.left}
          style={{ left: p.left, animationDelay: p.delay }}
          className="intro-particle pointer-events-none absolute bottom-1/3 h-1.5 w-1.5 rounded-full bg-accent"
        />
      ))}

      <div className="relative flex items-center justify-center">
        <span className="intro-ring pointer-events-none absolute h-48 w-48 rounded-full border-2 border-dashed border-primary/30 sm:h-64 sm:w-64 md:h-72 md:w-72" />
        <img
          src={logoAsset.url}
          alt="I.C.E.C.O."
          className="intro-logo relative h-32 w-auto sm:h-44 md:h-52"
        />
      </div>


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
