// 'atualiza a foto de perfil de gabriel saraiva para essa foto' (on element 'body' at '/src/routes/index.tsx:1')
import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import logo10Anos from "@/assets/logo-iceco-3d.png.asset.json";
import culturaBandaAsset from "@/assets/cultura-nova.jpg.asset.json";
import esporteGinasioAsset from "@/assets/esporte-ginasio.jpg.asset.json";
import diretoriaAsset from "@/assets/diretoria.jpg.asset.json";
import heroVideoAsset from "@/assets/hero-video.mp4.asset.json";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";
import { JoinUsModal } from "@/components/JoinUsModal";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const { data: boardMembers } = useQuery({
    queryKey: ['board-members'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('board_members')
        .select('*')
        .order('order_index');
      if (error) throw error;
      return data;
    }
  });

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-secondary selection:text-secondary-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen max-w-[100vw] min-h-[100svh] md:min-h-[80vh] overflow-hidden flex items-center border-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/30 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 block h-full w-full object-cover object-center animate-in fade-in duration-1000"
        >
          <source src={heroVideoAsset.url} type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>

        
        <div className="container relative z-20 px-4 text-white max-w-4xl py-12">
          <div className="space-y-4 md:space-y-6 animate-in slide-in-from-left duration-700">
            <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1 text-xs md:text-sm font-bold uppercase tracking-wider rounded">
              Cidade Ocidental - GO
            </span>
            <h1 className="text-4xl md:text-7xl font-black leading-tight drop-shadow-lg">
              Cultura e esporte <br/>
              <span className="text-secondary">transformando</span> vidas
            </h1>
            <p className="text-lg md:text-2xl font-medium max-w-2xl opacity-90 text-justify leading-relaxed">
              O I.C.E.C.O. promove cultura, esporte, arte e inclusão social conectando talentos e oportunidades na região do Entorno.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <JoinUsModal trigger={
                <button className="w-full sm:w-auto bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl">
                  Quero fazer parte
                </button>
              } />
              <button className="w-full sm:w-auto bg-white/10 backdrop-blur-md border-2 border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
                Conheça o I.C.E.C.O.
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 10 Anos Section - Modern Mosaic */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container px-4">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm">
                <div className="h-px w-8 bg-primary" />
                Nossa História
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
                10 anos de <span className="text-primary italic">I.C.E.C.O.</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground text-justify leading-relaxed max-w-3xl font-medium">
                Uma década transformando vidas por meio da cultura, do esporte, da educação e da cidadania.
              </p>

              <div className="space-y-5 text-muted-foreground leading-relaxed max-w-3xl text-justify">
                <p>
                  Fundado em 22 de abril de 2016, o Instituto Cultural e Esportivo de Cidade Ocidental — I.C.E.C.O. — nasceu com a missão de promover ações de relevância social, cultural, educacional e esportiva, oferecendo oportunidades e fortalecendo a participação da comunidade.
                </p>
                <p>
                  Ao longo de seus 10 anos de história, o Instituto consolidou uma atuação voltada à valorização das pessoas e ao desenvolvimento social. Suas iniciativas abrangem bandas e fanfarras, música, dança, teatro, artes visuais, formação profissional, esporte, lazer, assistência social e eventos culturais, criando espaços de aprendizado, expressão e convivência.
                </p>
                <p>
                  A cultura ocupa um lugar especial nessa trajetória. O I.C.E.C.O. promove a formação artística e musical, oficinas de instrumentos, produção de espetáculos, festivais, apresentações e projetos que utilizam a arte como instrumento de educação, inclusão e transformação social.
                </p>
                <p>
                  Também fazem parte dessa história ações voltadas ao esporte, à inclusão social, à qualificação profissional, ao voluntariado, à defesa de direitos e à melhoria da qualidade de vida, além do compromisso com a proteção e preservação do meio ambiente.
                </p>
                <p>
                  Durante essa primeira década, o I.C.E.C.O. construiu sua trajetória por meio da união entre comunidade, artistas, atletas, educadores, voluntários, instituições públicas, empresas e organizações parceiras, ampliando as possibilidades de atuação e fortalecendo sua presença social.
                </p>

                <div className="rounded-2xl bg-muted/50 border border-border/50 p-6 space-y-4">
                  <h3 className="text-xl font-black text-primary">Uma década. Muitas histórias. Um propósito.</h3>
                  <p>
                    Celebrar os 10 anos do I.C.E.C.O. é celebrar cada pessoa que participou dessa caminhada, cada projeto realizado, cada apresentação, cada atividade esportiva, cada oficina e cada oportunidade criada.
                  </p>
                  <p>
                    É olhar para o caminho percorrido e reconhecer uma história construída coletivamente — e, ao mesmo tempo, olhar para o futuro com a certeza de que ainda há muito a fazer.
                  </p>
                  <p className="font-bold text-foreground">
                    I.C.E.C.O. — 10 anos de história, cultura, esporte, educação e cidadania.
                  </p>
                  <p className="font-bold text-primary">
                    Uma década de transformação. Um futuro de novas possibilidades.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative lg:sticky lg:top-28">
              <div className="relative z-10 max-w-xs mx-auto lg:max-w-sm transition-transform hover:scale-105 duration-500">
                <img
                  src={logo10Anos.url}
                  alt="Símbolo institucional do I.C.E.C.O."
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
              {/* Geometric elements inspired by logo */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section - Projeto Guri Style Cards */}
      <section className="py-24 bg-muted/50">
        <div className="container px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black">Nossas Áreas de Atuação</h2>
            <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {/* Cultura Card */}
            <div className="group relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-border/50">
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={culturaBandaAsset.url} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt="Cultura"
                />
              </div>
              <div className="p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-3xl font-black text-primary">Cultura 🎭</h3>
                  <span className="bg-primary/10 text-primary text-xs font-black px-3 py-1 rounded-full uppercase">12 Projetos</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Música, Bandas, Fanfarras, Artistas e Teatro. Fomentamos a arte como ferramenta de expressão e transformação social.
                </p>
                <div className="flex flex-wrap gap-2 py-2">
                  {['Música', 'Fanfarras', 'Artistas', 'Teatro'].map(t => (
                    <span key={t} className="text-xs font-bold bg-muted px-2 py-1 rounded">{t}</span>
                  ))}
                </div>
                <Link
                  to="/cultura"
                  className="block w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold text-center hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                >
                  Explorar Cultura
                </Link>
              </div>
            </div>

            {/* Esporte Card */}
            <div className="group relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-border/50">
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={esporteGinasioAsset.url} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt="Esporte"
                />
              </div>
              <div className="p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-3xl font-black text-secondary">Esporte 🏆</h3>
                  <span className="bg-secondary/10 text-secondary text-xs font-black px-3 py-1 rounded-full uppercase">8 Modalidades</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Vôlei, Handebol, Futsal, Futebol e Basquete. Disciplina e saúde através do movimento e da competição saudável.
                </p>
                <div className="flex flex-wrap gap-2 py-2">
                  {['Vôlei', 'Futsal', 'Futebol', 'Basquete'].map(t => (
                    <span key={t} className="text-xs font-bold bg-muted px-2 py-1 rounded">{t}</span>
                  ))}
                </div>
                <Link 
                  to="/esporte"
                  className="w-full py-4 rounded-xl bg-secondary text-secondary-foreground font-bold hover:bg-secondary/90 transition-colors shadow-lg shadow-secondary/20 block text-center"
                >
                  Explorar Esporte
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board Members Section */}
      <section className="py-24 container px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl font-black">Diretoria <span className="text-muted-foreground/30 text-2xl font-normal block md:inline">Gestão 2026-2030</span></h2>
            <div className="h-1.5 w-20 bg-primary rounded-full" />
          </div>
          <Link
            to="/diretoria"
            className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all"
          >
            Ver currículo completo <span className="text-xl">→</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {boardMembers?.map((member) => (
            <div key={member.id} className="group cursor-pointer">
              <div className="aspect-square rounded-2xl overflow-hidden bg-muted mb-3 shadow-md border border-border group-hover:border-primary transition-colors">
                {member.photo_url ? (
                  <img src={member.photo_url} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-primary/5 text-primary">
                    <span className="text-2xl font-black">{member.name[0]}</span>
                  </div>
                )}
              </div>
              <div className="text-center md:text-left">
                <div className="font-black text-sm leading-tight group-hover:text-primary transition-colors">{member.name}</div>
                <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter">{member.role}</div>
              </div>
            </div>
          ))}
          {!boardMembers && Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="aspect-square rounded-2xl bg-muted mb-3" />
              <div className="h-3 bg-muted w-3/4 mb-1 mx-auto md:mx-0" />
              <div className="h-2 bg-muted w-1/2 mx-auto md:mx-0" />
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-20" />
        <div className="container px-4 relative z-10 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-black max-w-3xl mx-auto">Pronto para fazer parte dessa transformação?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <input 
              type="email" 
              placeholder="Seu melhor e-mail" 
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="px-6 py-4 rounded-full bg-white text-foreground font-medium min-w-[300px] outline-none focus:ring-4 focus:ring-secondary/50"
            />
            <JoinUsModal 
              defaultEmail={newsletterEmail}
              trigger={
                <button className="bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-black hover:scale-105 transition-transform shadow-xl">
                  Cadastrar Agora
                </button>
              } 
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-20 pb-10 bg-slate-900 text-slate-300">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex flex-col">
                <span className="text-3xl font-black tracking-tighter text-white">I.C.E.C.O.</span>
                <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Cidade Ocidental – GO</span>
              </div>
              <p className="text-sm leading-relaxed opacity-70">
                Instituto dedicado ao fortalecimento da cultura, do esporte e das iniciativas sociais conectando talentos e oportunidades.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/icecoocidental?igsh=cXNqZ3c3anVvamRz&igsi=cXNqZ3c3anVvamRz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer text-[10px] font-black text-white"
                  title="Instagram"
                >
                  I
                </a>
                {['Facebook', 'YouTube', 'WhatsApp'].map(social => (
                  <div key={social} className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer text-[10px] font-black">{social[0]}</div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-black uppercase text-xs tracking-widest mb-6">Navegação</h4>
              <ul className="space-y-3 text-sm font-medium">
                <li><a href="#" className="hover:text-primary transition-colors">O Instituto</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Diretoria</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Projetos</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Notícias</a></li>
                <li><Link to="/galeria" className="hover:text-primary transition-colors">Galeria</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-black uppercase text-xs tracking-widest mb-6">Cultura & Esporte</h4>
              <ul className="space-y-3 text-sm font-medium">
                <li><a href="#" className="hover:text-secondary transition-colors">Música e Fanfarras</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Teatro e Artes</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Vôlei e Handebol</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Futsal e Futebol</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Basquetebol</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-black uppercase text-xs tracking-widest mb-6">Contato</h4>
              <div className="space-y-4 text-sm font-medium">
                <div className="flex items-start gap-3">
                  <div className="text-secondary mt-1">📍</div>
                  <span>Quadra SQ 13, Quadra 8, Lote 01/19, Centro, Cidade Ocidental - GO, CEP 72880-540</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-secondary mt-1">📧</div>
                  <span>icecoocidental@gmail.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-secondary mt-1">📱</div>
                  <span>(61) 3625-2993</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest opacity-40">
            <div>© 2026 I.C.E.C.O. Todos os direitos reservados.</div>
            <div>Desenvolvido com ❤️ pela comunidade</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
