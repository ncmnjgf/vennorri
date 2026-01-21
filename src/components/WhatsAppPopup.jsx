import "../styles/whatsappPopup.css";

export default function WhatsAppPopup() {
  return (
    <a
      href="https://wa.me/1234567890"   // 🔁 Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-popup"
      aria-label="Chat on WhatsApp"
    >
      <img
        src="/images/whatsapp.png"            // 🔁 Place whatsapp.png in public folder
        alt="WhatsApp"
        className="whatsapp-icon"
      />
      <span className="whatsapp-text">Chat with us</span>
    </a>
  );
}
