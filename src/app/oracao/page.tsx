"use client";

import { useState } from "react";
import { TechCard } from "@/components/ui/TechCard";

export default function OracaoPage() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulação de envio ou integração direta com o Supabase
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1000);
  };

  return (
    <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">
      <div className="text-center max-w-xl mx-auto mb-10">
        <span className="text-xs font-tech text-iba-ochre uppercase tracking-widest font-bold">
          Ministério de Intercessão
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#1c2618] mt-2">
          Pedido de Oração
        </h1>
        <p className="text-stone-600 text-xs sm:text-sm mt-3">
          Apresentamos os seus motivos nas nossas reuniões pastorais e cultos semanais. Se preferir, marque como confidencial para leitura exclusiva dos pastores.
        </p>
      </div>

      <TechCard className="p-8 sm:p-12 max-w-xl mx-auto">
        {sent ? (
          <div className="text-center py-10">
            <div className="w-14 h-14 rounded-full bg-iba-green/15 text-iba-green flex items-center justify-center text-2xl mx-auto mb-4 font-bold">
              ✓
            </div>
            <h3 className="font-heading text-2xl font-bold text-[#1c2618]">Pedido Enviado!</h3>
            <p className="text-stone-600 text-xs mt-2">
              A nossa equipa pastoral estará a orar pela sua vida e família.
            </p>
            <button
              onClick={() => setSent(false)}
              className="mt-6 text-xs font-tech text-iba-green font-bold underline"
            >
              Enviar outro pedido
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[11px] font-tech text-stone-700 uppercase tracking-wider mb-1 font-semibold">
                O seu Nome
              </label>
              <input
                type="text"
                required
                placeholder="Como se chama?"
                className="w-full px-4 py-3 rounded-xl bg-white/90 border border-stone-300 text-stone-900 text-sm focus:outline-none focus:border-iba-green transition"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-tech text-stone-700 uppercase tracking-wider mb-1 font-semibold">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  placeholder="(81) 99999-9999"
                  className="w-full px-4 py-3 rounded-xl bg-white/90 border border-stone-300 text-stone-900 text-sm focus:outline-none focus:border-iba-green transition"
                />
              </div>
              <div>
                <label className="block text-[11px] font-tech text-stone-700 uppercase tracking-wider mb-1 font-semibold">
                  Privacidade
                </label>
                <select className="w-full px-4 py-3 rounded-xl bg-white/90 border border-stone-300 text-stone-800 text-sm focus:outline-none focus:border-iba-green transition">
                  <option>Equipa de Oração Geral</option>
                  <option>Apenas Pastores (Sigilo Absoluto)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-tech text-stone-700 uppercase tracking-wider mb-1 font-semibold">
                Motivo de Oração
              </label>
              <textarea
                rows={4}
                required
                placeholder="Partilhe o seu pedido, situação ou agradecimento..."
                className="w-full px-4 py-3 rounded-xl bg-white/90 border border-stone-300 text-stone-900 text-sm focus:outline-none focus:border-iba-green transition"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-iba-green to-iba-green-hover text-white font-heading font-bold text-sm tracking-wider uppercase shadow-lg shadow-iba-green/20 transition-all hover:scale-[1.01] disabled:opacity-50"
            >
              {loading ? "A enviar..." : "Enviar Pedido de Oração"}
            </button>
          </form>
        )}
      </TechCard>
    </main>
  );
}