import "./WelcomeCard.css";

export default function WelcomeCard() {
  return (
    <div className="welcome-card">

      <div className="welcome-left">
        <img
          src="/images/train.jpeg"
          alt="Train"
          className="welcome-train"
        />
      </div>

      <div className="welcome-right">

        <h2 className="welcome-heading">
          Welcome back,
        </h2>

        <div className="pivot-notice">
          All Pivot Reports are available under
          <br />
          Pivot Table Reports Sub Menu
        </div>

        <div className="welcome-message">

          <p>
            <strong>Dear Users,</strong>
          </p>

          <p>
            <span className="attention">
              Attention, please.
            </span>{" "}
            Immediate redressal of CMM issues is our endeavour,
            and therefore, we invite feedback on Telegram.
          </p>

        </div>

        <p className="helpdesk">
          ☎ <strong>Helpdesk (24X7):</strong> 7827936501
        </p>

      </div>

    </div>
  );
}