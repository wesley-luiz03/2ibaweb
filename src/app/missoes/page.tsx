"use client";

import React from "react";
import Image from "next/image";
import { Globe, Target, HeartHandshake, Sparkles, ArrowRight, BookOpen, Send } from "lucide-react";
import { TransitionLink } from "@/components/ui/TransitionLink";

export default function MissoesPage() {
  const valorArrecadado = 7850;
  const valorAlvo = 12000;
  const progresso = Math.min(Math.round((valorArrecadado / valorAlvo) * 100), 100);

  return (
    <div className="min-h-screen bg-[#F4F1EA] relative flex flex-col justify-between">
      
      {/* HEADER / HERO TEMÁTICO */}
      <div className="bg-[#1c2618] text-white pt-36 pb-20 px-6 relative overflow-hidden border-b-4 border-iba-ochre">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C29B38_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-iba-ochre/20 text-iba-ochre text-xs font-tech font-bold uppercase tracking-widest mb-6 border border-iba-ochre/30">
            <Sparkles className="w-3.5 h-3.5"/> Campanha de Missões Nacionais 2026
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-extrabold tracking-tight mb-4">
            Para que todo o Brasil ouça
          </h1>
          <p className="text-stone-300 text-base sm:text-lg font-sans max-w-2xl mx-auto leading-relaxed">
            &ldquo;E como ouvirão, se não há quem pregue? E como pregarão, se não forem enviados?&rdquo; <span className="text-iba-ochre font-bold block mt-1">Romanos 10:14,15</span>
          </p>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-16 relative z-10 w-full flex-1 space-y-16">
        
        {/* GALERIA DE CARTÕES (TEMA E DIVISA) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* CARTÃO TEMA */}
          <div className="bg-white p-5 rounded-3xl border-2 border-stone-200 shadow-lg hover:border-iba-green transition-all group">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-stone-900 mb-6 shadow-inner">
              <Image 
                src="/missoes/tema.jpg" 
                alt="Tema Para que todo o Brasil ouça" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500" 
                priority
              />
            </div>
            <div className="px-2">
              <span className="text-[10px] font-tech uppercase font-bold tracking-widest text-iba-green px-2.5 py-1 rounded-md bg-iba-green/10 inline-block mb-2">
                Tema Oficial
              </span>
              <h3 className="font-heading text-2xl font-bold text-[#1c2618]">
                Para que todo o Brasil ouça
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-sans mt-2">
                Levar a Palavra de Deus aos lugares mais remotos, cumprindo o chamado do Mestre em nossa pátria.
              </p>
            </div>
          </div>

          {/* CARTÃO DIVISA */}
          <div className="bg-white p-5 rounded-3xl border-2 border-stone-200 shadow-lg hover:border-iba-ochre transition-all group">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-stone-900 mb-6 shadow-inner">
              <Image 
                src="/missoes/divisa.jpg" 
                alt="Divisa Romanos 10:14,15" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500" 
                priority
              />
            </div>
            <div className="px-2">
              <span className="text-[10px] font-tech uppercase font-bold tracking-widest text-iba-ochre px-2.5 py-1 rounded-md bg-iba-ochre/10 inline-block mb-2">
                Divisa Bíblica
              </span>
              <h3 className="font-heading text-2xl font-bold text-[#1c2618]">
                Romanos 10:14,15
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-sans mt-2">
                A responsabilidade de enviar, orar e sustentar aqueles que anunciam as boas novas de salvação.
              </p>
            </div>
          </div>

        </div>

        {/* TERMÔMETRO DE OFERTAS DA CAMPANHA */}
        <div className="bg-gradient-to-br from-[#1c2618] to-[#2c3b28] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-iba-green/30">
          <div className="absolute right-0 bottom-0 translate-x-8 translate-y-8 opacity-5 pointer-events-none">
            <Target className="w-80 h-80 text-white" />
          </div>

          <div className="max-w-3xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-iba-ochre/20 text-iba-ochre text-xs font-tech font-bold uppercase tracking-wider mb-4 border border-iba-ochre/30">
              <Target className="w-3.5 h-3.5"/> Meta de Ofertas 2026
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mb-6">
              Ofertando com alegria para expandir o Reino
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/10 shadow-inner">
                <span className="text-xs font-tech text-stone-300 block mb-1 uppercase tracking-wider">Arrecadado até o momento</span>
                <span className="font-heading text-3xl sm:text-4xl font-extrabold text-iba-green">
                  R$ {valorArrecadado.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
              </div>
              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/10 shadow-inner">
                <span className="text-xs font-tech text-stone-300 block mb-1 uppercase tracking-wider">Alvo da Campanha</span>
                <span className="font-heading text-3xl sm:text-4xl font-extrabold text-iba-ochre">
                  R$ {valorAlvo.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
              </div>
            </div>

            {/* BARRA DE PROGRESSO */}
            <div className="space-y-3">
              <div className="flex justify-between text-xs font-tech font-bold uppercase tracking-wider">
                <span className="text-stone-300">Progresso Geral</span>
                <span className="text-iba-ochre">{progresso}% Concluído</span>
              </div>
              <div className="w-full h-5 bg-black/30 rounded-full overflow-hidden p-1 border border-white/20 shadow-inner">
                <div 
                  className="h-full bg-gradient-to-r from-iba-ochre via-amber-500 to-iba-green rounded-full transition-all duration-1000"
                  style={{ width: `${progresso}%` }}
                ></div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-stone-300 font-sans">
                Participe entregando a sua oferta missionária voluntária através da nossa página de contribuições.
              </p>
              <TransitionLink
                href="/contribuicoes"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-iba-ochre hover:bg-iba-ochre/90 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shrink-0 hover:scale-105"
              >
                Contribuir Agora
                <ArrowRight className="w-4 h-4" />
              </TransitionLink>
            </div>
          </div>
        </div>

        {/* BLOCOS DE AVISOS E ENVOLVIMENTO */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="bg-white p-8 rounded-3xl border-2 border-stone-200 shadow-sm flex flex-col justify-between hover:border-iba-green transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-iba-green/10 text-iba-green flex items-center justify-center mb-6">
                <HeartHandshake className="w-6 h-6"/>
              </div>
              <span className="text-[10px] font-tech uppercase font-bold text-iba-green block mb-1">Mobilização</span>
              <h3 className="font-heading text-xl font-bold text-[#1c2618] mb-3">Ofertas de Amor</h3>
              <p className="text-xs sm:text-sm text-stone-700 font-sans leading-relaxed">
                As ofertas arrecadadas são revertidas integralmente para o sustento de frentes missionárias nacionais e projetos no campo.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-stone-100">
              <TransitionLink href="/contribuicoes" className="inline-flex items-center gap-2 text-xs font-tech font-bold text-iba-green hover:underline">
                Acessar Canal de Ofertas <ArrowRight className="w-4 h-4"/>
              </TransitionLink>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border-2 border-stone-200 shadow-sm flex flex-col justify-between hover:border-iba-ochre transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-iba-ochre/10 text-iba-ochre flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6"/>
              </div>
              <span className="text-[10px] font-tech uppercase font-bold text-iba-ochre block mb-1">Intercessão</span>
              <h3 className="font-heading text-xl font-bold text-[#1c2618] mb-3">Alvos de Oração</h3>
              <p className="text-xs sm:text-sm text-stone-700 font-sans leading-relaxed">
                Acompanhe os pedidos semanais e coloque os missionários brasileiros em suas orações diárias e cultos de cultos de oração.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-stone-100 text-xs font-tech text-stone-500 font-bold">
              Cultos de Oração às Quartas-feiras
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border-2 border-stone-200 shadow-sm flex flex-col justify-between hover:border-blue-600 transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <Send className="w-6 h-6"/>
              </div>
              <span className="text-[10px] font-tech uppercase font-bold text-blue-600 block mb-1">Órgão Oficial</span>
              <h3 className="font-heading text-xl font-bold text-[#1c2618] mb-3">Missões Nacionais</h3>
              <p className="text-xs sm:text-sm text-stone-700 font-sans leading-relaxed">
                Conheça em detalhes o impacto e os projetos de plantação de igrejas promovidos pela Convenção Batista Brasileira.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-stone-100">
              <a href="https://missoesnacionais.org.br/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-tech font-bold text-blue-600 hover:underline">
                Visitar Site Oficial <ArrowRight className="w-4 h-4"/>
              </a>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
}