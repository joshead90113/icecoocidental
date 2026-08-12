import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import ginasioAsset from "@/assets/ginasio-lindolfo-lima.jpg.asset.json";

export const Route = createFileRoute("/esporte")({
  component: EsportePage,
});

function EsportePage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      
      <main className="container px-4 py-24 max-w-4xl mx-auto">
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <header className="space-y-4 text-center">
            <span className="inline-block bg-secondary/10 text-secondary text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest">
              Infraestrutura Esportiva
            </span>
            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              Ginásio de Esportes <br/>
              <span className="text-secondary">Lindolfo Lima Neto</span>
            </h1>
            <p className="text-muted-foreground font-bold italic">
              Cidade Ocidental (GO)
            </p>
          </header>

          <div className="relative group rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800 shadow-secondary/10">
            <img 
              src={ginasioAsset.url} 
              alt="Ginásio de Esportes Lindolfo Lima Neto" 
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
              <p className="text-white font-bold text-lg">O coração do esporte municipal</p>
            </div>
          </div>

          <div className="grid gap-8 md:gap-12">
            <section className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-xl leading-relaxed font-medium">
                O Ginásio de Esportes Lindolfo Lima Neto, conhecido popularmente como <strong>Ginásio Lindolfo Lima</strong>, é a principal e mais tradicional instalação esportiva coberta de Cidade Ocidental, Goiás. Fica na SQ 13, Área Especial — Centro, e também serve como sede da Secretaria Municipal de Esporte, Lazer e Juventude.
              </p>
            </section>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-muted/30 p-8 rounded-3xl border border-border space-y-4">
                <h2 className="text-2xl font-black flex items-center gap-2">
                  <span className="text-secondary">🏗️</span> História e Estrutura
                </h2>
                <ul className="space-y-3 text-muted-foreground font-medium">
                  <li className="flex gap-2">
                    <span className="text-secondary">•</span>
                    Construído há mais de 20 anos, recebeu sua primeira grande reforma entregue em agosto de 2020.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary">•</span>
                    A reforma incluiu: pintura, ampliação da quadra, iluminação LED, restauração de banheiros e arquibancadas.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary">•</span>
                    Possui quadra poliesportiva coberta, vestiários e área administrativa.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary">•</span>
                    Recebe o nome de Lindolfo Lima Neto, cidadão homenageado por serviços prestados ao município.
                  </li>
                </ul>
              </div>

              <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10 space-y-4">
                <h2 className="text-2xl font-black flex items-center gap-2">
                  <span className="text-primary">🏀</span> Uso e Importância
                </h2>
                <ul className="space-y-3 text-muted-foreground font-medium">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    Principal palco de competições municipais, estaduais e atividades escolares.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    Sede do projeto social "Pequenos Atletas Grandes Cidadãos".
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    Horário: Segunda a sexta, das 8h às 18h (reservas disponíveis).
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    Ponto de referência central para a vida comunitária da cidade.
                  </li>
                </ul>
              </div>
            </div>

            <footer className="text-center py-8 bg-secondary/5 rounded-3xl border border-secondary/10">
              <p className="text-lg font-bold text-secondary">
                Em resumo: um espaço público revitalizado, essencial para a prática esportiva e a vida comunitária de Cidade Ocidental.
              </p>
            </footer>
          </div>
        </div>
      </main>

      {/* Reusing Footer from index - in a real app this would be a shared component */}
      <footer className="pt-20 pb-10 bg-slate-900 text-slate-300 mt-24">
        <div className="container px-4 text-center">
          <div className="flex flex-col items-center gap-4">
            <span className="text-3xl font-black tracking-tighter text-white">I.C.E.C.O.</span>
            <p className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Cidade Ocidental – GO</p>
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
