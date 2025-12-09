const whatsappMessage = encodeURIComponent("¡Hola! Me gustaría información sobre sus servicios.");

export const contactConfig = {
  contact: {
    email: {
      label: "garving.vasquez@gmail.com",
      mailto: "mailto:garving.vasquez@gmail.com",
    },
    phone: {
      number: "+1 829 872 5551",
      telLink: "tel:+18298725551",
    },
    whatsapp: {
      number: "+1 829 872 5551",
      url: "https://wa.me/18298725551",
      urlWithMessage: `https://wa.me/18298725551?text=${whatsappMessage}`,
      defaultMessage: "¡Hola! Me gustaría información sobre sus servicios.",
    },
  },
} as const;
