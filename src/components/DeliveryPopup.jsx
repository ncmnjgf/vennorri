import { useEffect, useState } from "react";
import "../styles/DeliveryPopup.css";

export default function DeliveryPopup() {
  const [show, setShow] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    if (closed) return;

    const interval = setInterval(() => {
      setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 8000); // hide after 8 sec
    }, 10000); // show every 10 sec

    return () => clearInterval(interval);
  }, [closed]);

  if (closed) return null;

  return (
    <div className={`delivery-glass ${show ? "show" : ""}`}>
      <span className="delivery-text">
        🚚 Delivered in <strong>45 mins</strong>
      </span>

      <button
        className="close-btn"
        onClick={() => setClosed(true)}
        aria-label="Close popup"
      >
        ×
      </button>
    </div>
  );
}
