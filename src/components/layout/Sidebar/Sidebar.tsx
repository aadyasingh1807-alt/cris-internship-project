import "./Sidebar.css";

import {
  FaHome,
  FaClipboardList,
  FaFileAlt,
  FaUserCog,
  FaTools,
} from "react-icons/fa";

import {
  MdDirectionsRailway,
  MdKeyboardArrowRight,
  MdSupportAgent,
} from "react-icons/md";

export default function Sidebar() {
  return (
    <aside className="sidebar">

      {/* Logo */}
      <div className="sidebar-logo">
        <div className="logo-circle">CR</div>

        <div>
          <h2>CRIS</h2>
          <p>Railway System</p>
        </div>
      </div>

      {/* Menu */}

      <ul className="sidebar-menu">

        <li className="active">
          <div className="menu-left">
            <FaHome />
            <span>Dashboard</span>
          </div>
        </li>

        <li>
          <div className="menu-left">
            <MdDirectionsRailway />
            <span>Coach Maintenance</span>
          </div>

          <MdKeyboardArrowRight />
        </li>

        <li>
          <div className="menu-left">
            <FaTools />
            <span>Workshop</span>
          </div>

          <MdKeyboardArrowRight />
        </li>

        <li>
          <div className="menu-left">
            <FaClipboardList />
            <span>Inspection</span>
          </div>
        </li>

        <li>
          <div className="menu-left">
            <FaFileAlt />
            <span>Reports</span>
          </div>
        </li>

        <li>
          <div className="menu-left">
            <FaUserCog />
            <span>User Management</span>
          </div>
        </li>

      </ul>

      {/* Help */}

      <div className="help-card">

        <MdSupportAgent className="help-icon"/>

        <h4>Need Help?</h4>

        <p>
          Contact CRIS Support Team
        </p>

        <button>
          Contact
        </button>

      </div>

    </aside>
  );
}