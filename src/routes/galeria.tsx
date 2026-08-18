import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";

import g03 from "@/assets/galeria/galeria-03.jpg.asset.json";
import g04 from "@/assets/galeria/galeria-04.jpg.asset.json";
import g05 from "@/assets/galeria/galeria-05.jpg.asset.json";
import g06 from "@/assets/galeria/galeria-06.jpg.asset.json";
import g07 from "@/assets/galeria/galeria-07.jpg.asset.json";
import g08 from "@/assets/galeria/galeria-08.jpg.asset.json";
import g09 from "@/assets/galeria/galeria-09.jpg.asset.json";
import g10 from "@/assets/galeria/galeria-10.jpg.asset.json";
import g11 from "@/assets/galeria/galeria-11.jpg.asset.json";
import g12 from "@/assets/galeria/galeria-12.jpg.asset.json";
import g13 from "@/assets/galeria/galeria-13.jpg.asset.json";
import g14 from "@/assets/galeria/galeria-14.jpg.asset.json";
import g15 from "@/assets/galeria/galeria-15.jpg.asset.json";
import g16 from "@/assets/galeria/galeria-16.jpg.asset.json";
import g17 from "@/assets/galeria/galeria-17.jpg.asset.json";
import g18 from "@/assets/galeria/galeria-18.jpg.asset.json";
import g19 from "@/assets/galeria/galeria-19.jpg.asset.json";
import g20 from "@/assets/galeria/galeria-20.jpg.asset.json";
import g21 from "@/assets/galeria/galeria-21.jpg.asset.json";
import g22 from "@/assets/galeria/galeria-22.jpg.asset.json";
import g23 from "@/assets/galeria/galeria-23.jpg.asset.json";
import g24 from "@/assets/galeria/galeria-24.jpg.asset.json";
import g25 from "@/assets/galeria/galeria-25.jpg.asset.json";
import g26 from "@/assets/galeria/galeria-26.jpg.asset.json";
import g27 from "@/assets/galeria/galeria-27.jpg.asset.json";
import g28 from "@/assets/galeria/galeria-28.jpg.asset.json";
import g29 from "@/assets/galeria/galeria-29.jpg.asset.json";
import g30 from "@/assets/galeria/galeria-30.jpg.asset.json";
import g31 from "@/assets/galeria/galeria-31.jpg.asset.json";
import g32 from "@/assets/galeria/galeria-32.jpg.asset.json";
import g33 from "@/assets/galeria/galeria-33.jpg.asset.json";
import g34 from "@/assets/galeria/galeria-34.jpg.asset.json";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria de Registros | I.C.E.C.O. Cidade Ocidental" },
      {
        name: "description",
        content:
          "Registros das atividades culturais do I.C.E.C.O. e da Fanfarra Jorge Amado: workshops, festivais, ensaios coletivos e aulas de música em Cidade Ocidental (GO).",
      },
      { property: "og:title", content: "Galeria de Registros | I.C.E.C.O." },
      {
        property: "og:description",
        content:
          "Workshops, festivais, ensaios coletivos e aulas de música da Fanfarra Jorge Amado e do I.C.E.C.O.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GaleriaPage,
});

/** Um registro fotográfico exibido na galeria. */
interface GalleryItem {
  readonly url: string;
  readonly category: string;
  readonly caption: string;
}

const CATEGORIES = {
  workshop2017: "Workshop de Bandas e Fanfarras — Cidade Ocidental (2017)",
  workshop2018: "Workshop de Bandas e Fanfarras — Novo Gama/GO (2018)",
  festival: "Festival de Bandas e Fanfarras — Novo Gama/GO",
  ensaio: "Ensaio Coletivo",
  aula: "Aula de Música — Teoria e Prática",
} as const;

