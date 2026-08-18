import { createFileRoute, Link } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import emblemaAsset from "@/assets/fanfarra-jorge-amado-emblema.png.asset.json";

export const Route = createFileRoute("/cultura")({
  head: () => ({
    meta: [
      { title: "Fanfarra Jorge Amado | Cultura I.C.E.C.O." },
      {
        name: "description",
        content:
          "A história da Corporação Musical Fanfarra Jorge Amado, de Cidade Ocidental (GO): música, educação, disciplina e conquistas estaduais, brasilienses e nacionais.",
      },
      { property: "og:title", content: "Fanfarra Jorge Amado | Cultura I.C.E.C.O." },
      {
        property: "og:description",
        content:
          "Música que educa, disciplina que transforma e conquistas que representam Cidade Ocidental.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CulturaPage,
});

/** Blocos textuais da matéria sobre a Fanfarra Jorge Amado. */
interface Section {
  readonly title: string;
  readonly paragraphs: readonly string[];
  readonly bullets?: readonly string[];
}

const SECTIONS: readonly Section[] = [
  {
    title: "1. Uma história construída através da música",
    paragraphs: [
      "A Corporação Musical Fanfarra Jorge Amado, vinculada ao Colégio Estadual Jorge Amado, em Cidade Ocidental, Goiás, construiu ao longo de sua trajetória uma história marcada pela música, pela educação, pela disciplina e pela representação cultural de sua cidade.",
      "Mais do que uma banda escolar, a Fanfarra Jorge Amado tornou-se um importante projeto de formação para crianças, adolescentes e jovens da comunidade, criando oportunidades de aprendizado musical, convivência, responsabilidade, disciplina e participação cultural.",
      "O projeto nasceu a partir da iniciativa do professor Rodrigo de Lima Silva, que, além de educador, assumiu a função de regente e idealizador da fanfarra. A Câmara Municipal de Cidade Ocidental reconheceu publicamente essa trajetória em 2023, destacando Rodrigo de Lima como fundador e regente da corporação, quando ele recebeu a honraria “Orgulho Nosso”, concedida por unanimidade.",
      "O histórico institucional da banda destaca sua atuação na representação do Colégio Jorge Amado e de Cidade Ocidental em festivais e competições dentro e fora do Estado de Goiás, atendendo estudantes das redes pública estadual e municipal e integrantes da comunidade local.",
    ],
  },
  {
    title: "2. O começo: de poucos instrumentos a um projeto de grande alcance",
    paragraphs: [
      "O grupo foi criado em 2013 pelo professor Rodrigo Lima, inicialmente com o objetivo de realizar apresentações em eventos do município — a iniciativa começou poucos dias antes do desfile de Independência daquele ano.",
      "O início foi marcado pela falta de recursos. Para colocar o projeto em funcionamento, Rodrigo conversou com a direção da escola, utilizou alguns instrumentos disponíveis na instituição e conseguiu outros emprestados com amigos. A partir dessa estrutura inicial, começou a formação dos estudantes.",
      "Desde sua criação, mais de 300 jovens, a partir dos dez anos de idade, já haviam passado pela banda até 2020. A importância do projeto ultrapassa os resultados obtidos em campeonatos: a fanfarra também funciona como espaço de formação para sucessivas gerações de estudantes.",
    ],
  },
  {
    title: "3. Música como instrumento de educação",
    paragraphs: [
      "Os estudantes que participam de uma corporação musical precisam desenvolver muito mais do que habilidade para tocar um instrumento. O trabalho envolve disciplina, concentração, responsabilidade, pontualidade, trabalho coletivo, coordenação motora, respeito à hierarquia e compromisso com os ensaios.",
      "Cada apresentação exige preparação. Cada competição exige treinamento. Cada deslocamento para outra cidade representa uma oportunidade de conhecer novos lugares, novas pessoas e novas experiências.",
      "O objetivo, como destacou o próprio regente, nunca foi apenas levar música, mas proporcionar aos estudantes experiências e contato com realidades que, em muitos casos, eles não teriam oportunidade de conhecer naquele momento de suas vidas.",
    ],
  },
  {
    title: "4. Primeiras apresentações e crescimento da corporação",
    paragraphs: [
      "Nos primeiros anos, as apresentações estavam ligadas principalmente aos eventos da comunidade e às solenidades cívicas, especialmente aos tradicionais desfiles de 7 de Setembro.",
      "Com o crescimento técnico e artístico, a fanfarra passou a participar de festivais e campeonatos, ocupando espaço no circuito competitivo de bandas e fanfarras. Em 2017, seu nome aparece na programação de um campeonato realizado em Sergipe, na categoria Fanfarra Simples Tradicional – Sênior.",
    ],
  },
  {
    title: "5. A consolidação no cenário goiano",
    paragraphs: [
      "Com o passar dos anos, a corporação transformou sua participação em competições em resultados expressivos. O histórico institucional a reconhece como Pentacampeã Goiana (2017, 2018, 2022, 2023 e 2024), e em 2025 a corporação divulgou mais um título estadual.",
      "Existe ainda registro público de um título goiano em 2019, mencionado no currículo do regente (5º Campeonato Goiano de Bandas e Fanfarras). Como esse ano não integra a contagem oficial do pentacampeonato, ele é apresentado aqui como registro localizado, a ser confirmado por certificado antes de alterar a contagem.",
    ],
    bullets: [
      "Campeã Goiana – 2017",
      "Campeã Goiana – 2018",
      "Campeã Goiana – 2019 (registro a confirmar)",
      "Campeã Goiana – 2022",
      "Campeã Goiana – 2023",
      "Campeã Goiana – 2024",
      "Campeã Goiana – 2025",
    ],
  },
  {
    title: "6. Destaque também no Distrito Federal e Entorno",
    paragraphs: [
      "A localização de Cidade Ocidental, no Entorno do Distrito Federal, colocou a fanfarra em contato direto com o circuito cultural e competitivo de Brasília e das cidades próximas, acumulando títulos de Campeã Brasiliense.",
      "Em 2025 houve registro público da entrega dos troféus de Campeão Goiano e Campeão Brasiliense, o que comprova tanto os títulos quanto a existência das peças no acervo.",
    ],
    bullets: [
      "Campeã Brasiliense – 2017",
      "Campeã Brasiliense – 2018",
      "Campeã Brasiliense – 2019",
      "Campeã Brasiliense – 2023",
      "Campeã Brasiliense – 2024",
      "Campeã Brasiliense – 2025",
    ],
  },
  {
    title: "7. A chegada ao cenário nacional",
    paragraphs: [
      "Em 2019, a banda conquistou o título de Vice-Campeã Brasileira. O resultado marcou uma etapa importante: depois de conquistar espaço regional, a corporação passou a disputar diretamente com grupos de diferentes estados brasileiros.",
      "Os títulos nacionais viriam em seguida: Campeã Brasileira em 2023 e novamente em 2025, o que consagra a corporação como Bicampeã Brasileira.",
    ],
  },

  {
    title: "8. Reconhecimento oficial do desempenho em Goiás",
    paragraphs: [
      "Em publicação da Secretaria de Estado da Educação de Goiás, a Fanfarra Jorge Amado aparece em 1º lugar na categoria Banda de Percussão com Instrumentos Melódicos Simples – Juvenil – Goiás, garantindo classificação para o campeonato nacional, com destaque em diferentes quesitos:",
    ],
    bullets: [
      "2º lugar em Corpo Musical",
      "2º lugar em Baliza",
      "2º lugar em Corpo Coreográfico",
      "1º lugar em Pavilhão Nacional",
    ],
  },
  {
    title: "9. 2023: um dos anos mais importantes da história",
    paragraphs: [
      "Além dos resultados competitivos, foi em 2023 que a banda alcançou uma das maiores conquistas de sua história: o título de Campeã Brasileira, em competição realizada em São Paulo.",
      "No mesmo ano, a corporação participou da solenidade na Câmara Municipal em homenagem ao maestro Rodrigo de Lima, durante a entrega da honraria “Orgulho Nosso”. Assim, 2023 combinou conquista nacional, reconhecimento institucional e valorização do trabalho educacional e cultural.",
    ],
  },
  {
    title: "10. A participação em festivais culturais",
    paragraphs: [
      "A corporação também ampliou sua presença para além dos campeonatos, participando do Festival Arte Educa do Estado de Goiás, com classificação para a fase intermunicipal, a fase regional e a fase estadual, realizada em Goiânia.",
      "O trabalho não se resume ao resultado de uma competição: a banda participa de uma rede cultural que utiliza a música como ferramenta de expressão, educação e integração social.",
    ],
  },
  {
    title: "11. Viagens, apresentações e experiências além da competição",
    paragraphs: [
      "Entre as experiências marcantes está a viagem realizada com integrantes da banda para Aracaju, em Sergipe, onde os estudantes se apresentaram e conheceram a cidade.",
      "Para muitos estudantes, viajar com a fanfarra significa conhecer outras cidades, culturas, bandas e realidades sociais. O aprendizado acontece também durante a viagem, nos ensaios, nos encontros com outras corporações e no contato com públicos diferentes.",
    ],
  },
  {
    title: "12. A fanfarra e os grandes eventos cívicos de Cidade Ocidental",
    paragraphs: [
      "No Desfile Cívico de 7 de Setembro de 2025, que reuniu mais de 9 mil estudantes e diversas bandas marciais e fanfarras, a Banda Jorge Amado esteve entre as corporações participantes, representando o Colégio Estadual Jorge Amado.",
      "A presença nesses eventos reforça a ligação entre a corporação e a memória cultural do município.",
    ],
  },
  {
    title: "13. A continuidade do trabalho após a pandemia",
    paragraphs: [
      "A pandemia de Covid-19 trouxe mudanças profundas para projetos culturais e educacionais. Mesmo assim, a corporação buscou continuar participando de competições, inclusive em campeonato de fanfarras realizado de forma online durante o período de isolamento social.",
    ],
  },
  {
    title: "14. 2024: a consolidação de uma geração vencedora",
    paragraphs: [
      "Em 2024, a banda voltou a conquistar os títulos de Campeã Goiana e Campeã Brasiliense, ampliando seus registros mesmo com a renovação natural dos integrantes. Manter uma equipe competitiva ao longo de vários anos exige um processo permanente de formação de novos músicos.",
    ],
  },
  {
    title: "15. 2025: o ano que atualizou a história",
    paragraphs: [
      "Documentos oficiais da Liga de Bandas e Fanfarras registram a Corporação Musical Jorge Amado – Cidade Ocidental/GO no Campeonato Brasileiro 2025, na categoria Banda de Percussão com Instrumentos Melódicos – Juvenil, realizado em Amparo/SP.",
      "O ano reuniu o título goiano, o título brasiliense e, principalmente, o segundo título nacional. A própria corporação passou a se apresentar como “Campeã Brasileira 2023 — Bi-Campeã Brasileira 2025”.",
    ],
    bullets: [
      "Campeã Goiana – 2025",
      "Campeã Brasiliense – 2025",
      "Campeã Brasileira – 2025 (Amparo/SP)",
      "Entrega dos troféus goiano e brasiliense registrada publicamente",
    ],
  },
  {
    title: "16. Participação em competições virtuais e novos formatos",
    paragraphs: [
      "Na 2ª Copa América Virtual de Bandas e Fanfarras – edição 2025, a corporação obteve a segunda colocação na categoria Banda de Percussão com Instrumentos Melódicos – Infantojuvenil, com nota final de 195,00 (técnica 190,1 e artística 4,9).",
      "Por se tratar de competição em formato virtual, o resultado integra o acervo histórico, mas é apresentado separadamente dos campeonatos presenciais.",
    ],
  },
  {
    title: "16.1. Projeto “Tocando & Educando”",
    paragraphs: [
      "Em 2025, documento oficial do Governo de Goiás registra o projeto “Tocando & Educando – Manutenção e Desenvolvimento da Fanfarra Jorge Amado, Cidade Ocidental-GO”, sob responsabilidade de Rodrigo de Lima Silva, classificado com nota 96,5 em edital estadual de estruturação e manutenção de bandas, corais e fanfarras, com valor pleiteado de R$ 100 mil.",
      "O registro demonstra que a corporação não é apenas competitiva: existe também um projeto formal de manutenção e desenvolvimento da atividade musical e educacional.",
    ],
  },

  {
    title: "17. Uma trajetória marcada pela formação de centenas de jovens",
    paragraphs: [
      "Talvez a maior conquista não esteja nas medalhas e troféus, mas nas pessoas. Desde o início do projeto, centenas de crianças e adolescentes tiveram contato com instrumentos musicais, apresentações públicas, viagens, competições e atividades coletivas.",
      "Ex-integrantes carregam consigo disciplina, responsabilidade, convivência, liderança, respeito, trabalho em equipe e contato com a cultura. Alguns seguirão na música; outros seguirão profissões completamente diferentes. Mas todos levam a experiência de terem representado sua escola e sua cidade.",
    ],
  },
  {
    title: "18. A importância para Cidade Ocidental",
    paragraphs: [
      "A Fanfarra Jorge Amado tornou-se parte da identidade cultural e educacional de Cidade Ocidental. Em apresentações cívicas, festivais e campeonatos, os integrantes carregam o nome do Colégio Estadual Jorge Amado e da própria cidade.",
      "A fanfarra transforma a localização geográfica do município em vantagem cultural: participa de eventos goianos, brasilienses e nacionais, levando o nome da cidade para diferentes espaços.",
    ],
  },
  {
    title: "19. Uma história construída sem depender de grandes estruturas",
    paragraphs: [
      "O histórico da corporação destaca que o projeto desenvolveu sua trajetória sem apoio governamental local, apesar de representar a cidade em festivais e competições.",
      "Uma corporação escolar depende de instrumentos, uniformes, transporte, alimentação, manutenção, ensaios, profissionais e apoio logístico. Alcançar resultados estaduais e nacionais mesmo com limitações estruturais faz de cada conquista uma vitória coletiva.",
    ],
  },
  {
    title: "20. Um projeto que une escola e comunidade",
    paragraphs: [
      "A iniciativa atende estudantes da rede pública estadual e municipal e membros da comunidade local, de diferentes bairros de Cidade Ocidental, transformando a fanfarra em ferramenta de integração social.",
      "Cada instrumento tem uma função. Cada naipe depende dos demais. Cada integrante precisa compreender que o desempenho individual interfere diretamente no resultado coletivo — o que transforma o ensaio musical em uma verdadeira experiência de cidadania.",
    ],
  },
  {
    title: "22. 2026: novos desafios e continuidade da história",
    paragraphs: [
      "Para 2026, o histórico institucional aponta a intenção de representar Cidade Ocidental no Campeonato Goiano, previsto para Santa Fé de Goiás, e no Campeonato Brasiliense, em Planaltina (DF), buscando vaga para o Campeonato Brasileiro previsto para João Pessoa, na Paraíba.",
      "Como a temporada de 2026 ainda está em andamento, esses eventos são apresentados como metas e compromissos previstos, e não como conquistas já confirmadas.",
    ],
  },
  {
    title: "23. O significado dos títulos",
    paragraphs: [
      "Cada número representa uma história: estudantes que chegaram sem saber tocar e aprenderam a dominar seus instrumentos; famílias que acompanharam ensaios e viagens; professores e colaboradores que ajudaram a manter o projeto.",
      "Representa horas de treinamento, apresentações sob sol, chuva, calor e frio, viagens longas, derrotas que ensinaram e vitórias que motivaram. E representa, principalmente, a capacidade de uma escola pública criar oportunidades por meio da arte.",
    ],
  },
  {
    title: "24. Muito mais do que uma fanfarra",
    paragraphs: [
      "A música ensina a ouvir. O conjunto ensina a respeitar. O ensaio ensina a persistir. A competição ensina a lidar com vitórias e derrotas. A viagem ensina a conhecer o mundo. A apresentação ensina a vencer a timidez.",
      "E a responsabilidade de carregar o nome da escola ensina o significado de representar uma comunidade. Por isso, a Fanfarra Jorge Amado pode ser compreendida como um projeto de educação musical, cultura e cidadania.",
    ],
  },
  {
    title: "25. Uma história que continua sendo escrita",
    paragraphs: [
      "A trajetória iniciada com poucos instrumentos e a iniciativa de um professor transformou-se em uma corporação reconhecida regional e nacionalmente.",
      "Cada nova geração de estudantes representa um novo capítulo. Cada ensaio representa uma preparação para a próxima apresentação. Cada campeonato representa uma nova oportunidade.",
    ],
  },
  {
    title: "26. Um legado para as próximas gerações",
    paragraphs: [
      "Ao longo dos anos, estudantes mudam, professores enfrentam novos desafios, instrumentos precisam ser renovados e as competições se transformam. Mas o propósito permanece: ensinar através da música, formar através da disciplina e representar Cidade Ocidental com orgulho.",
      "Da primeira apresentação aos títulos nacionais, dos desfiles municipais às competições brasileiras, a história pertence não somente aos músicos que passaram pelo grupo, mas também à escola, às famílias, aos professores e à população de Cidade Ocidental.",
    ],
  },
  {
    title: "27. Fanfarra Jorge Amado: uma vida de ensinamentos",
    paragraphs: [
      "“Bandas e Fanfarras do Estado de Goiás, uma vida de ensinamentos.” São anos de música, educação, disciplina, viagens, apresentações, competições e conquistas. Mas, acima de tudo, são anos de pessoas.",
      "A Fanfarra Jorge Amado não é apenas uma banda. É uma história de transformação através da música. E enquanto houver um estudante disposto a aprender, um instrumento disposto a tocar e uma equipe disposta a acreditar, essa história continuará sendo escrita.",
    ],
  },
];

const TIMELINE: readonly { readonly year: string; readonly text: string }[] = [
  { year: "2013", text: "Criação do grupo no Colégio Estadual Jorge Amado, idealizado pelo professor Rodrigo Lima, com poucos instrumentos e estrutura limitada." },
  { year: "2017", text: "Primeiro título goiano e primeiro título brasiliense. Participação em competição realizada em Sergipe." },
  { year: "2018", text: "Nova conquista do Campeonato Goiano e do Campeonato Brasiliense." },
  { year: "2019", text: "Campeã Brasiliense e Vice-Campeã Brasileira, com 1º lugar em Pavilhão Nacional e 2º lugar em Corpo Musical, Baliza e Corpo Coreográfico. Há ainda registro público de título goiano neste ano, a confirmar." },
  { year: "2020", text: "Mais de 300 jovens já haviam passado pelo projeto; participação em competições adaptadas ao período da pandemia." },
  { year: "2022", text: "Conquista do Campeonato Goiano." },
  { year: "2023", text: "Campeã Goiana (Anápolis), Campeã Brasiliense e Campeã Brasileira em São Paulo. Honraria “Orgulho Nosso” ao maestro Rodrigo de Lima." },
  { year: "2024", text: "Nova conquista do Campeonato Goiano e do Campeonato Brasiliense." },
  { year: "2025", text: "Campeã Goiana, Campeã Brasiliense e Bi-Campeã Brasileira (Amparo/SP). 2º lugar na 2ª Copa América Virtual e projeto “Tocando & Educando” classificado em edital estadual." },
  { year: "2026", text: "Meta de representar Cidade Ocidental nos campeonatos Goiano e Brasiliense, buscando vaga para o Brasileiro em João Pessoa (PB). Sem novos títulos confirmados até o momento." },
];

/** Quadro geral de resultados por ano e competição. */
const ACHIEVEMENTS: readonly {
  readonly year: string;
  readonly competition: string;
  readonly result: string;
}[] = [
  { year: "2017", competition: "Campeonato Goiano", result: "🥇 Campeã" },
  { year: "2017", competition: "Campeonato Brasiliense", result: "🥇 Campeã" },
  { year: "2018", competition: "Campeonato Goiano", result: "🥇 Campeã" },
  { year: "2018", competition: "Campeonato Brasiliense", result: "🥇 Campeã" },
  { year: "2019", competition: "Campeonato Goiano", result: "🥇 Campeã*" },
  { year: "2019", competition: "Campeonato Brasiliense", result: "🥇 Campeã" },
  { year: "2019", competition: "Campeonato Brasileiro", result: "🥈 Vice-campeã" },
  { year: "2022", competition: "Campeonato Goiano", result: "🥇 Campeã" },
  { year: "2023", competition: "Campeonato Goiano", result: "🥇 Campeã" },
  { year: "2023", competition: "Campeonato Brasiliense", result: "🥇 Campeã" },
  { year: "2023", competition: "Campeonato Brasileiro", result: "🥇 Campeã Brasileira" },
  { year: "2024", competition: "Campeonato Goiano", result: "🥇 Campeã" },
  { year: "2024", competition: "Campeonato Brasiliense", result: "🥇 Campeã" },
  { year: "2025", competition: "Campeonato Goiano", result: "🥇 Campeã" },
  { year: "2025", competition: "Campeonato Brasiliense", result: "🥇 Campeã" },
  { year: "2025", competition: "Campeonato Brasileiro", result: "🥇 Campeã Brasileira" },
  { year: "2025", competition: "Copa América Virtual", result: "🥈 2º lugar" },
];

const STATS: readonly { readonly value: string; readonly label: string }[] = [
  { value: "6", label: "Títulos Goianos" },
  { value: "6", label: "Títulos Brasilienses" },
  { value: "2", label: "Títulos Brasileiros" },
  { value: "300+", label: "Jovens atendidos" },

];

function CulturaPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />

      {/* Hero com emblema sem fundo */}
      <header className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-slate-900 opacity-95" />
        <div className="container relative px-4 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-[320px_1fr] items-center">
            <img
              src={emblemaAsset.url}
              alt="Emblema da Corporação Musical Fanfarra Jorge Amado"
              className="w-52 md:w-full mx-auto drop-shadow-2xl animate-in fade-in zoom-in-95 duration-1000"
              loading="eager"
            />
            <div className="space-y-5 text-center md:text-left">
              <span className="inline-block bg-secondary text-secondary-foreground text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest">
                Cultura 🎭
              </span>
              <h1 className="text-4xl md:text-6xl font-black leading-tight">
                Fanfarra <span className="text-secondary">Jorge Amado</span>
              </h1>
              <p className="text-lg md:text-xl font-medium opacity-90 max-w-2xl">
                Uma história de música, educação, disciplina, conquistas e transformação social
                em Cidade Ocidental – GO.
              </p>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-white/10 backdrop-blur px-4 py-6 text-center border border-white/15"
              >
                <div className="text-3xl md:text-4xl font-black text-secondary">{s.value}</div>
                <div className="text-[11px] md:text-xs font-bold uppercase tracking-widest opacity-80 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main className="container px-4 py-16 md:py-24 max-w-4xl mx-auto space-y-16">
        <article className="space-y-14">
          {SECTIONS.map((section) => (
            <section key={section.title} className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-black text-primary">{section.title}</h2>
              <div className="h-1 w-16 bg-secondary rounded-full" />
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
              {section.bullets ? (
                <ul className="grid sm:grid-cols-2 gap-2 pt-2">
                  {section.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 rounded-xl bg-muted/50 border border-border px-4 py-3 text-sm font-bold"
                    >
                      <span className="text-secondary">★</span>
                      {b}
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </article>

        {/* Linha do tempo */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-black text-primary">
            21. Linha do tempo das principais conquistas
          </h2>
          <div className="h-1 w-16 bg-secondary rounded-full" />
          <ol className="relative border-l-2 border-primary/20 pl-6 space-y-8">
            {TIMELINE.map((item) => (
              <li key={item.year} className="relative">
                <span className="absolute -left-[33px] top-1 flex h-5 w-5 items-center justify-center rounded-full bg-secondary ring-4 ring-background" />
                <div className="text-xl font-black text-primary">{item.year}</div>
                <p className="text-muted-foreground leading-relaxed mt-1">{item.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <aside className="rounded-3xl bg-primary/5 border border-primary/10 p-8 md:p-12 text-center space-y-4">
          <img
            src={emblemaAsset.url}
            alt="Emblema Fanfarra Jorge Amado"
            className="w-24 mx-auto opacity-90"
            loading="lazy"
          />
          <p className="text-lg md:text-xl font-black text-primary leading-relaxed">
            Fanfarra Jorge Amado — música que educa, disciplina que transforma e conquistas que
            representam Cidade Ocidental.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-black text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90"
          >
            Voltar ao início
          </Link>
        </aside>
      </main>

      <footer className="pt-20 pb-10 bg-slate-900 text-slate-300">
        <div className="container px-4 text-center">
          <div className="flex flex-col items-center gap-4">
            <span className="text-3xl font-black tracking-tighter text-white">I.C.E.C.O.</span>
            <p className="text-xs font-bold text-primary uppercase tracking-[0.2em]">
              Cidade Ocidental – GO
            </p>
            <div className="border-t border-slate-800 w-full max-w-xs my-4" />
            <div className="text-xs font-bold uppercase tracking-widest opacity-40">
              © 2026 I.C.E.C.O. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
