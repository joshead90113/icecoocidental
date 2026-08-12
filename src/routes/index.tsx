import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import logo10Anos from "@/assets/logo-10-anos.jpg.asset.json";
import culturaBandaAsset from "@/assets/cultura-nova.jpg.asset.json";
import esporteGinasioAsset from "@/assets/esporte-ginasio.jpg.asset.json";
import diretoriaAsset from "@/assets/diretoria.jpg.asset.json";
import heroVideoAsset from "@/assets/hero-video.mp4.asset.json";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
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
      <section className="relative h-screen md:h-[80vh] w-full overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/30 z-10" />
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover animate-in fade-in duration-1000"
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
            <p className="text-lg md:text-2xl font-medium max-w-2xl opacity-90 leading-relaxed">
              O I.C.E.C.O. promove cultura, esporte, arte e inclusão social conectando talentos e oportunidades na região do Entorno.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="w-full sm:w-auto bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl">
                Quero fazer parte
              </button>
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
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm">
                <div className="h-px w-8 bg-primary" />
                Nossa História
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
                10 anos construindo <span className="text-primary italic">histórias</span> de sucesso
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Há uma década, o I.C.E.C.O. atua para fortalecer a cultura, o esporte e as iniciativas sociais, 
                conectando pessoas, talentos e oportunidades em Cidade Ocidental e região.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                {[
                  { label: "Anos de atuação", value: "10+" },
                  { label: "Cultura", value: "Ativa" },
                  { label: "Esporte", value: "Forte" },
                  { label: "Comunidade", value: "Unida" },
                ].map((stat) => (
                  <div key={stat.label} className="space-y-1">
                    <div className="text-3xl font-black text-primary">{stat.value}</div>
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800 rotate-3 md:rotate-3 transition-transform hover:rotate-0 duration-500 max-w-sm mx-auto lg:max-w-none">
                <img src={logo10Anos.url} alt="Logo 10 Anos I.C.E.C.O." className="w-full h-auto" />
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
                <button className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                  Explorar Cultura
                </button>
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
          <button className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
            Ver currículo completo <span className="text-xl">→</span>
          </button>
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
              className="px-6 py-4 rounded-full bg-white text-foreground font-medium min-w-[300px] outline-none focus:ring-4 focus:ring-secondary/50"
            />
            <button className="bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-black hover:scale-105 transition-transform shadow-xl">
              Cadastrar Agora
            </button>
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
                <li><a href="#" className="hover:text-primary transition-colors">Galeria</a></li>
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
                  <span>Cidade Ocidental, Goiás</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-secondary mt-1">📧</div>
                  <span>contato@iceco.org.br</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-secondary mt-1">📱</div>
                  <span>(61) 9999-9999</span>
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
