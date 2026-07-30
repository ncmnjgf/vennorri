import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppPopup() {
  return (
    <a
      href="https://wa.me/918329226741"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}
