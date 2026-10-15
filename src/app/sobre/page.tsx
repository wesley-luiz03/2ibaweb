import { TechCard } from "@/components/ui/TechCard";
import Link from "next/link";
import { Compass, BookOpen, Target, Eye, Landmark, Quote } from "lucide-react";

const SOBRE_DATA = {
  quemSomos: {
    titulo: "Quem Somos?",
    texto: "Somos uma comunidade cristã que busca viver e compartilhar o evangelho de Jesus Cristo. Nossa igreja é formada por pessoas que caminham juntas na fé, servem ao próximo e crescem espiritualmente. Aqui, cada visitante é recebido como parte da família de Deus."
  },
  emQueCremos: {
    titulo: "Em que Cremos?",
    texto: "Cremos que a Bíblia é a Palavra de Deus, inspirada e suficiente como regra de fé e prática. Reconhecemos um só Deus revelado em três pessoas – Pai, Filho e Espírito Santo – e proclamamos a salvação em Cristo como fundamento da nossa esperança. Nossa fé está firmada nas doutrinas bíblicas que nos guiam como igreja e discípulos."
  },
  missao: {
    titulo: "Nossa Missão",
    texto: "Proclamar o evangelho de Cristo, discipular vidas e servir à comunidade com amor e compaixão."
  },
  visao: {
    titulo: "Nossa Visão",
    texto: "Ser uma igreja bíblica, acolhedora e missionária, que glorifica a Deus e transforma vidas pela Palavra e pelo Espírito Santo."
  },
  historia: {
    titulo: "Nossa História",
    paragrafos: [
      "Conhecer a própria história é também compreender a identidade construída ao longo do tempo. Cada comunidade carrega consigo memórias, experiências, desafios, conquistas e personagens que contribuíram para formar aquilo que ela é no presente. Pensando nisso, a Segunda Igreja Batista de Areias inicia um *Projeto Historiográfico* dedicado à pesquisa, ao registro e à preservação de sua trajetória.",
      "O projeto tem como propósito investigar e reconstructuir, de maneira organizada e fundamentada, a história da igreja desde suas origens até os dias atuais. Para isso, serão reunidos e analisados diferentes tipos de fontes históricas, como documentos, atas, fotografias, registros institucionais, materiais antigos e, especialmente, os relatos e memórias daqueles que fizeram e ainda fazem parte dessa caminhada.",
      "Por meio de entrevistas e da coleta de documentos, buscamos preservar a memória dos pioneiros, membros, líderes, pastores e de todas as pessoas que, de diferentes maneiras, contribuíram para a construção da história da Segunda Igreja Batista de Areias. Mais do que registrar datas e acontecimentos, este projeto procura compreender os processos, os desafios, as transformações e as experiências que marcaram a vida da nossa comunidade ao longo dos anos.",
      "O propósito deste trabalho também é preservar um patrimônio histórico e memorial que pertence não apenas à igreja, mas às futuras gerações. Muitas histórias importantes permanecem guardadas na memória daqueles que viveram determinados acontecimentos e podem se perder com o passar do tempo. Por isso, registrar essas experiências é uma forma de valorizar o legado daqueles que nos antecederam e garantir que suas contribuições continuem sendo conhecidas.",
      "Além disso, o Projeto Historiográfico busca compreender a relação da igreja com a comunidade de Areias e com as transformações sociais, culturais e religiosas ocorridas ao longo de sua existência. Dessa forma, pretendemos analisar a trajetória da igreja não como uma história isolada, mas como parte da história da comunidade e da sociedade em que está inserida."
    ],
    destaqueFinal: "Preservar nossa história é valorizar aqueles que vieram antes de nós, compreender o caminho que percorremos e construir, com consciência e gratidão, a memória que deixaremos para as próximas gerações."
  }
};

