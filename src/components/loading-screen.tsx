"use client";

import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-black transition-opacity duration-500"
      role="status"
      aria-label="Cargando sitio web"
    >
      <div
        className={`flex flex-col items-center gap-6 transition-all duration-700 motion-safe:animate-[fadeUp_0.8s_ease-out_forwards] ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div
          className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center transition-all duration-1000 delay-300 ${
            mounted ? "scale-100 opacity-100" : "scale-75 opacity-0"
          }`}
        >
          <span className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
            DO
          </span>
        </div>

        <div className="text-center space-y-1">
          <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
            David Ortiz
          </p>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 font-medium tracking-wide">
            Desarrollador Web
          </p>
        </div>

        <div className="w-48 sm:w-56 h-[2px] bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gray-900 dark:bg-white rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-xs text-gray-400 dark:text-gray-500 tracking-wider motion-safe:animate-[dots_1.5s_infinite]">
          Preparando tu experiencia digital…
        </p>
      </div>
    </div>
  );
}
