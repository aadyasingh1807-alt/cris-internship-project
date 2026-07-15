import "./Sidebar.css";

import {
  FaHome,
  FaTrain,
  FaBus,
  FaCalendarAlt,
  FaFileAlt,
  FaFolder,
  FaShieldAlt,
  FaTint,
  FaGasPump,
  FaIndustry,
  FaFileContract,
  FaClipboardList,
  FaTable,
  FaUsers,
  FaWrench,
  FaBuilding,
} from "react-icons/fa";


import {
  MdKeyboardArrowRight,
  MdSupportAgent,
} from "react-icons/md";

const menuItems = [
  { title: "Home", icon: <FaHome />, active: true },
  { title: "Rake Maintenance", icon: <FaTrain /> },
  { title: "Coach Maintenance", icon: <FaBus /> },
  { title: "Coach Master", icon: <FaCalendarAlt /> },
  { title: "Central Applications", icon: <FaBuilding /> },
  { title: "Coach Schedules", icon: <FaCalendarAlt /> },
  { title: "Reports", icon: <FaFileAlt /> },
  { title: "Miscellaneous Reports", icon: <FaFolder /> },
  { title: "Drive", icon: <FaFolder /> },
  { title: "Warranty Complaints", icon: <FaShieldAlt /> },
  { title: "Watering & Cleaning", icon: <FaTint /> },
  { title: "Fueling", icon: <FaGasPump /> },
  { title: "Modification", icon: <FaWrench /> },
  { title: "Machine and Plant", icon: <FaIndustry /> },
  { title: "Contract", icon: <FaFileContract /> },
  { title: "Document Module", icon: <FaClipboardList /> },
  { title: "Pivot Table Reports", icon: <FaTable /> },
  { title: "Coach Mitra", icon: <FaUsers /> },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">

      {/* Logo */}

      <div className="sidebar-logo">

        <div className="logo-circle">
          CR
        </div>

        <div>
          <h2>CRIS</h2>
          <p>Railway System</p>
        </div>

      </div>

      {/* Menu */}

      <div className="sidebar-content">

        <ul className="sidebar-menu">

          {menuItems.map((item, index) => (

            <li
              key={index}
              className={item.active ? "active" : ""}
            >

              <div className="menu-left">

                {item.icon}

                <span>{item.title}</span>

              </div>

              {index !== 0 && <MdKeyboardArrowRight />}

            </li>

          ))}

          {/* Help Card */}

          <li className="help-wrapper">

            <div className="help-card">

              <MdSupportAgent className="help-icon" />

              <h4>Need Help?</h4>

              <p>
                Contact CRIS Support Team
              </p>

              <button>
                Contact
              </button>

            </div>

          </li>

        </ul>

      </div>

    </aside>
  );
}