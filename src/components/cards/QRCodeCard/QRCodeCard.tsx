import "./QRCodeCard.css";

export default function QRCodeCard() {
  return (
    <div className="qr-card">

      <h3 className="qr-title">
        We value your feedback!
      </h3>

      <p className="qr-description">
        Scan the QR Code to join our Telegram group and
        share your valuable feedback.
      </p>

      <div className="qr-image-container">
        <img
          src="/images/telegram-qr.jpeg"
          alt="Telegram QR Code"
          className="qr-image"
        />
      </div>

      <p className="qr-footer">
        Scan to Join Telegram
      </p>

    </div>
  );
}