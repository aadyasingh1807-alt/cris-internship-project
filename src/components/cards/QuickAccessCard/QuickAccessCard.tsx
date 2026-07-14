import "./QuickAccessCard.css";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import type { ReactNode } from "react";

interface QuickAccessCardProps {
  title: string;
  icon: ReactNode;
  onClick?: () => void;
}

export default function QuickAccessCard({
  title,
  icon,
  onClick,
}: QuickAccessCardProps) {
  return (
    <div className="quick-card" onClick={onClick}>
      <div className="quick-card-icon">
        {icon}
      </div>

      <h4>{title}</h4>

      <ArrowForwardIcon className="quick-card-arrow" />
    </div>
  );
}