import React from "react";
import whats from "../../images/whats-icon.png";

const WhatsAppIcon = () => {
  return (
    <a
      href="https://wa.me/5547984174008?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Ewald%20Engenharia!"
      target="_blank"
    >
      <img
        src={whats}
        alt="whatsapp"
        className="fixed bottom-6 right-6 w-24 h-24"
      ></img>
    </a>
  );
};

export default WhatsAppIcon;
