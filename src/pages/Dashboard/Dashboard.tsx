import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-page">

      {/* Top Row */}
      <div className="dashboard-top">

        <section className="welcome-section">
          Welcome Section
        </section>

        <section className="qr-section">
          QR / Feedback
        </section>

      </div>

      {/* Alerts */}
      <section className="alerts-section">
        Alerts Section
      </section>

      {/* Quick Access */}
      <section className="quick-access-section">
        Quick Access
      </section>

      {/* Information Cards */}
      <div className="info-grid">

        <section className="info-card">
          Wheel Profiling
        </section>

        <section className="info-card">
          Duplicate Coach
        </section>

        <section className="info-card">
          ICF Summary
        </section>

        <section className="info-card full-width">
          Total BPC
        </section>

      </div>

    </div>
  );
}