/** Monta a lista final combinando asset + categoria da seção correspondente. */
const ITEMS: readonly GalleryItem[] = [
  ...[g03, g04, g05, g06].map((a) => ({
    url: a.url,
    category: CATEGORIES.workshop2017,
    caption: "Workshop de Bandas e Fanfarras de Cidade Ocidental — 2017",
  })),
  ...[g07, g08, g09, g10, g11, g12, g13, g14].map((a) => ({
    url: a.url,
    category: CATEGORIES.workshop2018,
    caption: "Workshop de Bandas e Fanfarras — Novo Gama/GO, 2018",
  })),
  ...[g15, g16, g17, g18, g19, g20, g21, g22, g23].map((a) => ({
    url: a.url,
    category: CATEGORIES.festival,
    caption: "Festival de Bandas e Fanfarras — Novo Gama, Goiás",
  })),
  ...[g24, g25, g26, g27, g28, g29, g30, g31].map((a) => ({
    url: a.url,
    category: CATEGORIES.ensaio,
    caption: "Ensaio coletivo da Corporação Musical Fanfarra Jorge Amado",
  })),
  ...[g32, g33, g34].map((a) => ({
    url: a.url,
    category: CATEGORIES.aula,
    caption: "Aula de música: teoria e prática com os alunos do projeto",
  })),
];

const FILTERS: readonly string[] = ["Todos", ...Object.values(CATEGORIES)];

function GaleriaPage() {
  const [filter, setFilter] = useState<string>("Todos");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const visible = useMemo(
    () => (filter === "Todos" ? ITEMS : ITEMS.filter((i) => i.category === filter)),
    [filter],
  );

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (delta: number) =>
      setOpenIndex((current) => {
        if (current === null) return current;
        const total = visible.length;
        if (total === 0) return null;
        return (current + delta + total) % total;
      }),
    [visible.length],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, step]);

  const active = openIndex !== null ? visible[openIndex] : null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <header className="border-b bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="container py-14 md:py-20">
          <span className="inline-block rounded-full bg-secondary/20 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-secondary-foreground">
            Acervo Institucional
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-primary md:text-5xl">
            Registro das Atividades Culturais
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Momentos do I.C.E.C.O. e da Corporação Musical Fanfarra Jorge Amado: workshops,
            festivais, ensaios coletivos e aulas de música que formam gerações em Cidade
            Ocidental (GO).
          </p>
        </div>
      </header>

      <main className="container py-10 md:py-14">
        <div className="mb-8 flex flex-wrap gap-2">
          {FILTERS.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => {
                setFilter(item);
                setOpenIndex(null);
              }}
              aria-pressed={filter === item}
              className={cn(
                "rounded-full border px-4 py-2 text-xs font-medium md:text-sm",
                filter === item
                  ? "border-primary bg-primary text-primary-foreground shadow-sm"
                  : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary",
              )}
            >
              {item}
            </button>
          ))}
        </div>

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item, index) => (
            <li key={item.url}>
              <button
                type="button"
                onClick={() => setOpenIndex(index)}
                className="group block w-full overflow-hidden rounded-xl border border-border bg-card text-left shadow-sm hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={item.url}
                    alt={item.caption}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-secondary-foreground/80">
                    {item.category}
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">{item.caption}</p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </main>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/90 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Fechar galeria"
            className="absolute right-4 top-4 rounded-full bg-background/10 p-2 text-background hover:bg-background/25"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            type="button"
            aria-label="Imagem anterior"
            onClick={(event) => {
              event.stopPropagation();
              step(-1);
            }}
            className="absolute left-2 rounded-full bg-background/10 p-2 text-background hover:bg-background/25 md:left-6"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>

          <figure
            className="max-h-[88vh] w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={active.url}
              alt={active.caption}
              className="mx-auto max-h-[76vh] w-auto rounded-lg object-contain shadow-2xl"
            />
            <figcaption className="mt-4 text-center text-sm text-background/90">
              <span className="block text-xs uppercase tracking-widest text-secondary">
                {active.category}
              </span>
              {active.caption}
              <span className="mt-1 block text-xs text-background/60">
                {(openIndex ?? 0) + 1} / {visible.length}
              </span>
            </figcaption>
          </figure>

          <button
            type="button"
            aria-label="Próxima imagem"
            onClick={(event) => {
              event.stopPropagation();
              step(1);
            }}
            className="absolute right-2 rounded-full bg-background/10 p-2 text-background hover:bg-background/25 md:right-6"
          >
            <ChevronRight className="h-7 w-7" />
          </button>
        </div>
      )}
    </div>
  );
}
