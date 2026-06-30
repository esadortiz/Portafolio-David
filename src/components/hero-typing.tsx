"use client";

import { useState, useEffect, useRef } from "react";

const phrases = ["Páginas Web", "Landing Pages", "Sitios Profesionales"];

export function HeroTyping() {
  const [displayedText, setDisplayedText] = useState("");
  const [opacity, setOpacity] = useState(1);
  const currentPhraseIndexRef = useRef(0);
  const currentCharIndexRef = useRef(0);

  useEffect(() => {
    let rafId: number;
    let timeoutId: NodeJS.Timeout;

    const typeText = () => {
      if (currentCharIndexRef.current <= phrases[currentPhraseIndexRef.current].length) {
        setDisplayedText(phrases[currentPhraseIndexRef.current].slice(0, currentCharIndexRef.current));
        currentCharIndexRef.current++;
        rafId = requestAnimationFrame(() => {
          timeoutId = setTimeout(typeText, 80);
        });
      } else {
        timeoutId = setTimeout(() => {
          setOpacity(0);
          timeoutId = setTimeout(() => {
            currentPhraseIndexRef.current = (currentPhraseIndexRef.current + 1) % phrases.length;
            currentCharIndexRef.current = 0;
            setDisplayedText("");
            setOpacity(1);
            timeoutId = setTimeout(typeText, 80);
          }, 300);
        }, 2000);
      }
    };

    timeoutId = setTimeout(typeText, 500);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="relative animate-fade-up-delay-200 flex justify-center">
      <div
        className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-mono font-bold text-gray-900 dark:text-white bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm inline-block min-h-[1.75rem] sm:min-h-[2rem] md:min-h-[2.25rem] lg:min-h-[2.5rem]"
        style={{ opacity, minWidth: "20ch" }}
      >
        {displayedText}
        <span className="animate-pulse text-blue-600" aria-hidden="true">|</span>
      </div>
    </div>
  );
}
