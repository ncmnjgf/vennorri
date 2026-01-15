
import { useEffect, useRef, useState } from "react";
import "../styles/LoginModal.css";
export default function LoginModal({ onClose }) {
  const [mobile, setMobile] = useState("");
  const [step, setStep] = useState("MOBILE"); // MOBILE | OTP
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(30);

  const otpRefs = useRef([]);

  /* 🔢 Mobile number handler (ONLY 10 digits) */
  const handleMobileChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // only numbers
    if (value.length <= 10) {
      setMobile(value);
    }

    if (value.length === 10) {
      sendOtp(value);
    }
  };

  /* 📩 Send OTP */
  const sendOtp = async (number) => {
    console.log("Send OTP to:", number);
    setStep("OTP");
    setTimeLeft(30);
  };

  /* ⏱ OTP Countdown */
  useEffect(() => {
    if (step !== "OTP" || timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [step, timeLeft]);

  /* 🔐 OTP input handler */
  const handleOtpChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      otpRefs.current[index + 1].focus();
    }
  };

  return (
    <div className="login-overlay" onClick={onClose}>
      <div className="login-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        {/* LEFT */}
        <div className="login-left">
          <h1>VENNORI</h1>
          <p>Welcome!</p>
          <span>Register to  get availiable deals </span>
        </div>

        {/* RIGHT */}
        <div className="login-right">

          {/* 📱 MOBILE STEP */}
          {step === "MOBILE" && (
            <>
              <h2>Login / Signup</h2>
              <p className="subtitle">Enter Mobile Number</p>

              <div className="mobile-input">
                <span>🇮🇳 +91</span>
                <input
                  type="tel"
                  placeholder="Enter 10 digit number"
                  value={mobile}
                  onChange={handleMobileChange}
                />
              </div>
            </>
          )}

          {/* 🔐 OTP STEP */}
          {step === "OTP" && (
            <>
              <h2>OTP Verification</h2>
              <p className="subtitle">
                We have sent a verification code to <br />
                <strong>+91 {mobile}</strong>
              </p>

              <div className="otp-inputs">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (otpRefs.current[index] = el)}
                    maxLength="1"
                    value={digit}
                    onChange={(e) =>
                      handleOtpChange(e.target.value, index)
                    }
                  />
                ))}
              </div>

              <p className="resend">
                {timeLeft > 0
                  ? `Resend OTP in ${timeLeft}s`
                  : <span onClick={() => sendOtp(mobile)}>Resend OTP</span>}
              </p>

              <button className="otp-btn">Verify</button>
            </>
          )}

        </div>
      </div>
    </div>
  );
}
