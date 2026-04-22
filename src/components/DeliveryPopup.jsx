import { useEffect, useState } from "react";
import "../styles/DeliveryPopup.css";

export default function DeliveryPopup() {
  const [visible, setVisible] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    if (closed) return;

    // show after 2 seconds
    const showTimer = setTimeout(() => {
      setVisible(true);
    }, 2000);

    // hide 8 seconds AFTER showing (total 10s from start)
    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 10000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [closed]);

  if (!visible || closed) return null;

  return (
    <div className="delivery-popup">
      <span className="delivery-text">
        🚚 Delivered in <strong>45 minutes</strong>
      </span>

      <button
        className="delivery-close"
        onClick={() => setClosed(true)}
        aria-label="Close delivery popup"
      >
        ×
      </button>
    </div>
  );
}