export default function SobrePage() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-36 pb-24 relative z-10 w-full">
      {/* CABEÇALHO */}
      <div className="mb-12">
        <span className="text-xs font-tech text-iba-green uppercase tracking-widest font-bold">
          Nossa Trajetória & Princípios
        </span>
        <h1 className="font-heading text-4xl sm:text-6xl font-extrabold text-[#1c2618] mt-2 tracking-tight">
          Sobre a 2iba
        </h1>
        <p className="text-stone-700 text-sm sm:text-base max-w-xl mt-3 leading-relaxed font-sans">
          Conheça nossos fundamentos, nossa missão, visão e o projeto histórico que preserva o legado da Segunda Igreja Batista de Areias.
        </p>
      </div>

      {/* NAVEGAÇÃO RÁPIDA COM ÂNCORAS SUAVES */}
      <nav aria-label="Navegação rápida" className="mb-16 p-4 sm:p-5 rounded-2xl bg-white border border-stone-200 shadow-sm flex flex-wrap items-center gap-3 sm:gap-4 justify-center sm:justify-start">
        <span className="text-xs font-tech font-bold uppercase tracking-wider text-iba-green mr-2 hidden md:inline-block">
          Navegação Rápida:
        </span>
        <a
          href="#quem-somos"
          className="px-4 py-2 rounded-xl bg-stone-100 hover:bg-iba-green hover:text-white text-xs font-tech font-bold text-stone-700 transition-all duration-300 shadow-sm"
        >
          Quem Somos?
        </a>
        <a
          href="#cremos"
          className="px-4 py-2 rounded-xl bg-stone-100 hover:bg-iba-green hover:text-white text-xs font-tech font-bold text-stone-700 transition-all duration-300 shadow-sm"
        >
          Em que Cremos?
        </a>
        <a
          href="#missao-visao"
          className="px-4 py-2 rounded-xl bg-stone-100 hover:bg-iba-green hover:text-white text-xs font-tech font-bold text-stone-700 transition-all duration-300 shadow-sm"
        >
          Missão & Visão
        </a>
        <a
          href="#historia"
          className="px-4 py-2 rounded-xl bg-stone-100 hover:bg-iba-green hover:text-white text-xs font-tech font-bold text-stone-700 transition-all duration-300 shadow-sm"
        >
          Nossa História
        </a>
      </nav>

      {/* SEÇÕES / CARDS INDEPENDENTES E BEM ESPAÇADAS */}
      <div className="space-y-12">
        {/* 1. QUEM SOMOS */}
        <section id="quem-somos" className="scroll-mt-28">
          <div className="p-8 sm:p-12 rounded-2xl bg-white border border-stone-200 shadow-sm hover:border-iba-green/40 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-iba-green/10 text-iba-green flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-tech text-iba-green uppercase font-bold tracking-wider">Identidade Comunitária</span>
                <h2 className="font-heading text-3xl font-bold text-[#1c2618]">
                  {SOBRE_DATA.quemSomos.titulo}
                </h2>
              </div>
            </div>
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans max-w-4xl">
              {SOBRE_DATA.quemSomos.texto}
            </p>
          </div>
        </section>

        {/* 2. EM QUE CREMOS */}
        <section id="cremos" className="scroll-mt-28">
          <div className="p-8 sm:p-12 rounded-2xl bg-white border border-stone-200 shadow-sm hover:border-iba-blue/40 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-iba-blue/10 text-iba-blue flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-tech text-iba-blue uppercase font-bold tracking-wider">Fundamento Doutrinário</span>
                <h2 className="font-heading text-3xl font-bold text-[#1c2618]">
                  {SOBRE_DATA.emQueCremos.titulo}
                </h2>
              </div>
            </div>
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans max-w-4xl">
              {SOBRE_DATA.emQueCremos.texto}
            </p>
          </div>
        </section>

        {/* 3. MISSAO E VISAO */}
        <section id="missao-visao" className="scroll-mt-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Missão */}
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-stone-200 shadow-sm hover:border-iba-green/40 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-iba-green/10 text-iba-green flex items-center justify-center">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-tech text-iba-green uppercase font-bold tracking-wider">Propósito Prático</span>
                    <h2 className="font-heading text-2xl font-bold text-[#1c2618]">
                      {SOBRE_DATA.missao.titulo}
                    </h2>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                  {SOBRE_DATA.missao.texto}
                </p>
              </div>
            </div>

            {/* Visão */}
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-stone-200 shadow-sm hover:border-iba-ochre/40 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-iba-ochre/10 text-iba-ochre flex items-center justify-center">
                    <Eye className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-tech text-iba-ochre uppercase font-bold tracking-wider">Diretriz de Futuro</span>
                    <h2 className="font-heading text-2xl font-bold text-[#1c2618]">
                      {SOBRE_DATA.visao.titulo}
                    </h2>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                  {SOBRE_DATA.visao.texto}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. NOSSA HISTÓRIA (ESTILO EDITORIAL / MEMORIAL) */}
        <section id="historia" className="scroll-mt-28">
          <div className="p-8 sm:p-16 rounded-3xl bg-white border border-stone-200 shadow-sm">
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-stone-200">
              <div className="w-12 h-12 rounded-2xl bg-iba-green/10 text-iba-green flex items-center justify-center">
                <Landmark className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-tech text-iba-green uppercase font-bold tracking-wider">Projeto Historiográfico</span>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1c2618]">
                  {SOBRE_DATA.historia.titulo}
                </h2>
              </div>
            </div>

            {/* Parágrafos em formato editorial */}
            <div className="space-y-6 text-stone-700 leading-relaxed text-base font-sans max-w-4xl">
              {SOBRE_DATA.historia.paragrafos.map((paragrafo, index) => {
                return (
                  <p key={index} className="text-justify">
                    {paragrafo.includes("*Projeto Historiográfico*") ? (
                      <>
                        Conhecer a própria história é também compreender a identidade construída ao longo do tempo. Cada comunidade carrega consigo memórias, experiências, desafios, conquistas e personagens que contribuíram para formar aquilo que ela é no presente. Pensando nisso, a Segunda Igreja Batista de Areias inicia um <strong className="text-iba-green font-semibold italic">Projeto Historiográfico</strong> dedicado à pesquisa, ao registro e à preservação de sua trajetória.
                      </>
                    ) : (
                      paragrafo
                    )}
                  </p>
                );
              })}
            </div>

            {/* Caixa de citação estilizada para o destaque final */}
            <div className="mt-12 p-8 sm:p-10 rounded-2xl bg-[#F4F1EA] border-l-4 border-iba-green relative overflow-hidden">
              <Quote className="absolute top-4 right-4 w-16 h-16 text-iba-green/10 pointer-events-none" />
              <p className="font-heading text-lg sm:text-xl font-medium text-stone-800 italic leading-relaxed relative z-10">
                &ldquo;{SOBRE_DATA.historia.destaqueFinal}&rdquo;
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
