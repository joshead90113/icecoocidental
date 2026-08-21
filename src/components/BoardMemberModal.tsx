"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import logoAsset from "@/assets/logo-iceco-transparent.png.asset.json";
import { GraduationCap, Briefcase, Trophy, Award, BookOpen } from "lucide-react";

interface BoardMember {
  id: string;
  name: string;
  role: string;
  bio?: string | null;
  photo_url?: string | null;
}

interface BoardMemberModalProps {
  member: BoardMember | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const rodrigoCurriculum = {
  headline:
    "Mestre em andamento em Artes, Especialista e Profissional com 24 anos de trajetória em Cultura, Música, Educação e Esporte",
  summary:
    "Atuo desde 2002 em Cidade Ocidental e região do Entorno de Goiás, construindo uma trajetória dedicada à formação de pessoas, à valorização da cultura local e ao desenvolvimento artístico e educacional, com reconhecimento em nível estadual, regional e nacional.",
  education: [
    "Mestrado em andamento: Prof-Arte – Universidade de Brasília (UnB)",
    "Graduações: Música (Centro Universitário Clarentiano); Pedagogia (Centro Universitário Cidade Verde); História (UNIDESC); Educação Física (em andamento – PUC-Goiás)",
    "Especializações: Gestão e Orientação Educacional, Docência no Ensino Superior, Ensino Coletivo em Música",
    "Cursos complementares: Gestor Municipal de Cultura, Agente Cultural, Analista e Parecerista de Projetos Culturais, Regência, Percussão Sinfônica e Popular, entre outros cursos técnicos e internacionais.",
  ],
  experience: [
    "Regente e Professor de Bandas e Fanfarras: 24 anos de atuação formando grupos em Cidade Ocidental e região, criando e liderando projetos como a Fanfarra Jorge Amado (2012) e atuando em instituições de ensino locais e em Luziânia.",
    "Cargos de gestão: Diretor de Cultura de Cidade Ocidental (2015–2016); Vice-presidente e Coordenador Regional da Associação Goiana de Bandas e Fanfarras; Coordenador Regional em Novo Gama.",
    "Avaliação e formação: Avaliador em competições estaduais, nacionais e virtuais; Ministrante de oficinas, palestras e cursos na área musical e pedagógica.",
    "Músico profissional: Baterista experiente em diversos gêneros e grupos; Integrante da Orquestra Filarmônica Social de Cidade Ocidental.",
  ],
  achievements: [
    "Campeonatos: Conquista de títulos estaduais, distritais e nacionais – incluindo Campeão Brasileiro (2023, 2025), Campeão Goiano e Campeão Brasiliense com as bandas que rege.",
    "Produção cultural: Idealizador e responsável técnico por dezenas de eventos: festivais, campeonatos, encontros, desfiles cívicos, projetos sociais e iniciativas financiadas por programas federais como a PNAB e o FAC-Goiás.",
    "Missão: Transformar vidas por meio da música, do esporte e da educação, promovendo inclusão social e formando cidadãos conscientes e preparados para os desafios da vida.",
  ],
};

const mateusCurriculum = {
  headline: "Músico Percussionista",
  summary:
    "Iniciou seus estudos musicais em 2023 na Corporação Musical Jorge Amado — instituição fundada em 2012 —, onde segue atuando até hoje. Tem como orientadores o Professor Regente Rodrigo de Lima e a Professora de Coreografia Andreia.",
  education: [
    "Participação no 3º Workshop da Federação Metropolitana de Bandas e Fanfarras (FMBF)",
    "Certificado do Projeto Tocando é Educando (nas áreas de Sopro Metal e Percussão)",
  ],
  experience: [
    "Percussionista na Corporação Musical Jorge Amado desde 2023, atuando em ensaios, apresentações e competições.",
    "Participação em oficinas e workshops voltados à formação musical e à prática coletiva em bandas e fanfarras.",
    "Desenvolvimento técnico em percussão sob orientação do Professor Regente Rodrigo de Lima.",
  ],
  achievements: [
    "🥇 Tricampeão Goiano — 2023, 2024 e 2025",
    "🥇 Bicampeão Brasiliense — 2023 e 2025",
    "🥇 Bicampeão Brasileiro — 2023 e 2025",
    "🏆 Finalista da Fase Estadual do FAEGO (Festival Arte Educa) — 2023 a 2025",
  ],
};

const lucinaldoCurriculum = {
  headline: "Professor, educador, consultor e gestor de projetos",
  summary:
    "Lucinaldo José Rodriguês de Carvalho é professor licenciado em Química, com formação na área de Ciências da Natureza e suas Tecnologias e pós-graduação em Docência do Ensino Superior. Ao longo de sua trajetória profissional, consolidou uma ampla experiência nas áreas de educação, gestão, consultoria, meio ambiente, marketing e desenvolvimento de projetos.",
  content: [
    "Sua atuação como educador inclui experiência como professor de Química, Física e Matemática, especialmente no Ensino Médio e em cursos preparatórios para vestibulares. Sua formação e experiência em educação refletem o compromisso com a disseminação do conhecimento, a formação de estudantes e o desenvolvimento de práticas pedagógicas voltadas à aprendizagem e à transformação social.",
    "Além da experiência em sala de aula, Lucinaldo possui atuação na implantação, acompanhamento, execução e avaliação de programas e projetos, bem como na organização e produção de eventos. Essa experiência multidisciplinar permite sua participação em diferentes etapas de planejamento e desenvolvimento de iniciativas educacionais, ambientais e institucionais.",
    "Na área de gestão e consultoria, também acumulou experiência como assessor e consultor de marketing, gerente comercial e consultor de vendas empresariais, desenvolvendo competências relacionadas à comunicação, relacionamento profissional, estratégias comerciais e gestão de equipes.",
    "Sua trajetória também possui forte relação com a educação e a temática ambiental. Atuou como coordenador da III Conferência Distrital do Meio Ambiente, em parceria com órgãos como o Ministério do Meio Ambiente (MMA) e o Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renováveis (IBAMA), além de exercer a função de diretor educador ambiental em organização não governamental ambientalista.",
    "Com uma trajetória marcada pela integração entre educação, gestão, meio ambiente, comunicação e desenvolvimento de projetos, Lucinaldo reúne experiência técnica e capacidade de articulação para atuar em iniciativas que valorizam o conhecimento, a responsabilidade socioambiental e o desenvolvimento de pessoas e comunidades.",
    "Sua experiência profissional é complementada por características como boa comunicação, fácilidade de aprendizagem, criatividade, capacidade de trabalho em equipe e disposição para novos desafios, buscando continuamente o crescimento profissional e pessoal.",
  ],
  areas: [
    "Educação e docência;",
    "Química, Física e Matemática;",
    "Ensino Médio e preparação para vestibulares;",
    "Docência do Ensino Superior;",
    "Gestão e desenvolvimento de projetos;",
    "Consultoria e marketing;",
    "Gestão comercial e vendas empresariais;",
    "Educação ambiental;",
    "Organização e produção de eventos;",
    "Programas e projetos socioambientais.",
  ],
};

function SectionTitle({
  icon: Icon,
  children,
}: {
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-black text-foreground uppercase tracking-wider">
        {children}
      </h3>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex gap-3 text-muted-foreground leading-relaxed">
          <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function BoardMemberModal({ member, open, onOpenChange }: BoardMemberModalProps) {
  if (!member) return null;

  const isRodrigo = member.name.toLowerCase().includes("rodrigo");
  const isMateus = member.name.toLowerCase().includes("mateus") || member.name.toLowerCase().includes("matheus");
  const isLucinaldo = member.name.toLowerCase().includes("lucinaldo");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto p-0 sm:p-0 border-0 bg-card">
        <div className="grid grid-cols-1 lg:grid-cols-5">
          {/* Coluna da foto + emblema */}
          <div className="relative lg:col-span-2 bg-gradient-to-br from-primary to-primary/80 p-8 flex flex-col items-center justify-center text-center overflow-hidden">
            {/* Emblema da logo */}
            <div className="absolute top-4 left-4 opacity-20">
              <img
                src={logoAsset.url}
                alt="Emblema I.C.E.C.O."
                className="h-24 w-auto"
              />
            </div>

            <div className="relative z-10">
              <div className="mx-auto h-48 w-48 overflow-hidden rounded-full border-4 border-white/30 shadow-2xl lg:h-56 lg:w-56">
                {member.photo_url ? (
                  <img
                    src={member.photo_url}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-white/10 text-white">
                    <span className="text-6xl font-black">{member.name[0]}</span>
                  </div>
                )}
              </div>

              <div className="mt-6 space-y-2">
                <h2 className="text-2xl font-black text-white lg:text-3xl">
                  {member.name}
                </h2>
                <p className="text-sm font-bold uppercase tracking-widest text-white/80">
                  {member.role}
                </p>
              </div>

              <img
                src={logoAsset.url}
                alt="I.C.E.C.O."
                className="mx-auto mt-8 h-16 w-auto opacity-90 drop-shadow-lg"
              />
            </div>

            {/* Decoração de fundo */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
              <div className="absolute -bottom-12 -right-12 h-48 w-48 rounded-full border-8 border-white" />
              <div className="absolute -top-12 -left-12 h-32 w-32 rounded-full border-4 border-white" />
            </div>
          </div>

          {/* Coluna do conteúdo */}
          <div className="lg:col-span-3 p-6 sm:p-10">
            <DialogHeader className="text-left mb-6">
              <div className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-xs mb-3">
                <div className="h-px w-6 bg-primary" />
                Perfil Profissional
              </div>
              <DialogTitle className="text-2xl sm:text-3xl font-black text-foreground leading-tight">
                {isRodrigo || isMateus || isLucinaldo ? "Apresentação Profissional" : member.name}
              </DialogTitle>
              {isRodrigo ? (
                <DialogDescription className="text-base sm:text-lg text-primary font-bold mt-1">
                  Rodrigo de Lima Silva
                </DialogDescription>
              ) : isMateus ? (
                <DialogDescription className="text-base sm:text-lg text-primary font-bold mt-1">
                  MATHEUS WELLINGTON — Músico Percussionista
                </DialogDescription>
              ) : isLucinaldo ? (
                <DialogDescription className="text-base sm:text-lg text-primary font-bold mt-1">
                  Lucinaldo José Rodriguês de Carvalho
                </DialogDescription>
              ) : (
                <DialogDescription className="text-base text-muted-foreground mt-1">
                  {member.role}
                </DialogDescription>
              )}
            </DialogHeader>

            {isRodrigo ? (
              <div className="space-y-8">
                <p className="text-lg font-bold text-foreground leading-relaxed border-l-4 border-accent pl-4">
                  {rodrigoCurriculum.headline}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {rodrigoCurriculum.summary}
                </p>

                <div className="h-px bg-border" />

                <section>
                  <SectionTitle icon={GraduationCap}>Formação Acadêmica e Qualificações</SectionTitle>
                  <BulletList items={rodrigoCurriculum.education} />
                </section>

                <section>
                  <SectionTitle icon={Briefcase}>Experiência Profissional</SectionTitle>
                  <BulletList items={rodrigoCurriculum.experience} />
                </section>

                <section>
                  <SectionTitle icon={Trophy}>Realizações e Destaques</SectionTitle>
                  <BulletList items={rodrigoCurriculum.achievements} />
                </section>
              </div>
            ) : isMateus ? (
              <div className="space-y-8">
                <p className="text-lg font-bold text-foreground leading-relaxed border-l-4 border-accent pl-4">
                  {mateusCurriculum.headline}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {mateusCurriculum.summary}
                </p>

                <div className="h-px bg-border" />

                <section>
                  <SectionTitle icon={GraduationCap}>Formação e Qualificações</SectionTitle>
                  <BulletList items={mateusCurriculum.education} />
                </section>

                <section>
                  <SectionTitle icon={Briefcase}>Trajetória na Música</SectionTitle>
                  <BulletList items={mateusCurriculum.experience} />
                </section>

                <section>
                  <SectionTitle icon={Trophy}>Principais Títulos e Conquistas</SectionTitle>
                  <BulletList items={mateusCurriculum.achievements} />
                </section>
              </div>
            ) : isLucinaldo ? (
              <div className="space-y-8">
                <p className="text-lg font-bold text-foreground leading-relaxed border-l-4 border-accent pl-4">
                  {lucinaldoCurriculum.headline}
                </p>
                <div className="text-muted-foreground text-justify leading-relaxed space-y-4">
                  <p>{lucinaldoCurriculum.summary}</p>
                  {lucinaldoCurriculum.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                <div className="h-px bg-border" />

                <section>
                  <SectionTitle icon={Briefcase}>Áreas de Atuação</SectionTitle>
                  <BulletList items={lucinaldoCurriculum.areas} />
                </section>
              </div>
            ) : (
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {member.bio || "Membro dedicado da diretoria do I.C.E.C.O., trabalhando para o fortalecimento da comunidade em Cidade Ocidental."}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-muted/50 border border-border">
                    <Award className="h-6 w-6 text-primary mb-2" />
                    <h4 className="font-bold text-foreground">Compromisso</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Dedicação integral aos projetos culturais e esportivos da instituição.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-muted/50 border border-border">
                    <BookOpen className="h-6 w-6 text-primary mb-2" />
                    <h4 className="font-bold text-foreground">Experiência</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Atuação contínua no desenvolvimento da comunidade local.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

