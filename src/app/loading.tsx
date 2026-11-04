import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 bg-[#FAF8F5] flex flex-col items-center justify-center">
      <div className="relative flex flex-col items-center gap-4 animate-fadeIn">
        {/* LOGO COM EFEITO DE PULSO */}
        <div className="w-24 h-24 sm:w-32 sm:h-32 relative rounded-full overflow-hidden shadow-lg border-2 border-iba-green/20 animate-pulse">
          <Image
            src="/logo.png"
            alt="2IBA Logo"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* TEXTO DE CARREGAMENTO */}
        <span className="text-xs font-tech font-bold uppercase tracking-widest text-iba-green animate-pulse">
          Carregando 2IBA...
        </span>
      </div>
    </div>
  );
}