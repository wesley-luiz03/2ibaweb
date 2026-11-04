"use client";

import React from "react";
import { Calendar, MapPin, Download, ShieldAlert, Sparkles } from "lucide-react";
import eventosNovembro from "@/data/agenda-events.json";

export default function AgendaPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] relative flex flex-col font-sans">
      <main className="max-w-7xl mx-auto px-6 pt-36 pb-24 relative z-10 w-full flex-1">
        
        {/* CABEÇALHO DA PÁGINA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-tech uppercase tracking-widest text-iba-green font-bold flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" /> Programação & Encontros
              </span>
              <span className="px-2 py-0.5 text-[10px] font-tech bg-iba-green/10 text-iba-green rounded font-semibold">
                Calendário 2026
              </span>
            </div>
            <h1 className="font-heading text-4xl sm:text-6xl font-extrabold text-[#1c2618] mt-2 tracking-tight">
              Agenda da Igreja
            </h1>
            <p className="text-stone-700 text-sm sm:text-base max-w-xl mt-3 leading-relaxed font-sans">
              Fique por dentro de todos os cultos semanais, programações especiais e eventos oficiais da Segunda Igreja Batista em Areias.
            </p>
          </div>

          <div>
            <a
              href="https://drive.google.com/file/d/1UoQiysgCKP-JDkbWWq8KWCxr6eF6yU1r/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-iba-green hover:bg-iba-green-hover text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:scale-105"
            >
              <Download className="w-4 h-4" />
              BAIXAR CALENDÁRIO OFICIAL (PDF)
            </a>
          </div>
        </div>

        {/* BANNER TEMÁTICO: NOVEMBRO AZUL */}
        <div className="mb-16 relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-800 p-8 sm:p-10 text-white shadow-xl border border-blue-500/30">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <ShieldAlert className="w-48 h-48" />
          </div>
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-tech font-bold uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5 text-cyan-300 animate-pulse" /> Campanha de Conscientização
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight">
              NOVEMBRO AZUL 💙
            </h2>
            <p className="text-stone-200 text-sm sm:text-base mt-3 leading-relaxed font-sans">
              Mês de conscientização e cuidado com a saúde integral do homem. Acompanhe abaixo toda a nossa programação e eventos especiais deste mês!
            </p>
          </div>
        </div>

        {/* TÍTULO DA SEÇÃO */}
        <div className="flex items-center justify-between mb-8 border-b border-stone-200 pb-4">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1c2618]">
            Eventos de Novembro
          </h2>
          <span className="text-xs font-tech text-stone-500 font-bold uppercase tracking-wider">
            Programação Oficial
          </span>
        </div>

        {/* LISTA DE EVENTOS (LAYOUT HORIZONTAL PADRONIZADO) */}
        <div className="flex flex-col gap-5">
          {eventosNovembro.map((evento: any) => (
            <div 
              key={evento.id} 
              className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden flex flex-col md:flex-row items-center hover:border-iba-green/40 transition-all group"
            >
              {/* IMAGEM DA ESQUERDA */}
              <div className="w-full md:w-[280px] h-[180px] shrink-0 relative bg-stone-900 overflow-hidden">
                {evento.image ? (
                   <img 
                      src={evento.image} 
                      alt={evento.title} 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                   />
                ) : (
                  <div className="absolute inset-0 bg-iba-green flex items-center justify-center p-6 text-center">
                    <h3 className="text-white font-heading text-xl font-bold leading-tight">
                      {evento.title}
                    </h3>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4">
                   <span className="px-2.5 py-1 rounded-md text-[10px] font-tech font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md text-white border border-white/30">
                     {evento.category}
                   </span>
                </div>
              </div>

              {/* CONTEÚDO CENTRAL (DATA + INFO) */}
              <div className="flex-1 p-6 md:px-8 md:py-6 flex flex-col md:flex-row items-start md:items-center gap-6 w-full">
                
                {/* DATA DESTACADA */}
                <div className="flex flex-col items-center justify-center shrink-0 border-b md:border-b-0 md:border-r border-stone-200 pb-4 md:pb-0 md:pr-8 w-full md:w-auto">
                  <span className="text-4xl md:text-5xl font-extrabold text-blue-600 leading-none tracking-tighter">{evento.day}</span>
                  <span className="text-xs md:text-sm font-tech font-bold text-blue-600 uppercase tracking-widest mt-1">{evento.month}</span>
                </div>

                {/* INFORMAÇÕES DO EVENTO */}
                <div className="flex-1 flex flex-col gap-2.5">
                  <h3 className="font-heading text-lg md:text-xl font-bold text-[#1c2618] uppercase tracking-tight leading-snug">
                    {evento.title}
                  </h3>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2 text-stone-600 text-xs font-sans">
                      <Calendar className="w-3.5 h-3.5 text-blue-600" />
                      <span>{evento.time}</span>
                    </div>
                    <div className="flex items-start gap-2 text-stone-600 text-xs font-sans">
                      <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{evento.location}</span>
                    </div>
                  </div>
                </div>

                {/* BOTÃO DA DIREITA */}
                <div className="shrink-0 w-full md:w-auto mt-2 md:mt-0">
                  <a 
                    href="#"
                    className="flex items-center justify-center w-full md:w-auto px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                  >
                    Ver evento
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}