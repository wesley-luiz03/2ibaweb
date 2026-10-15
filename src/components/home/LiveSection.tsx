"use client";

import React, { useState, useEffect } from "react";
import { TechCard } from "@/components/ui/TechCard";
import { Radio, ExternalLink, PlaySquare, AlertCircle } from "lucide-react";

const FALLBACK_VIDEO_ID = "q8Qgy9_-niw"; // Transmissão de 14/10/2026

export function LiveSection() {
  const [videoId, setVideoId] = useState<string>(FALLBACK_VIDEO_ID);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [iframeError, setIframeError] = useState<boolean>(false);

  useEffect(() => {
    async function fetchLatestLive() {
      try {
        const res = await fetch("/api/latest-live", { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          if (data && data.videoId) {
            setVideoId(data.videoId);
          }
        }
      } catch (err) {
        console.error("Erro ao carregar ID da live recente:", err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchLatestLive();
  }, []);

  return (
    <section id="transmissoes" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-xs font-tech uppercase tracking-widest text-iba-ochre">Acompanhe ao Vivo</span>
          <h2 className="font-sans font-black tracking-tight text-stone-900 uppercase text-4xl md:text-5xl mt-2">Transmissões e Cultos</h2>
        </div>
        <p className="text-stone-600 text-xs sm:text-sm max-w-sm">
          Acompanhe nossos cultos ao vivo ou assista às últimas mensagens transmitidas diretamente do nosso canal.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Card Lateral / Informações e CTA */}
        <TechCard className="lg:col-span-4 p-8 !bg-gradient-to-br !from-[#20311c] !to-[#141f12] !text-white flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-tech text-iba-lime uppercase tracking-wider mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-iba-lime animate-pulse"></span>
              Cultos Online
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold leading-tight mb-4 text-white">
              Conectados na Palavra, onde quer que você esteja.
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-light mb-6">
              Não pôde estar presente no templo? Participe conosco da transmissão ao vivo dos nossos cultos dominicais e cultos de oração. Inscreva-se em nosso canal do YouTube para não perder nenhuma programação.
            </p>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-3">
            <a
              href="https://www.youtube.com/@2ibareias/live"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-rose-600/25 hover:scale-[1.02]"
            >
              <Radio className="w-4 h-4 animate-pulse" />
              Assistir ao Vivo no YouTube
              <ExternalLink className="w-3 h-3 ml-1 opacity-80" />
            </a>

            <a
              href="https://www.youtube.com/@2ibareias"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-6 rounded-xl bg-iba-ochre hover:bg-iba-ochre-hover text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-iba-ochre/25 hover:scale-[1.02]"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Inscrever-se no Canal
              <ExternalLink className="w-3 h-3 ml-1 opacity-80" />
            </a>
          </div>
        </TechCard>

        {/* Player de Vídeo Responsivo (YouTube) com Fallback */}
        <TechCard className="lg:col-span-8 p-3 sm:p-4 !bg-white/95 flex flex-col justify-between min-h-[420px]">
          <div className="flex items-center justify-between px-2 pb-3 mb-2 border-b border-black/10">
            <div className="flex items-center gap-2 text-xs font-tech text-stone-700 font-bold uppercase tracking-wider">
              <Radio className="w-4 h-4 text-rose-600 animate-pulse" />
              Canal Oficial 2iba Areias
            </div>
            <span className="text-[10px] font-tech px-2.5 py-0.5 rounded-full bg-rose-500/10 text-rose-600 font-bold">
              {isLoading ? "CARREGANDO..." : "AO VIVO / RECENTES"}
            </span>
          </div>

          <div className="w-full flex-1 min-h-[360px] sm:min-h-[400px] rounded-2xl overflow-hidden border border-black/10 relative bg-stone-900 flex items-center justify-center">
            {iframeError ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-stone-900 text-white">
                <AlertCircle className="w-12 h-12 text-iba-ochre mb-3" />
                <h4 className="font-heading text-lg font-bold mb-1">Visualização Indisponível no Player</h4>
                <p className="text-xs text-stone-400 max-w-md mb-6">
                  O YouTube pode restringir a exibição incorporada dependendo do estado atual da transmissão ao vivo. Clique abaixo para assistir diretamente no canal oficial.
                </p>
                <a
                  href="https://www.youtube.com/@2ibareias/live"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shadow-lg"
                >
                  <PlaySquare className="w-4 h-4" />
                  Assistir no YouTube / Live
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            ) : (
              <iframe
                title="Última Transmissão 2iba Areias"
                src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen={true}
                onError={() => setIframeError(true)}
                className="w-full h-full absolute inset-0"
              />
            )}
          </div>
        </TechCard>
      </div>
    </section>
  );
}
