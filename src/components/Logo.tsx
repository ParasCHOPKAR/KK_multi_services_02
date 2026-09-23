import React from 'react';
import Image from 'next/image';

export default function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center select-none ${className || ''}`}>
      <div className="relative w-48 h-14">
        <Image
          src="/images/Logo_02.png"
          alt="KK Multi Services"
          fill
          className="object-contain object-left"
          priority
        />
      </div>
    </div>
  );
}
