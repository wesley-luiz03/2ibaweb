"use client";

import React, { useState } from "react";
import { Sparkles, Sun, Moon, Calendar, ArrowRight, HeartHandshake } from "lucide-react";
import boletimData from "@/data/boletim-atual.json";
import { TransitionLink } from "@/components/ui/TransitionLink";

export default function BoletimPage() {
  const [abaAtiva, setAbaAtiva] = useState<"diurno" | "noturno">("diurno");

  return (
    <div className="min-h-screen bg-[#FAF8F5] relative flex flex-col justify-between">
      <main className="max-w-5xl mx-auto px-6 pt-36 pb-24 relative z-10 w-full flex-1">
        
        {/* CABEÇALHO DO BOLETIM */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-iba-green/10 text-iba-green text-xs font-tech font-bold uppercase tracking-widest mb-4 border border-iba-green/20">
            <Sparkles className="w-3.5 h-3.5"/> Informativo Oficial
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-extrabold text-[#1c2618] tracking-tight">
            Boletim 2IBA
          </h1>
          <p className="text-stone-700 text-sm sm:text-base font-sans mt-3 leading-relaxed">
            Acompanhe a programação, avisos da semana, ordens de cultos e comunhão. Edição de {boletimData.dataEdicao}.
          </p>
        </div>

        {/* SUB-ABAS DE SELEÇÃO */}
        <div className="flex justify-center items-center gap-3 mb-10">
          <button
            onClick={() => setAbaAtiva("diurno")}
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-tech text-xs font-bold uppercase tracking-wider transition-all shadow-sm ${
              abaAtiva === "diurno"
                ? "bg-iba-green text-white shadow-md scale-105"
                : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
            }`}
          >
            <Sun className="w-4 h-4"/>
            Culto Diurno (Matinal)
          </button>

          <button
            onClick={() => setAbaAtiva("noturno")}
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-tech text-xs font-bold uppercase tracking-wider transition-all shadow-sm ${
              abaAtiva === "noturno"
                ? "bg-[#1c2618] text-white shadow-md scale-105"
                : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
            }`}
          >
            <Moon className="w-4 h-4"/>
            Culto Noturno (Família)
          </button>
        </div>

        {/* CONTEÚDO DO BOLETIM SELECIONADO */}
        <div className="bg-white rounded-3xl border border-stone-200 p-8 sm:p-12 shadow-sm max-w-3xl mx-auto">
          
          {abaAtiva === "diurno" ? (
            <div>
              <div className="border-b border-stone-200 pb-6 mb-8 text-center">
                <span className="text-[10px] font-tech uppercase font-bold text-iba-green tracking-widest block mb-1">
                  {boletimData.cultoDiurno.subtitulo}
                </span>
                <h2 className="font-heading text-3xl font-extrabold text-[#1c2618]">
                  {boletimData.cultoDiurno.titulo}
                </h2>
              </div>

              <div className="space-y-6">
                <ul className="space-y-3">
                  {boletimData.cultoDiurno.itens.map((item, idx) => (
                    <li key={idx} className="text-sm font-sans text-stone-700 flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-iba-green shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* CAIXA PADRONIZADA DE LEITURA BÍBLICA */}
                <div className="bg-[#f4f1ea] p-6 rounded-2xl border border-stone-200 my-6">
                  <span className="text-xs font-tech font-bold text-iba-green uppercase tracking-wider block mb-2">
                    Leitura Bíblica: {boletimData.cultoDiurno.leitura.referencia} (NVI)
                  </span>
                  <p className="font-serif italic text-xs sm:text-sm text-stone-700 leading-relaxed">
                    &ldquo;{boletimData.cultoDiurno.leitura.texto}&rdquo;
                  </p>
                </div>

                <div className="pt-2">
                  <ul className="space-y-3">
                    {boletimData.cultoDiurno.itensFinais.map((item, idx) => (
                      <li key={idx} className="text-sm font-sans text-stone-700 flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-iba-green shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="border-b border-stone-200 pb-6 mb-8 text-center">
                <span className="text-[10px] font-tech uppercase font-bold text-iba-ochre tracking-widest block mb-1">
                  {boletimData.cultoNoturno.subtitulo}
                </span>
                <h2 className="font-heading text-3xl font-extrabold text-[#1c2618]">
                  {boletimData.cultoNoturno.titulo}
                </h2>
              </div>

              <div className="space-y-6">
                <ul className="space-y-3">
                  {boletimData.cultoNoturno.itens.map((item, idx) => (
                    <li key={idx} className="text-sm font-sans text-stone-700 flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-iba-ochre shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* CAIXA PADRONIZADA DE LEITURA BÍBLICA */}
                <div className="bg-[#f4f1ea] p-6 rounded-2xl border border-stone-200 my-6">
                  <span className="text-xs font-tech font-bold text-iba-ochre uppercase tracking-wider block mb-2">
                    Leitura Bíblica: {boletimData.cultoNoturno.leitura.referencia} (NVI)
                  </span>
                  <p className="font-serif italic text-xs sm:text-sm text-stone-700 leading-relaxed">
                    &ldquo;{boletimData.cultoNoturno.leitura.texto}&rdquo;
                  </p>
                </div>

                <div className="pt-2">
                  <ul className="space-y-3">
                    {boletimData.cultoNoturno.itensFinais.map((item, idx) => (
                      <li key={idx} className="text-sm font-sans text-stone-700 flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-iba-ochre shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* RODAPÉ DO BOLETIM */}
        <div className="max-w-3xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <TransitionLink className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm hover:border-iba-green transition-all flex items-center justify-between group" href="/agenda">
            <div>
              <span className="text-[10px] font-tech uppercase font-bold text-iba-green block mb-1">Programação</span>
              <h4 className="font-heading text-lg font-bold text-[#1c2618]">Ver Agenda do Mês</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:translate-x-1 group-hover:text-iba-green transition-all"/>
          </TransitionLink>

          <TransitionLink className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm hover:border-iba-ochre transition-all flex items-center justify-between group" href="/contribuicoes">
            <div>
              <span className="text-[10px] font-tech uppercase font-bold text-iba-ochre block mb-1">Fidelidade</span>
              <h4 className="font-heading text-lg font-bold text-[#1c2618]">Dízimos e Ofertas</h4>
            </div>
            <HeartHandshake className="w-5 h-5 text-stone-400 group-hover:text-iba-ochre transition-all"/>
          </TransitionLink>
        </div>

      </main>
    </div>
  );
}