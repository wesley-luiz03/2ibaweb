"use client";

import React from "react";
import { TechCard } from "@/components/ui/TechCard";
import { MapPin, Navigation, ExternalLink } from "lucide-react";

export function LocationSection() {
  return (
    <section id="localizacao" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-xs font-tech uppercase tracking-widest text-iba-green">Venha nos visitar</span>
          <h2 className="font-sans font-black tracking-tight text-stone-900 uppercase text-4xl md:text-5xl mt-2">Nossa Localização</h2>
        </div>
        <p className="text-stone-600 text-xs sm:text-sm max-w-sm">
          Estamos de portas abertas em Areias, Recife. Venha participar dos nossos cultos e momentos de comunhão.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Informações de Endereço */}
        <TechCard className="lg:col-span-4 p-8 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-iba-green/10 border border-iba-green/20 text-xs font-tech text-iba-green uppercase tracking-wider mb-6">
              <MapPin className="w-3.5 h-3.5" />
              Endereço Oficial
            </div>
            <h3 className="font-heading text-2xl font-bold text-[#1c2618] mb-3">
              Segunda Igreja Batista de Areias
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed mb-6">
              R. Dona Ana Aurora, 203 - Areias, Recife - PE, 50870-540
            </p>
            <div className="space-y-3 pt-4 border-t border-black/10 text-xs font-tech text-stone-500">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-iba-ochre"></span>
                <span>Fácil acesso e rua tranquila</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-iba-green"></span>
                <span>Recepção calorosa para sua família</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6">
            <a
              href="https://maps.app.goo.gl/bE1DeU3WRcTgM8Fa9"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 rounded-xl bg-iba-green hover:bg-iba-green-hover text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-iba-green/20 hover:scale-[1.02]"
            >
              <Navigation className="w-4 h-4" />
              Como Chegar
              <ExternalLink className="w-3 h-3 ml-1 opacity-80" />
            </a>
          </div>
        </TechCard>

        {/* Mapa Responsivo do Google Maps */}
        <TechCard className="lg:col-span-8 p-3 sm:p-4 !bg-white/90 flex flex-col min-h-[400px]">
          <div className="w-full h-full min-h-[380px] sm:min-h-[420px] rounded-2xl overflow-hidden border border-black/10 relative">
            <iframe
              title="Mapa de Localização da Segunda Igreja Batista de Areias"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.231998595804!2d-34.9298!3d-8.0879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18696365555%3A0x48b5b3b0431d2b7b!2sSegunda%20Igreja%20Batista%20de%20Areias!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full absolute inset-0 grayscale-[20%] contrast-[105%]"
            />
          </div>
        </TechCard>
      </div>
    </section>
  );
}
