import "./Dashboard.css";

import InfoCard from "../../components/cards/InfoCard/InfoCard";

import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";

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
          <InfoCard
            title="Wheel Profiling Coach List"
            description="View and manage wheel profiling coach details."
            icon={<AssignmentOutlinedIcon />}
          />
        </section>

        <section className="info-card">
          <InfoCard
            title="Duplicate Coach List"
            description="Identify and manage duplicate coach entries."
            icon={<ContentCopyOutlinedIcon />}
          />
        </section>

        <section className="info-card">
          <InfoCard
            title="Summary of ICF Coaches"
            description="View summary of ICF coaches with age greater than 15 years."
            icon={<DescriptionOutlinedIcon />}
          />
        </section>

        <section className="info-card">
          <InfoCard
            title="Total BPC for NMG Rakes"
            description="Check total BPC details for NMG rakes."
            icon={<FactCheckOutlinedIcon />}
          />
        </section>

      </div>

    </div>
  );
}