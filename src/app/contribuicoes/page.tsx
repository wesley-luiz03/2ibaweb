"use client";

import React, { useState } from "react";
import { HeartHandshake, Copy, Check, ShieldCheck, QrCode } from "lucide-react";
import boletimData from "@/data/boletim-atual.json";

export default function ContribuicoesPage() {
  const [copied, setCopied] = useState(false);
  const pixKey = boletimData.dadosBancarios.pix;

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] relative flex flex-col justify-between">
      <main className="max-w-4xl mx-auto px-6 pt-36 pb-24 relative z-10 w-full flex-1">
        
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-iba-green/10 text-iba-green text-xs font-tech font-bold uppercase tracking-widest mb-4 border border-iba-green/20">
            <HeartHandshake className="w-3.5 h-3.5"/> Fidelidade & Gratidão
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#1c2618] tracking-tight">
            Dízimos e Ofertas
          </h1>
          <p className="text-stone-700 text-sm sm:text-base font-sans mt-3 leading-relaxed">
            &ldquo;Cada um dê conforme determinou no seu coração; não com tristeza ou por necessidade, pois Deus ama quem dá com alegria.&rdquo; <span className="block text-xs font-tech text-iba-green font-bold mt-1">2 Coríntios 9:7</span>
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-stone-200 p-8 sm:p-12 shadow-sm flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-2xl bg-iba-green/10 text-iba-green flex items-center justify-center mb-6">
            <QrCode className="w-8 h-8" />
          </div>

          <h2 className="font-heading text-2xl font-bold text-[#1c2618] mb-2">
            Contribua via PIX
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 font-sans max-w-md mb-8">
            Utilize a chave PIX (CNPJ) abaixo através do aplicativo do seu banco para dizimar ou ofertar de forma rápida e segura.
          </p>

          <div className="w-full max-w-md bg-[#f4f1ea] p-4 rounded-2xl border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div className="text-left overflow-hidden">
              <span className="text-[10px] font-tech uppercase font-bold text-stone-500 block">Chave PIX (CNPJ)</span>
              <span className="font-mono text-sm sm:text-base font-bold text-[#1c2618] truncate block">
                {pixKey}
              </span>
            </div>
            <button
              onClick={handleCopyPix}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-iba-green hover:bg-iba-green-dark text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm shrink-0"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? "Copiado!" : "Copiar Chave"}
            </button>
          </div>

          <div className="w-full max-w-md pt-6 border-t border-stone-200 text-left">
            <span className="text-xs font-tech uppercase font-bold text-iba-ochre block mb-3">
              Transferência Bancária (TED / DOC)
            </span>
            <div className="text-xs sm:text-sm text-stone-700 font-sans leading-relaxed bg-stone-50 p-5 rounded-2xl border border-stone-200">
              <p><strong className="text-stone-900">Banco:</strong> {boletimData.dadosBancarios.banco}</p>
              <p><strong className="text-stone-900">Agência:</strong> {boletimData.dadosBancarios.agencia}</p>
              <p><strong className="text-stone-900">Conta Corrente:</strong> {boletimData.dadosBancarios.conta}</p>
              <p><strong className="text-stone-900">Favorecido:</strong> Segunda Igreja Batista de Areias</p>
              <p><strong className="text-stone-900">CNPJ:</strong> {boletimData.dadosBancarios.cnpj}</p>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-2 text-xs text-stone-500 font-tech">
            <ShieldCheck className="w-4 h-4 text-iba-green" />
            <span>Ambiente seguro e dedicado às ofertas ministeriais da 2IBA.</span>
          </div>
        </div>

      </main>
    </div>
  );
}