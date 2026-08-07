import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "254715364734";
const WHATSAPP_MESSAGE =
  "Hello KUNG'AA Initiative, I'd like to know more about your programs.";

function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <a
      href={href}
      className="whatsapp-float"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with KUNG'AA Initiative on WhatsApp"
    >
      <FaWhatsapp />
      <span className="whatsapp-ping" aria-hidden="true"></span>
    </a>
  );
}

export default WhatsAppButton;