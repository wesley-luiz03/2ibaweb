"use client";

import React, { useState } from "react";
import { Users, ChevronDown, Award } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import ministeriosData from "@/data/ministerios.json";
import Image from "next/image";

export default function MinisteriosPage() {
  // Controla qual membro está expandido em cada ministério (chave: "idMinisterio-indiceMembro")
  const [expandedMember, setExpandedMember] = useState<string | null>(null);

  const toggleMember = (key: string) => {
    setExpandedMember(expandedMember === key ? null : key);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] relative flex flex-col justify-between">
      <main className="max-w-5xl mx-auto px-6 pt-36 pb-24 relative z-10 w-full flex-1">
        
        {/* CABEÇALHO */}
        <div className="mb-12">
          <div className="flex items-center gap-2">
            <span className="text-xs font-tech uppercase tracking-widest text-iba-green font-bold flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" /> Servindo com Dons e Talentos
            </span>
            <span className="px-2 py-0.5 text-[10px] font-tech bg-iba-green/10 text-iba-green rounded font-semibold">
              Oficial 2026
            </span>
          </div>
          <h1 className="font-heading text-4xl sm:text-6xl font-extrabold text-[#1c2618] mt-2 tracking-tight">
            Nossos Ministérios
          </h1>
          <p className="text-stone-700 text-sm sm:text-base max-w-xl mt-3 leading-relaxed font-sans">
            Passe o mouse ou toque sobre os nomes para expandir e conhecer a liderança detalhada de cada departamento.
          </p>
        </div>

        {/* LISTA DE RETÂNGULOS POR MINISTÉRIO */}
        <div className="flex flex-col gap-8">
          {ministeriosData.map((ministerio) => (
            <div 
              key={ministerio.id}
              className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden p-6 sm:p-8"
            >
              {/* TÍTULO DO MINISTÉRIO (O RETÂNGULO PAI) */}
              <div className="mb-6 pb-4 border-b border-stone-100">
                <span className="text-[10px] font-tech uppercase font-bold tracking-wider text-iba-green block mb-1">
                  {ministerio.sub}
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1c2618]">
                  {ministerio.titulo}
                </h2>
              </div>

              {/* LISTA DE FAIXAS/MEMBROS DENTRO DO RETÂNGULO */}
              <div className="flex flex-col gap-3">
                {ministerio.membros.map((membro, idx) => {
                  const uniqueKey = `${ministerio.id}-${idx}`;
                  const isExpanded = expandedMember === uniqueKey;

                  return (
                    <div
                      key={idx}
                      onMouseEnter={() => setExpandedMember(uniqueKey)}
                      onClick={() => toggleMember(uniqueKey)}
                      className={`rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                        isExpanded 
                          ? "bg-[#f4f1ea] border-iba-green/50 shadow-md" 
                          : "bg-stone-50/60 border-stone-200 hover:border-iba-green/30 hover:bg-stone-50"
                      }`}
                    >
                      {/* CABEÇALHO DA FAIXA (NOME DO LÍDER) */}
                      <div className="p-4 sm:p-5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-iba-green/10 text-iba-green flex items-center justify-center font-bold text-xs">
                            {idx + 1}
                          </div>
                          <div>
                            <h3 className="font-heading text-lg sm:text-xl font-bold text-[#1c2618]">
                              {membro.nome}
                            </h3>
                            <span className="text-[11px] font-tech text-stone-500 uppercase tracking-wide">
                              {membro.cargo}
                            </span>
                          </div>
                        </div>

                        <ChevronDown className={`w-5 h-5 text-stone-400 transition-transform duration-300 ${isExpanded ? "rotate-180 text-iba-green" : ""}`} />
                      </div>

                      {/* CONTEÚDO EXPANSÍVEL (FOTO + DESCRIÇÃO) */}
                      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? "max-h-[300px] opacity-100 p-5 pt-0" : "max-h-0 opacity-0 px-5 py-0"}`}>
                        <div className="pt-4 border-t border-stone-200/60 flex flex-col sm:flex-row items-center sm:items-start gap-6">
                          
                          {/* FOTO DO LÍDER */}
                          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-stone-200 relative overflow-hidden shrink-0 shadow-inner border border-stone-300">
                            {membro.foto && membro.foto.trim() !== "" ? (
                              <Image 
                                src={membro.foto} 
                                alt={membro.nome} 
                                fill 
                                className="object-cover"
                              />
                            ) : (
                              <div className="absolute inset-0 flex flex-col items-center justify-center bg-stone-100 text-stone-400 p-2 text-center">
                                <Award className="w-8 h-8 mb-1 text-iba-green/60" />
                                <span className="text-[9px] font-tech uppercase">Sem Foto</span>
                              </div>
                            )}
                          </div>

                          {/* DESCRIÇÃO */}
                          <div className="flex-1 text-center sm:text-left">
                            <span className="text-[10px] font-tech uppercase font-bold text-iba-green block mb-1">
                              Atribuições & Perfil
                            </span>
                            <p className="text-xs sm:text-sm text-stone-700 font-sans leading-relaxed">
                              {membro.descricao}
                            </p>
                          </div>

                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

      </main>

      <Footer />
    </div>
  );
}