import { useState } from "react";

export default function AnnouncementBar({ onClose }) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const handleClose = () => {
    setVisible(false);
    if (onClose) onClose();
  };

  const messages = [
    "FREE SHIPPING ON ORDERS ABOVE ₹999",
    "NEW ARRIVALS JUST DROPPED",
    "FLAT 20% OFF ON FIRST ORDER",
    "PREMIUM STREETWEAR — MADE FOR YOU",
    "FREE SHIPPING ON ORDERS ABOVE ₹999",
    "NEW ARRIVALS JUST DROPPED",
    "FLAT 20% OFF ON FIRST ORDER",
    "PREMIUM STREETWEAR — MADE FOR YOU",
  ];

  return (
    <div className="announcement-bar">
      <div className="marquee">
        {messages.map((msg, i) => (
          <span key={i}>{msg}</span>
        ))}
      </div>
      <button className="close-btn" onClick={handleClose}>
        ✕
      </button>
    </div>
  );
}
