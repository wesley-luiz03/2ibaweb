"use client";

import React, { useState } from "react";
import { TechCard } from "@/components/ui/TechCard";
import { FolderOpen, ExternalLink, Calendar, X, Play, Image as ImageIcon, ChevronLeft, ChevronRight } from "lucide-react";
import eventsDataRaw from "@/data/events-gallery.json";

const eventsData = eventsDataRaw.map((evento) => {
  const sortedMedia = [...(evento.media || [])].sort((a, b) => a.title.localeCompare(b.title));
  const limitedMedia = sortedMedia.slice(0, 5);
  const coverImage = limitedMedia[0]?.url || evento.coverImage;
  return {
    ...evento,
    media: limitedMedia,
    coverImage,
  };
});

interface MediaItem {
  id: string;
  title: string;
  type: string;
  url: string;
}

export default function GaleriaPage() {
  const [activeModalEvent, setActiveModalEvent] = useState<any | null>(null);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState<number | null>(null);

  const openEventModal = (event: any) => {
    setActiveModalEvent(event);
    setSelectedMediaIndex(null);
  };

  const closeEventModal = () => {
    setActiveModalEvent(null);
    setSelectedMediaIndex(null);
  };

  const currentMedia: MediaItem[] = activeModalEvent ? activeModalEvent.media || [] : [];

  const handlePrevMedia = () => {
    if (selectedMediaIndex !== null && currentMedia.length > 0) {
      setSelectedMediaIndex((prev) => (prev! > 0 ? prev! - 1 : currentMedia.length - 1));
    }
  };

  const handleNextMedia = () => {
    if (selectedMediaIndex !== null && currentMedia.length > 0) {
      setSelectedMediaIndex((prev) => (prev! < currentMedia.length - 1 ? prev! + 1 : 0));
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 pt-36 pb-24 relative z-10 w-full">
      {/* CABEÇALHO DA PÁGINA */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-tech uppercase tracking-widest text-iba-green font-bold flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" /> Arquivo Oficial 2026
            </span>
            <span className="px-2 py-0.5 text-[10px] font-tech bg-iba-green/10 text-iba-green rounded font-semibold">
              Google Drive Conectado
            </span>
          </div>
          <h1 className="font-heading text-4xl sm:text-6xl font-extrabold text-[#1c2618] mt-2 tracking-tight">
            Galeria de Fotos
          </h1>
          <p className="text-sm text-stone-700 mt-2 max-w-xl leading-relaxed font-sans">
            Explore os registros fotográficos oficiais do Acampateens 2026. Clique no evento para abrir a galeria interativa.
          </p>
        </div>
      </div>

      {/* LISTA DE EVENTOS OFICIAIS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventsData.map((evento) => {
          const mediaList = evento.media || [];
          return (
            <div
              key={evento.id}
              onClick={() => openEventModal(evento)}
              className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm hover:border-iba-green/40 flex flex-col justify-between group cursor-pointer transition-all duration-300"
            >
              <div>
                {/* Capa do Evento (1ª foto oficial do Google Drive) */}
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-stone-900 mb-6 shadow-sm">
                  <img
                    src={evento.coverImage}
                    alt={evento.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
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
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openEventModal(evento);
                  }}
                  className="flex-1 py-3 px-4 rounded-xl bg-iba-green hover:bg-iba-green-hover text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
                >
                  <ImageIcon className="w-4 h-4" />
                  ABRIR GALERIA ({mediaList.length})
                </button>

                <a
                  href={evento.folderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  title="Abrir no Google Drive"
                  className="p-3 rounded-xl bg-stone-50 border border-stone-200 hover:border-iba-green text-stone-700 transition"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* MODAL INTERNO DA GALERIA */}
      {activeModalEvent && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-5xl w-full overflow-hidden shadow-2xl relative flex flex-col max-h-[92vh]">
            {/* Header do Modal */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-stone-50 shrink-0">
              <div>
                <span className="text-[10px] font-tech text-iba-green font-bold uppercase tracking-wider">
                  {activeModalEvent.category} • {activeModalEvent.year}
                </span>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#1c2618]">
                  {activeModalEvent.title}
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={activeModalEvent.folderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-iba-green hover:bg-iba-green-hover text-white font-bold text-xs uppercase tracking-wider transition shadow-sm"
                >
                  <FolderOpen className="w-3.5 h-3.5" />
                  Abrir Pasta no Drive
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
                <button
                  onClick={closeEventModal}
                  className="w-9 h-9 rounded-full bg-stone-200 hover:bg-stone-300 flex items-center justify-center text-stone-700 transition"
                  aria-label="Fechar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Conteúdo / Grelha de Arquivos Reais */}
            <div className="p-6 overflow-y-auto flex-1 bg-stone-50">
              {currentMedia.length === 0 ? (
                <div className="text-center py-20">
                  <p className="font-heading text-lg font-bold text-stone-700">Nenhuma mídia cadastrada neste evento.</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {currentMedia.map((item: MediaItem, idx: number) => {
                    const isVideo = item.type === "video";
                    return (
                      <div
                        key={item.id || idx}
                        onClick={() => setSelectedMediaIndex(idx)}
                        className="relative aspect-square rounded-xl overflow-hidden bg-stone-900 group cursor-pointer shadow-sm border border-stone-200 hover:border-iba-green transition-all"
                      >
                        <img
                          src={item.url}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition" />

                        {isVideo && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-10 h-10 rounded-full bg-iba-green text-white flex items-center justify-center shadow-lg">
                              <Play className="w-4 h-4 fill-white ml-0.5" />
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Rodapé do Modal */}
            <div className="px-6 py-4 border-t border-stone-200 bg-white flex items-center justify-between shrink-0 text-xs font-tech text-stone-500">
              <span>{currentMedia.length} mídias carregadas (máx. 5)</span>
              <a
                href={activeModalEvent.folderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:hidden inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-iba-green text-white font-bold uppercase tracking-wider"
              >
                Abrir Pasta no Drive <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* LIGHTBOX / VISUALIZADOR DE MÍDIA EM TELA CHEIA */}
      {selectedMediaIndex !== null && currentMedia[selectedMediaIndex] && (
        <div className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 animate-fadeIn">
          <button
            onClick={() => setSelectedMediaIndex(null)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition z-20"
            aria-label="Fechar Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrevMedia}
            className="absolute left-4 top-1/2 -translate-y-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition z-20"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          <button
            onClick={handleNextMedia}
            className="absolute right-4 top-1/2 -translate-y-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition z-20"
            aria-label="Próximo"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center relative">
            <img
              src={currentMedia[selectedMediaIndex].url}
              alt={currentMedia[selectedMediaIndex].title}
              className="max-h-[75vh] max-w-full object-contain rounded-2xl shadow-2xl"
            />
            <div className="mt-4 text-center text-white">
              <p className="font-heading text-base font-bold">{currentMedia[selectedMediaIndex].title}</p>
              <p className="text-xs font-tech text-stone-400 mt-1">
                {selectedMediaIndex + 1} de {currentMedia.length} mídias oficiais
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
