import "./Header.css";

import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

function Header() {
  return (
    <header className="header">

      <div className="header__left">

        <img
          src="/favicon.svg"
          alt="CRIS"
          className="header__logo"
        />

        <h1 className="header__title">
          Coaching Maintenance Management System
        </h1>

      </div>

      <div className="header__right">

        <button className="icon-button">
          <NotificationsNoneIcon />
        </button>

        <div className="user-info">

          <AccountCircleOutlinedIcon />

          <div>

            <p className="welcome">
              Welcome
            </p>

            <span>
              Aadya Singh
            </span>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Header;