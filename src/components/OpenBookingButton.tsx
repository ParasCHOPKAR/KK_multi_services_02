"use client";

import React from "react";
import { useBookingModal } from "@/context/BookingModalContext";

interface OpenBookingButtonProps {
  children?: React.ReactNode;
  service?: string;
  className?: string;
}

export default function OpenBookingButton({
  children,
  service,
  className,
}: OpenBookingButtonProps) {
  const { openBookingModal } = useBookingModal();

  return (
    <button
      type="button"
      onClick={() => openBookingModal(service)}
      className={className}
    >
      {children}
    </button>
  );
}
