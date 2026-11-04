"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface TransitionContextType {
  navigateWithTransition: (url: string, routerPush: (url: string) => void) => void;
}

const TransitionContext = createContext<TransitionContextType>({
  navigateWithTransition: () => {},
});

export const usePageTransition = () => useContext(TransitionContext);

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const [isNavigating, setIsNavigating] = useState(false);
  const [isFilling, setIsFilling] = useState(false);
  const pathname = usePathname();

  // Sempre que a rota muda de verdade, limpamos o overlay suavemente
  useEffect(() => {
    setIsFilling(true);
    const timer = setTimeout(() => {
      setIsNavigating(false);
      setIsFilling(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [pathname]);

  const navigateWithTransition = (url: string, routerPush: (url: string) => void) => {
    if (pathname === url) return;

    setIsNavigating(true);
    setIsFilling(false);

    // Inicia o preenchimento da logo após 50ms
    setTimeout(() => {
      setIsFilling(true);
    }, 50);

    // Executa a mudança de página exatos 1.5 segundos depois (tempo da animação)
    setTimeout(() => {
      routerPush(url);
    }, 1500);
  };

  return (
    <TransitionContext.Provider value={{ navigateWithTransition }}>
      {children}

      {/* OVERLAY DE TRANSIÇÃO GARANTIDO */}
      {isNavigating && (
        <div className="fixed inset-0 z-[99999] bg-[#FAF8F5] flex flex-col items-center justify-center transition-opacity duration-500">
          <div className="relative flex flex-col items-center gap-6 animate-fadeIn">
            {/* CONTAINER DA LOGO */}
            <div className="w-32 h-32 relative rounded-full overflow-hidden shadow-2xl border-4 border-white bg-white">
              {/* Logo Cinza de Fundo */}
              <Image
                src="/logo.png"
                alt="Logo Base"
                fill
                className="object-cover grayscale opacity-20"
                priority
              />

              {/* Logo Colorida a Preencher de Baixo para Cima */}
              <div
                className="absolute inset-0 transition-all ease-in-out duration-[1400ms]"
                style={{ clipPath: isFilling ? "inset(0% 0 0 0)" : "inset(100% 0 0 0)" }}
              >
                <Image
                  src="/logo.png"
                  alt="Logo Colorida"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* TEXTO E BARRA */}
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs font-tech font-bold uppercase tracking-widest text-iba-green">
                Carregando 2IBA...
              </span>
              <div className="w-36 h-1 bg-stone-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-iba-green transition-all ease-in-out duration-[1400ms]"
                  style={{ width: isFilling ? "100%" : "0%" }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </TransitionContext.Provider>
  );
}