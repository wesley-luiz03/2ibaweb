"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

// 1. O Componente Pai apenas escuta a rota e força a recriação do Filho
export function PageTransition() {
  const pathname = usePathname();
  
  // Ao passar o pathname como "key", o React destrói e recria o componente
  // sempre que a página muda, garantindo que a animação comece do zero!
  return <TransitionContent key={pathname} />;
}

// 2. O Componente Filho que faz a animação real (agora sempre limpo e fresco)
function TransitionContent() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isFilling, setIsFilling] = useState(false);

  useEffect(() => {
    // Um pequeno respiro de 50ms antes de começar a encher a cor (para o CSS registar)
    const fillTimer = setTimeout(() => setIsFilling(true), 50); 
    
    // Aguarda o preenchimento terminar (1.5s) + uma pausa para apreciação, depois desvanece
    const fadeOutTimer = setTimeout(() => setIsFadingOut(true), 1800); 
    
    // Remove a tela completamente do código de forma suave
    const removeTimer = setTimeout(() => setIsVisible(false), 2600); 
    
    return () => {
      clearTimeout(fillTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-[#FAF8F5] flex flex-col items-center justify-center transition-opacity duration-[800ms] ease-in-out ${
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div 
        className={`relative flex flex-col items-center gap-6 transition-transform duration-[800ms] ease-out ${
          isFadingOut ? "scale-95" : "scale-100"
        }`}
      >
        {/* CONTAINER DA LOGO */}
        <div className="w-28 h-28 sm:w-36 sm:h-36 relative rounded-full overflow-hidden shadow-2xl border-4 border-white bg-white">
          
          {/* 1. Base Desbotada (Fundo Cinza) */}
          <Image
            src="/logo.png"
            alt="Logo Base"
            fill
            className="object-cover grayscale opacity-20"
            priority
          />

          {/* 2. Logo Colorida (Preenchendo de baixo para cima) */}
          <div
            className="absolute inset-0 transition-all ease-in-out duration-[1500ms]"
            style={{ clipPath: isFilling ? "inset(0% 0 0 0)" : "inset(100% 0 0 0)" }}
          >
            <Image
              src="/logo.png"
              alt="2IBA Logo Colorida"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        
        {/* TEXTO E BARRA DE CARREGAMENTO */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-tech font-bold uppercase tracking-widest text-iba-green">
            Carregando
          </span>
          <div className="w-32 h-1 bg-stone-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-iba-green transition-all ease-in-out duration-[1500ms]"
              style={{ width: isFilling ? "100%" : "0%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}