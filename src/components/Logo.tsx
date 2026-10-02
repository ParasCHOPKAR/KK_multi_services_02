"use client";

import React from 'react';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';

export default function Logo({ className }: { className?: string }) {
  const { theme, mounted } = useTheme();
  const isLight = mounted && theme === 'light';

  return (
    <div className={`flex items-center select-none theme-logo-wrapper transition-all duration-300 ${className || ''}`}>
      <div className="relative w-44 sm:w-48 h-12 sm:h-14">
        <Image
          src={isLight ? "/images/logo_Light_01.png" : "/images/Logo_02.png"}
          alt="KK Multi Services"
          fill
          className="object-contain object-left"
          priority
        />
      </div>
    </div>
  );
}
