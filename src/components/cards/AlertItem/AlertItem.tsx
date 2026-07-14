import "./AlertItem.css";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface AlertItemProps {
  title: string;
  totalFire: number;
  hydraulicCount: number;
  maintenanceCount: number;
  inspectionCount: number;
  onClick?: () => void;
}

export default function AlertItem({
  title,
  totalFire,
  hydraulicCount,
  maintenanceCount,
  inspectionCount,
  onClick,
}: AlertItemProps) {
  return (
    <div className="alert-item" onClick={onClick}>
      <div className="alert-item-header">
        <h3>{title}</h3>

        <ArrowForwardIcon className="alert-arrow" />
      </div>

      <div className="alert-item-body">
        <span>
          <strong>Total Fire Ex.:</strong> {totalFire}
        </span>

        <span>
          <strong>Hydraulic Count:</strong> {hydraulicCount}
        </span>

        <span>
          <strong>Maintenance Count:</strong> {maintenanceCount}
        </span>

        <span>
          <strong>Inspection Count:</strong> {inspectionCount}
        </span>
      </div>
    </div>
  );
}