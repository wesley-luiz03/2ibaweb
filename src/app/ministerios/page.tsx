"use client";

import Link from "next/link";
import { TechCard } from "@/components/ui/TechCard";
import { Users, Heart, BookOpen, Music, Smile, ShieldCheck, Clock, ArrowLeft } from "lucide-react";
import { Footer } from "@/components/layout/Footer";

const MINISTERIOS = [
  {
    titulo: "2iba Kids",
    sub: "Ministério Infantil",
    descricao: "Salas de aula estruturadas, recreação com supervisão e ensino bíblico lúdico para crianças enquanto os pais participam do culto.",
    icone: Smile,
    color: "bg-iba-blue",
  },
  {
    titulo: "Ministério de Louvor",
    sub: "Adoração & Música",
    descricao: "Equipe dedicada a conduzir a igreja em cânticos espirituais, louvor congregacional genuíno e exaltação a Deus com excelência.",
    icone: Music,
    color: "bg-iba-green",
  },
  {
    titulo: "Escola Bíblica (EBD)",
    sub: "Ensino Teológico",
    descricao: "Classes semanais de estudo sistemático das Escrituras para todas as idades, promovendo crescimento espiritual e doutrinário.",
    icone: BookOpen,
    color: "bg-iba-ochre",
  },
  {
    titulo: "Ministério de Intercessão",
    sub: "Oração & Cuidado",
    descricao: "Grupo dedicado à intercessão constante pelas famílias, petições da igreja e clamor espiritual nas reuniões de oração.",
    icone: Heart,
    color: "bg-iba-green",
  },
  {
    titulo: "Ação Social Comunitária",
    sub: "Amor Prático",
    descricao: "Projetos de assistência a famílias carentes, distribuição de cestas básicas e apoio humanitário no bairro de Areias e arredores.",
    icone: Users,
    color: "bg-iba-blue",
  },
  {
    titulo: "Acolhimento & Recepção",
    sub: "Comunidade Acolhedora",
    descricao: "Equipe de voluntários focada em receber novos visitantes com alegria, indicar assentos e apresentar as dependências da igreja.",
    icone: ShieldCheck,
    color: "bg-iba-ochre",
  },
];

export default function MinisteriosPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] relative flex flex-col justify-between">
      <main className="max-w-7xl mx-auto px-6 pt-36 pb-24 relative z-10 w-full flex-1">
        {/* CONTEÚDO ENVOLVIDO NA CAMADA DESFOCADA */}
        <div className="blur-md pointer-events-none opacity-40 select-none transition-all duration-300">
          <div className="mb-12">
            <div className="flex items-center gap-2">
              <span className="text-xs font-tech uppercase tracking-widest text-iba-ochre font-bold flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5" /> Servindo com Dons e Talentos
              </span>
              <span className="px-2 py-0.5 text-[10px] font-tech bg-iba-ochre/10 text-iba-ochre rounded font-semibold">
                Comunidade Ativa
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl font-normal text-[#1c2618] mt-2 tracking-tight">
              Nossos Ministérios
            </h1>
            <p className="text-stone-600 text-sm sm:text-base max-w-xl mt-3 leading-relaxed font-sans">
              Conheça as frentes de serviço e comunhão da Segunda Igreja Batista em Areias. Há um lugar para você servir e crescer em amor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MINISTERIOS.map((item, idx) => {
              const Icon = item.icone;
              return (
                <TechCard key={idx} className="p-8 flex flex-col justify-between">
                  <div>
                    <div className={`w-12 h-12 rounded-2xl ${item.color} text-white flex items-center justify-center mb-6 shadow-md`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-tech uppercase font-bold tracking-wider text-stone-500">
                      {item.sub}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#1c2618] mt-1 mb-3">
                      {item.titulo}
                    </h3>
                    <p className="text-sm text-stone-600 leading-relaxed mb-6 font-sans">
                      {item.descricao}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-stone-200">
                    <span className="text-xs font-tech font-bold text-iba-green">Participe deste ministério →</span>
                  </div>
                </TechCard>
              );
            })}
          </div>
        </div>
      </main>

      {/* CAIXA DE AVISO CENTRALIZADA SOBREPOSTA (OVERLAY DE MANUTENÇÃO) */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm">
        <div className="bg-white rounded-3xl p-8 sm:p-12 max-w-lg w-full shadow-2xl border border-stone-200 text-center animate-fadeIn relative overflow-hidden">
          <div className="w-16 h-16 rounded-2xl bg-iba-green/10 text-iba-green flex items-center justify-center mx-auto mb-6 shadow-sm">
            <Clock className="w-8 h-8 animate-pulse" />
          </div>

          <span className="text-xs font-tech uppercase tracking-widest text-iba-green font-bold block mb-2">
            Atualização em Andamento
          </span>

          <h2 className="font-serif text-3xl font-normal text-[#1c2618] mb-4">
            Página em Manutenção
          </h2>

          <p className="text-stone-600 text-sm leading-relaxed font-sans mb-8">
            Estamos reorganizando a estrutura dos nossos ministérios para melhor servir à nossa comunidade. Em breve todas as informações estarão disponíveis aqui!
          </p>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-iba-green hover:bg-iba-green-hover text-white font-bold text-xs uppercase tracking-wider transition shadow-lg w-full sm:w-auto"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para o Início
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
