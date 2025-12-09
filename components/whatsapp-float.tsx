"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { contactConfig } from "@/config/contact";

const WhatsAppFloat = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const whatsappUrl = contactConfig.contact.whatsapp.urlWithMessage;

  const handleWhatsApp = () => {
    if ("vibrate" in navigator) {
      navigator.vibrate(50);
    }

    window.open(whatsappUrl, "_blank");
    setIsExpanded(false);
  };

  const toggleTooltip = () => {
    setIsExpanded((prev) => !prev);

    if ("vibrate" in navigator) {
      navigator.vibrate(10);
    }
  };

  return (
    <>
      <div className="fixed right-4 bottom-20 z-50 xs:bottom-24 xs:right-6 safe-bottom">
        {isExpanded && (
          <div className="absolute right-0 bottom-full p-3 mx-4 mb-3 max-w-xs text-white bg-gray-900 shadow-xl xs:mb-4 xs:p-4 rounded-mobile xs:rounded-lg xs:mx-0">
            <div className="leading-relaxed text-mobile-sm xs:text-sm">
              <div className="mb-1 font-medium">¡Hola! 👋</div>
              <div>¿Necesitas información sobre nuestros servicios?</div>
            </div>
            <div className="absolute right-6 top-full w-0 h-0 border-t-4 border-r-4 border-l-4 border-transparent xs:right-8 border-t-gray-900"></div>
          </div>
        )}

        <div className="relative">
          <div className="absolute inset-0 bg-green-500 rounded-full opacity-20 animate-ping"></div>

          <button
            onClick={isExpanded ? handleWhatsApp : toggleTooltip}
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
            className="relative p-3 text-white bg-green-500 rounded-full shadow-lg transition-all duration-300 transform hover:bg-green-600 active:bg-green-700 xs:p-4 hover:shadow-xl hover:scale-105 active:scale-95 min-h-touch min-w-touch"
            aria-label="Contactar por WhatsApp"
          >
            {isExpanded ? <X size={20} className="xs:w-6 xs:h-6" /> : <MessageCircle size={20} className="xs:w-6 xs:h-6" />}
          </button>

          <div className="flex absolute -top-1 -right-1 justify-center items-center w-5 h-5 font-bold text-white bg-red-500 rounded-full text-mobile-xs xs:text-xs xs:w-6 xs:h-6">
            !
          </div>
        </div>

        <div className="absolute right-0 bottom-full mb-2 xs:hidden">
          <div className="flex flex-col space-y-2">
            <button
              onClick={handleWhatsApp}
              className="px-3 py-2 font-medium text-white bg-green-600 rounded-lg shadow-lg transition-all hover:bg-green-700 text-mobile-sm min-h-touch"
            >
              WhatsApp
            </button>
            <a
              href={contactConfig.contact.phone.telLink}
              className="px-3 py-2 font-medium text-center text-white bg-purple-600 rounded-lg shadow-lg transition-all hover:bg-purple-700 text-mobile-sm min-h-touch"
            >
              Llamar
            </a>
          </div>
        </div>
      </div>

      {isExpanded && <div className="fixed inset-0 z-40 lg:hidden" onClick={() => setIsExpanded(false)} />}
    </>
  );
};

export default WhatsAppFloat;
