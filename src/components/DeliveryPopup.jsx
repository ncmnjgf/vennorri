import { useEffect, useState } from "react";
import "../styles/deliveryPopup.css";

export default function DeliveryPopup() {
  const [visible, setVisible] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    if (closed) return;

    // show after 3 seconds
    const showTimer = setTimeout(() => {
      setVisible(true);
    }, 3000);

    // hide after 10 seconds
    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 3000);

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
