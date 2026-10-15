import { TechCard } from "@/components/ui/TechCard";
import Link from "next/link";
import { Calendar, Clock, MapPin, ExternalLink, FileText, Sparkles, PartyPopper } from "lucide-react";
import agendaData from "@/data/agenda-events.json";

export default function AgendaPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-36 pb-24 relative z-10 w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <span className="text-xs font-tech text-iba-ochre uppercase tracking-widest font-bold">
            Programação & Encontros
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-extrabold text-[#1c2618] mt-2">
            Agenda da Igreja
          </h1>
          <p className="text-stone-700 text-sm sm:text-base max-w-xl mt-3 font-sans leading-relaxed">
            Fique por dentro de todos os cultos semanais, programações especiais e eventos oficiais da 2IBA Areias.
          </p>
        </div>

        <div>
          <a
            href="https://drive.google.com/file/d/1UoQiysgCKP-JDkbWWq8KWCxr6eF6yU1r/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-iba-green hover:bg-iba-green-hover text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:scale-105"
          >
            <FileText className="w-4 h-4" />
            BAIXAR CALENDÁRIO OFICIAL (PDF)
            <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
          </a>
        </div>
      </div>

      {/* BANNER TEMÁTICO: OUTUBRO - MÊS DA GAROTADA */}
      <div className="mb-16 relative rounded-3xl overflow-hidden bg-gradient-to-r from-purple-900 via-purple-800 to-iba-green p-8 sm:p-10 text-white shadow-xl border border-purple-500/30">
        <div className="absolute top-0 right-0 p-8 opacity-15 pointer-events-none">
          <PartyPopper className="w-48 h-48" />
        </div>
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-tech font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-pulse" /> Campanha Especial 2IBA
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight">
            OUTUBRO - MÊS DA GAROTADA 🍇🎈
          </h2>
          <p className="text-stone-200 text-sm sm:text-base mt-3 leading-relaxed font-sans">
            Um mês inteiro dedicado às nossas crianças e famílias com programações alegres, festivas, comunhão e muito amor em Cristo. Confira abaixo a programação oficial de Outubro!
          </p>
        </div>
      </div>

      {/* CULTOS FIXOS SEMANAIS */}
      <div className="mb-20">
        <div className="flex items-center gap-2 mb-6">
          <Clock className="w-5 h-5 text-iba-green" />
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1c2618]">
            Cultos Fixos Semanais
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {agendaData.cultosFixos.map((culto) => (
            <div key={culto.id} className="p-8 bg-white rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className={`inline-block px-2.5 py-1 rounded-md text-[10px] font-tech uppercase font-bold tracking-wider mb-3 ${culto.tagColor}`}>
                  {culto.badgeText}
                </span>
                <h3 className="font-heading text-2xl font-bold text-[#1c2618] mb-3">{culto.titulo}</h3>
                <p className="text-xs text-stone-700 leading-relaxed font-sans">
                  {culto.descricao}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-stone-100 text-xs font-tech text-stone-500">
                {culto.local}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PROGRAMAÇÃO OFICIAL DE OUTUBRO */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-iba-ochre" />
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1c2618]">
              Programação Oficial de Outubro
            </h2>
          </div>
          <span className="text-xs font-tech text-stone-500 font-semibold hidden sm:inline-block">
            Calendário Oficial 2026
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agendaData.eventosOutubro2026.map((evento: any) => {
            return (
              <div
                key={evento.id}
                className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm hover:border-iba-green/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-tech font-bold uppercase tracking-wider ${evento.tagColor}`}>
                      {evento.category}
                    </span>
                    <span className="text-xs font-tech text-stone-500 font-bold flex items-center gap-1.5 shrink-0">
                      <Calendar className="w-3.5 h-3.5 text-iba-ochre" />
                      {evento.date} ({evento.day})
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-[#1c2618] mb-2.5 group-hover:text-iba-green transition-colors leading-snug">
                    {evento.title}
                  </h3>

                  <p className="text-xs text-stone-700 leading-relaxed font-sans mb-6">
                    {evento.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-tech text-stone-600">
                  <span className="flex items-center gap-1.5 truncate max-w-[200px]">
                    <MapPin className="w-3.5 h-3.5 text-iba-green shrink-0" />
                    {evento.local}
                  </span>

                  <a
                    href="https://calendar.google.com/calendar/render?action=TEMPLATE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-stone-50 border border-stone-200 hover:border-iba-green text-[#1c2618] hover:text-iba-green font-bold transition shadow-sm text-[11px]"
                  >
                    Calendar
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
