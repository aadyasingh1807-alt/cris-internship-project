import "./Dashboard.css";

import InfoCard from "../../components/cards/InfoCard/InfoCard";
import ActionableAlerts from "../../components/cards/ActionableAlerts/ActionableAlerts";
import QuickAccessCard from "../../components/cards/QuickAccessCard/QuickAccessCard";

import { quickAccessData } from "../../data/src/data/quickAccessData";

// Uncomment these when completed
// import WelcomeCard from "../../components/cards/WelcomeCard/WelcomeCard";
// import QRCodeCard from "../../components/cards/QRCodeCard/QRCodeCard";

import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";

export default function Dashboard() {
  return (
    <div className="dashboard-page">

      {/* ---------- Top Row ---------- */}
      <div className="dashboard-top">

        <section className="welcome-section">
          Welcome Section
          {/* <WelcomeCard /> */}
        </section>

        <section className="qr-section">
          QR / Feedback
          {/* <QRCodeCard /> */}
        </section>

      </div>

      {/* ---------- Actionable Alerts ---------- */}
      <section className="alerts-section">
        <ActionableAlerts />
      </section>

      {/* ---------- Quick Access ---------- */}
      <section className="quick-access-section">

        <h2 className="section-title">
          Quick Access
        </h2>

        <div className="quick-access-grid">

          {quickAccessData.map((item) => (
            <QuickAccessCard
              key={item.id}
              title={item.title}
              icon={item.icon}
            />
          ))}

        </div>

      </section>

      {/* ---------- Information Cards ---------- */}
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