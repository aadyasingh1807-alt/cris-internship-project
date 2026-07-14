import "./InfoCard.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import type { ReactNode } from "react";
interface InfoCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  onClick?: () => void;
}

export default function InfoCard({
  title,
  description,
  icon,
  onClick,
}: InfoCardProps) {
  return (
    <div className="info-card-component" onClick={onClick}>
      <div className="info-card-header">
        <h3>{title}</h3>
        <ArrowForwardIcon className="info-card-arrow" />
      </div>

      <div className="info-card-body">
        <div className="info-card-icon">
          {icon}
        </div>

        <p>{description}</p>
      </div>
    </div>
  );
}