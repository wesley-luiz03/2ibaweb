"use client";

import React from "react";
import { Calendar, Image as ImageIcon, ExternalLink } from "lucide-react";
import eventsDataRaw from "@/data/events-gallery.json";

export default function GaleriaPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-36 pb-24 relative z-10 w-full">
      {/* CABEÇALHO DA PÁGINA */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-tech uppercase tracking-widest text-iba-green font-bold flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" /> Arquivo Oficial 2026
            </span>
            <span className="px-2 py-0.5 text-[10px] font-tech bg-iba-green/10 text-iba-green rounded font-semibold flex items-center gap-1">
               Google Drive Conectado
            </span>
          </div>
          <h1 className="font-heading text-4xl sm:text-6xl font-extrabold text-[#1c2618] mt-2 tracking-tight">
            Galeria de Fotos
          </h1>
          <p className="text-sm text-stone-700 mt-2 max-w-xl leading-relaxed font-sans">
            Explore os registros fotográficos oficiais. Clique no evento para acessar a galeria completa diretamente no Google Drive.
          </p>
        </div>
      </div>

      {/* LISTA DE EVENTOS OFICIAIS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventsDataRaw.map((evento: any) => {
          // Fallback de segurança: tenta usar a coverImage; se não houver, tenta puxar a 1ª foto do array media
          const cover = evento.coverImage || (evento.media && evento.media[0]?.url) || "";

          return (
            <div
              key={evento.id}
              className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm hover:border-iba-green/40 flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-stone-900 mb-6 shadow-sm">
                  {cover ? (
                    <img
                      src={cover}
                      alt={evento.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-stone-800">
                      <ImageIcon className="w-8 h-8 text-stone-600" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md bg-iba-green text-[10px] font-tech uppercase font-bold text-white shadow">
                      {evento.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] font-tech text-stone-300 block">Ano {evento.year}</span>
                    <h3 className="font-heading text-lg font-bold leading-snug text-white">
                      {evento.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans mb-6">
                  {evento.description}
                </p>
              </div>

              <div className="flex items-center justify-between gap-3 pt-4 border-t border-stone-100">
                {/* O BOTÃO AGORA É UMA TAG <a> QUE ABRE O DRIVE EM NOVA ABA */}
                <a
                  href={evento.folderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-iba-green hover:bg-iba-green-hover text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  ABRIR NO DRIVE
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}