import "./ActionableAlerts.css";

import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";

import AlertItem from "../AlertItem/AlertItem";

export default function ActionableAlerts() {

  // Dummy data
  // Later this will come from API

  const alerts = [
    {
      id: 1,
      title: "Fire Extinguisher Due",
      totalFire: 1725,
      hydraulicCount: 0,
      maintenanceCount: 3,
      inspectionCount: 0,
    },
    {
      id: 2,
      title: "Fire Extinguisher Over Due",
      totalFire: 1725,
      hydraulicCount: 30,
      maintenanceCount: 675,
      inspectionCount: 869,
    },
  ];

  return (
    <section className="actionable-alerts">

      <div className="actionable-alerts-header">

        <WarningAmberRoundedIcon className="warning-icon"/>

        <h2>Actionable Alerts</h2>

      </div>

      <div className="alerts-list">

        {alerts.map((alert) => (

          <AlertItem
            key={alert.id}
            title={alert.title}
            totalFire={alert.totalFire}
            hydraulicCount={alert.hydraulicCount}
            maintenanceCount={alert.maintenanceCount}
            inspectionCount={alert.inspectionCount}
          />

        ))}

      </div>

    </section>
  );
}