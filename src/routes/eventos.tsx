import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import rifaAsset from "@/assets/rifa-solidaria.jpg.asset.json";
import { Calendar, Ticket, Wallet, Info } from "lucide-react";

export const Route = createFileRoute("/eventos")({
  component: Eventos,
});

function Eventos() {
  const { data: raffles, isLoading } = useQuery({
    queryKey: ['raffles'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('raffles')
        .select('id, title, description, prize, ticket_price, draw_date, pix_qr_code_url, status, image_url, created_at')
        .order('draw_date', { ascending: true });
      if (error) throw error;
      return data;
    }
  });

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      
      <header className="bg-primary py-16 text-white text-center">
        <div className="container px-4">
          <h1 className="text-4xl md:text-6xl font-black mb-4">Eventos & Rifas</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Participe das nossas iniciativas solidárias e ajude a fortalecer a cultura e o esporte em nossa cidade.
          </p>
        </div>
      </header>

      <main className="container px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {isLoading ? (
            <div className="col-span-full flex justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : raffles && raffles.length > 0 ? (
            raffles.map((raffle) => (
              <div key={raffle.id} className="bg-card rounded-3xl overflow-hidden shadow-2xl border border-border group hover:border-primary/50 transition-all duration-300">
                <div className="grid md:grid-cols-5 h-full">
                  <div className="md:col-span-2 relative aspect-square md:aspect-auto overflow-hidden">
                    <img 
                      src={rifaAsset.url} 
                      alt={raffle.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-secondary text-secondary-foreground text-xs font-black px-3 py-1.5 rounded-full uppercase shadow-lg">
                        {raffle.status === 'active' ? 'Ativo' : 'Encerrado'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="md:col-span-3 p-8 flex flex-col justify-between">
                    <div>
                      <h2 className="text-2xl font-black text-primary mb-2">{raffle.title}</h2>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm font-bold mb-4">
                        <Calendar className="h-4 w-4 text-secondary" />
                        Sorteio: {new Date(raffle.draw_date).toLocaleString('pt-BR')}
                      </div>
                      
                      <div className="bg-muted/50 p-4 rounded-2xl mb-6 border border-border/50">
                        <div className="text-xs font-black text-muted-foreground uppercase tracking-widest mb-1">Prêmio:</div>
                        <div className="text-lg font-bold leading-tight">{raffle.prize}</div>
                      </div>

                      <div className="space-y-4 mb-6">
                        <div className="flex items-start gap-3">
                          <Ticket className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                          <div>
                            <span className="block font-black text-sm uppercase tracking-tighter">Valor do Bilhete</span>
                            <span className="text-2xl font-black text-foreground">R$ {raffle.ticket_price.toFixed(2)}</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <p className="text-sm text-muted-foreground leading-tight">
                            {raffle.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-xl border border-primary/20">
                        <Wallet className="h-5 w-5 text-primary" />
                        <div>
                          <span className="block text-[10px] font-black uppercase text-primary/70">Como adquirir:</span>
                          <span className="font-bold text-sm">Solicite a chave PIX pelo telefone (61) 3625-2993</span>
                        </div>
                      </div>
                      <button className="w-full py-4 bg-secondary text-secondary-foreground font-black rounded-xl hover:scale-[1.02] transition-transform shadow-xl">
                        PARTICIPAR AGORA
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20 bg-muted rounded-3xl border-2 border-dashed">
              <p className="text-xl font-bold text-muted-foreground">Nenhuma rifa ou evento ativo no momento.</p>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-slate-900 py-12 text-slate-400 text-center border-t border-slate-800">
        <div className="container px-4">
          <p className="text-sm font-bold uppercase tracking-widest">I.C.E.C.O. — Instituto Cultural e Esportivo de Cidade Ocidental</p>
        </div>
      </footer>
    </div>
  );
}
