import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import emblemaAsset from "@/assets/quem-somos-emblema.png.asset.json";

export const Route = createFileRoute("/quem-somos")({
  component: QuemSomosPage,
  head: () => ({
    meta: [
      { title: "Quem Somos | I.C.E.C.O. — Instituto Cultural e Esportivo" },
      {
        name: "description",
        content:
          "Conheça o I.C.E.C.O., organização sem fins lucrativos de Cidade Ocidental (GO) que promove cultura, esporte, educação e assistência social desde 2016.",
      },
      { property: "og:title", content: "Quem Somos | I.C.E.C.O." },
      {
        property: "og:description",
        content:
          "Cultura, esporte, educação e assistência social gratuitos e sem discriminação em Cidade Ocidental (GO).",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const areas = [
  {
    emoji: "🤝",
    title: "Proteção e Desenvolvimento Social",
    text: "Serviços socioassistenciais para crianças, adolescentes, jovens e idosos em situação de vulnerabilidade, em articulação com o SUAS. Promovemos também a integração ao mercado de trabalho por meio de cursos de qualificação profissional e oficinas socioeducativas.",
  },
  {
    emoji: "🎭",
    title: "Cultura e Arte",
    text: "Fomentamos a produção musical, a promoção de espetáculos artísticos, festivais e mostras. Desenvolvemos o ensino de arte e cultura através de cursos, workshops e programas de formação em música, dança, teatro, artes visuais e audiovisual.",
  },
  {
    emoji: "🏆",
    title: "Esporte e Lazer",
    text: "Incentivamos e organizamos atividades esportivas, paradesportivas, de lazer e de iniciação esportiva, incluindo torneios, campeonatos e olimpíadas escolares, visando a inclusão social e a promoção da saúde.",
  },
  {
    emoji: "🌱",
    title: "Cidadania e Meio Ambiente",
    text: "Apoiamos e desenvolvemos ações para a defesa da qualidade de vida, a proteção e regeneração do ecossistema, além de promover o voluntariado e combater todas as formas de preconceito e discriminação.",
  },
];

function QuemSomosPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />

      <main className="container px-4 py-16 md:py-24 max-w-5xl mx-auto">
        <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {/* Hero */}
          <header className="grid gap-10 md:grid-cols-2 items-center">
            <div className="space-y-5">
              <span className="inline-block bg-primary/10 text-primary text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest">
                Institucional
              </span>
              <h1 className="text-4xl md:text-6xl font-black leading-tight">
                Quem <span className="text-primary italic">Somos</span>
              </h1>
              <div className="h-1.5 w-24 bg-secondary rounded-full" />
              <p className="text-lg text-muted-foreground text-justify leading-relaxed">
                O <strong className="text-foreground">Instituto Cultural e Esportivo de Cidade Ocidental – ICECO</strong>,
                fundado em 22 de abril de 2016 e registrado sob o CNPJ 26.141.602/0001-52, é uma organização da
                sociedade civil de direito privado, de caráter filantrópico e sem fins lucrativos. Com sede em Cidade
                Ocidental, Goiás, e atuação em nível nacional, dedicamos nossos esforços à promoção de atividades e
                estratégias de relevância pública e social, com um foco incansável no atendimento gratuito e sem
                discriminação a quem mais precisa.
              </p>
            </div>

            <div className="relative flex justify-center">
              <img
                src={emblemaAsset.url}
                alt="Emblema do Instituto Cultural e Esportivo de Cidade Ocidental"
                className="w-56 md:w-72 h-auto drop-shadow-2xl transition-transform duration-700 hover:scale-105 animate-in fade-in zoom-in-95"
                loading="lazy"
              />
              <div className="absolute -top-8 -right-4 w-40 h-40 bg-secondary/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-8 -left-4 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" />
            </div>
          </header>

          {/* Essência */}
          <section className="rounded-3xl bg-muted/50 border border-border/50 p-8 md:p-12 space-y-4">
            <h2 className="text-2xl md:text-3xl font-black text-primary">Nossa Essência e Propósito</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nascemos da convicção de que a cultura, o esporte, a educação e a assistência social são pilares
              fundamentais para o desenvolvimento humano e a construção de uma sociedade mais justa e igualitária. Por
              isso, o ICECO atua como um agente de transformação, promovendo inclusão e oportunidades para indivíduos de
              todas as idades, etnias, gêneros e condições sociais.
            </p>
          </section>

          {/* Áreas */}
          <section className="space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-black">Nossas Áreas de Atuação</h2>
              <p className="text-muted-foreground">
                Trabalhamos incansavelmente para alcançar nossos objetivos, realizando uma vasta gama de ações e
                projetos, que incluem:
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {areas.map((area) => (
                <article
                  key={area.title}
                  className="group bg-card border border-border/50 rounded-3xl p-8 space-y-3 shadow-sm hover:shadow-xl transition-all duration-500"
                >
                  <div className="text-3xl">{area.emoji}</div>
                  <h3 className="text-xl font-black text-primary">{area.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{area.text}</p>
                  <div className="h-1 w-12 bg-secondary rounded-full transition-all duration-500 group-hover:w-20" />
                </article>
              ))}
            </div>
          </section>

          {/* Transparência */}
          <section className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-12 space-y-4">
            <h2 className="text-2xl md:text-3xl font-black">Transparência e Independência</h2>
            <p className="opacity-90 text-justify leading-relaxed">
              Operamos sob os princípios da legalidade, impessoalidade, moralidade, publicidade, economicidade e
              eficiência. Nossas rendas e recursos são integralmente reinvestidos na manutenção e desenvolvimento de
              nossos programas, sem qualquer distribuição de excedentes operacionais. O ICECO mantém sua total
              independência, não se vinculando a interesses lucrativos ou político-partidários, e busca parcerias com
              entidades públicas e privadas, nacionais e internacionais, para ampliar o alcance de sua missão.
            </p>
            <p className="font-bold text-secondary">
              Convidamos você a conhecer mais sobre nosso trabalho e a fazer parte dessa jornada de impacto social
              positivo.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
