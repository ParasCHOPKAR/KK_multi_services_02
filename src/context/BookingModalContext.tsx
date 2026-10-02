"use client";

import React, { createContext, useContext, useState } from "react";
import BookingModal from "@/components/BookingModal";

export interface AreaBookingData {
  name: string;
  pincode?: string;
  zone?: string;
  zoneLabel?: string;
  subZone?: string;
  responseTime?: string;
  landmarks?: string;
  popularFor?: string[];
}

interface BookingModalContextType {
  isOpen: boolean;
  preselectedService: string;
  selectedAreaDetails: AreaBookingData | null;
  openBookingModal: (service?: string, areaDetails?: AreaBookingData | string | null) => void;
  closeBookingModal: () => void;
}

const BookingModalContext = createContext<BookingModalContextType>({
  isOpen: false,
  preselectedService: "",
  selectedAreaDetails: null,
  openBookingModal: () => {},
  closeBookingModal: () => {},
});

export function BookingModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState("");
  const [selectedAreaDetails, setSelectedAreaDetails] = useState<AreaBookingData | null>(null);

  const openBookingModal = (
    service?: string,
    areaDetails?: AreaBookingData | string | null
  ) => {
    if (service) {
      setPreselectedService(service);
    } else {
      setPreselectedService("");
    }

    if (areaDetails) {
      if (typeof areaDetails === "string") {
        setSelectedAreaDetails({ name: areaDetails });
      } else {
        setSelectedAreaDetails(areaDetails);
      }
    } else {
      setSelectedAreaDetails(null);
    }

    setIsOpen(true);
  };

  const closeBookingModal = () => {
    setIsOpen(false);
  };

  return (
    <BookingModalContext.Provider
      value={{
        isOpen,
        preselectedService,
        selectedAreaDetails,
        openBookingModal,
        closeBookingModal,
      }}
    >
      {children}
      <BookingModal
        isOpen={isOpen}
        onClose={closeBookingModal}
        initialService={preselectedService}
        initialAreaDetails={selectedAreaDetails}
      />
    </BookingModalContext.Provider>
  );
}

export function useBookingModal() {
  return useContext(BookingModalContext);
}
