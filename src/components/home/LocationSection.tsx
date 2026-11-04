import React from "react";
import { MapPin, Navigation, ExternalLink } from "lucide-react";

export function LocationSection() {
  const enderecoText = "Rua Dona Ana Aurora, 203 - Areias, Recife - PE, 50870-540";
  
  // Link de incorporação oficial do Google Maps focado estritamente na localização exata da igreja
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.435882654162!2d-34.9387425!3d-8.0931146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1ef5a65e5555%3A0x48b33bb04375e77b!2sR.%20Dona%20Ana%20Aurora%2C%20203%20-%20Areias%2C%20Recife%20-%20PE%2C%2050870-540!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr";
  
  // Link de rota para navegação direta ao clicar no botão
  const routeUrl = "https://www.google.com/maps/search/?api=1&query=Rua+Dona+Ana+Aurora+203+Areias+Recife+PE";

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-t border-stone-200">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* INFORMAÇÕES DE ENDEREÇO (LADO ESQUERDO) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-iba-green/10 text-iba-green text-xs font-tech font-bold uppercase tracking-widest mb-4 border border-iba-green/20">
              <MapPin className="w-3.5 h-3.5" /> Endereço Oficial
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#1c2618] tracking-tight">
              Segunda Igreja Batista de Areias
            </h2>
            <p className="text-stone-700 text-sm sm:text-base font-sans mt-3 leading-relaxed">
              {enderecoText}
            </p>
          </div>

          <div className="flex flex-col gap-3 pt-4 border-t border-stone-200">
            <div className="flex items-center gap-2.5 text-xs text-stone-600 font-sans">
              <span className="w-2 h-2 rounded-full bg-iba-ochre"></span>
              <span>Fácil acesso e rua tranquila no coração de Areias</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-stone-600 font-sans">
              <span className="w-2 h-2 rounded-full bg-iba-green"></span>
              <span>Recepção calorosa e estruturada para sua família</span>
            </div>
          </div>

          <div className="pt-2">
            <a
              href={routeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-iba-green hover:bg-iba-green-dark text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:scale-105"
            >
              <Navigation className="w-4 h-4" />
              COMO CHEGAR
              <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-80" />
            </a>
          </div>
        </div>

        {/* MAPA DO GOOGLE EXATO (LADO DIREITO) */}
        <div className="lg:col-span-7">
          <div className="w-full h-[400px] sm:h-[450px] rounded-3xl overflow-hidden shadow-lg border border-stone-200 relative bg-stone-100">
            <iframe
              title="Mapa de Localização - Segunda Igreja Batista de Areias"
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full grayscale-[15%] contrast-[105%]"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}