"use client";

import { useEffect, useRef } from "react";
import { LiveSection } from "@/components/home/LiveSection";
import { LocationSection } from "@/components/home/LocationSection";
// IMPORT CORRIGIDO: Utilizando o Link nativo para evitar conflitos de alias no VS Code
import { TransitionLink } from "@/components/ui/TransitionLink";
import { ArrowRight, Clock, MapPin, Sparkles, Smile, Users } from "lucide-react";

export default function Home() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.setProperty("--x", `${e.clientX}px`);
        glowRef.current.style.setProperty("--y", `${e.clientY}px`);
      }
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="relative">
      <div id="cursor-glow" ref={glowRef} className="fixed inset-0 z-0 transition-opacity duration-300" />

      <div className="relative z-10">
        {/* HERO SECTION */}
        <section className="min-h-[85vh] flex flex-col justify-between pt-36 pb-16 px-6 max-w-7xl mx-auto">
          <div className="flex items-center justify-between text-xs font-tech uppercase tracking-widest text-iba-green pt-4 border-b border-stone-200 pb-4">
            <span className="flex items-center gap-2 font-semibold text-stone-800">
              <span className="px-2.5 py-0.5 rounded bg-iba-green/10 text-iba-green font-bold">2026</span>
              Segunda Igreja Batista em Areias • Recife - PE
            </span>
            <span className="flex items-center gap-2 text-stone-700 hidden sm:flex font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              Cultos Presenciais aos Domingos
            </span>
          </div>

          <div className="my-auto py-16">
            <span className="text-xs font-tech uppercase tracking-widest text-iba-ochre font-bold block mb-4">
              Comunidade Cristã Viva
            </span>
            <h1 className="font-heading text-5xl sm:text-7xl lg:text-9xl font-extrabold text-[#1c2618] leading-[0.92] tracking-tighter">
              CRESCER EM <span className="text-iba-green">CRISTO.</span><br />
              SERVIR EM <span className="text-iba-ochre">AMOR.</span>
            </h1>

            <div className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-8 max-w-3xl border-t border-stone-200 pt-8">
              <p className="text-base sm:text-lg text-stone-700 font-sans leading-relaxed max-w-xl">
                Uma comunidade bíblica acolhedora no bairro de Areias, Recife. Portas abertas, sem burocracia ou formalismos. Venha como você é.
              </p>
              <div className="flex items-center gap-4 shrink-0">
                <TransitionLink
                  href="/sobre"
                  className="px-8 py-4 rounded-xl bg-iba-green-dark hover:bg-iba-green text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg"
                >
                  PRIMEIRA VEZ NA 2IBA?
                  <ArrowRight className="w-4 h-4" />
                </TransitionLink>
              </div>
            </div>
          </div>

          {/* SEÇÃO DE CULTOS FIXOS DA SEMANA (CARDS RÁPIDOS) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-stone-200">
            <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm hover:border-iba-ochre/40 transition-all">
              <span className="text-[10px] font-tech text-iba-ochre uppercase font-bold tracking-wider block mb-2">Domingo • 09:00</span>
              <h3 className="font-heading text-xl font-bold text-[#1c2618]">Escola Bíblica Dominical</h3>
              <p className="text-xs text-stone-700 mt-1 font-sans">Estudo sistemático das Escrituras para todas as idades.</p>
            </div>

            <div className="p-6 bg-[#f4f1ea] rounded-2xl border border-stone-200 shadow-sm hover:border-iba-green/40 transition-all">
              <span className="text-[10px] font-tech text-iba-green uppercase font-bold tracking-wider block mb-2">Domingo • 18:00</span>
              <h3 className="font-heading text-xl font-bold text-[#1c2618]">Culto da Família</h3>
              <p className="text-xs text-stone-700 mt-1 font-sans">Nosso culto principal de celebração e pregação da Palavra.</p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm hover:border-iba-blue/40 transition-all">
              <span className="text-[10px] font-tech text-iba-blue uppercase font-bold tracking-wider block mb-2">Quarta-Feira • 19:30</span>
              <h3 className="font-heading text-xl font-bold text-[#1c2618]">Culto de Oração</h3>
              <p className="text-xs text-stone-700 mt-1 font-sans">Noite de intercessão comunitária e edificação.</p>
            </div>
          </div>
        </section>

        {/* SEÇÃO DE ACOLHIMENTO */}
        <section id="acolhimento" className="py-24 px-6 bg-[#f4f1ea] border-y border-stone-200 my-16">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-16">
              <span className="text-xs font-tech uppercase tracking-widest text-iba-green font-bold block mb-2">
                Recepção & Acolhimento
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#1c2618] tracking-tight">
                Sua Chegada na 2IBA
              </h2>
              <p className="text-stone-700 text-base mt-4 font-sans leading-relaxed">
                Queremos tornar a sua primeira visita leve, calorosa e inesquecível. Aqui estão algumas informações úteis para você e sua família.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-stone-200 flex flex-col justify-between shadow-sm">
                <div>
                  <span className="font-heading text-3xl font-bold text-iba-green block mb-4">01</span>
                  <h3 className="font-heading text-xl font-bold text-[#1c2618] mb-3">Horários dos Cultos</h3>
                  <p className="text-xs text-stone-700 font-sans leading-relaxed">
                    Aos domingos temos a EBD às 09h e o Culto da Família às 18h. Às quartas-feiras nos reunimos para oração às 19h30.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-stone-100 text-[11px] font-tech font-bold text-stone-600">
                  Pontualidade e comunhão
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-stone-200 flex flex-col justify-between shadow-sm">
                <div>
                  <span className="font-heading text-3xl font-bold text-iba-ochre block mb-4">02</span>
                  <h3 className="font-heading text-xl font-bold text-[#1c2618] mb-3">2IBA Kids</h3>
                  <p className="text-xs text-stone-700 font-sans leading-relaxed">
                    Salas estruturadas com supervisão amorosa e ensino bíblico lúdico e seguro para os pequeninos durante os cultos.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-stone-100 text-[11px] font-tech font-bold text-stone-600">
                  Ambiente seguro e lúdico
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-stone-200 flex flex-col justify-between shadow-sm">
                <div>
                  <span className="font-heading text-3xl font-bold text-iba-blue block mb-4">03</span>
                  <h3 className="font-heading text-xl font-bold text-[#1c2618] mb-3">Como se Vestir?</h3>
                  <p className="text-xs text-stone-700 font-sans leading-relaxed">
                    Vá da maneira que se sentir mais confortável e à vontade. O que importa é o seu coração e a adoração a Deus.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-stone-100 text-[11px] font-tech font-bold text-stone-600">
                  Sem formalismos excessivos
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-stone-200 flex flex-col justify-between shadow-sm">
                <div>
                  <span className="font-heading text-3xl font-bold text-emerald-700 block mb-4">04</span>
                  <h3 className="font-heading text-xl font-bold text-[#1c2618] mb-3">Onde Estamos?</h3>
                  <p className="text-xs text-stone-700 font-sans leading-relaxed">
                    Estamos localizados no coração de Areias, em Recife - PE. Nossa equipe de recepção estará na entrada.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-stone-100 text-[11px] font-tech font-bold text-stone-600">
                  Areias, Recife - PE
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LIVE SECTION */}
        <LiveSection />

        {/* LOCATION SECTION */}
        <LocationSection />
      </div>
    </div>
  );
}