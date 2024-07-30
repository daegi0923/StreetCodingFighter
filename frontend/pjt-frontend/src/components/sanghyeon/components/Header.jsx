import "../../../css/Header.css";
import userIcon from "../../../assets/userIcon.png";
import Setting from "./Setting";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <>
      <div className="header-container">
        <h2
          className="header-title"
          onClick={() => {
            navigate("/main");
          }}
        >
          Street Coding Figther
        </h2>
        <div className="header-icon">
          <img
            onClick={() => {
              navigate("/profile");
            }}
            className="user-icon"
            src={userIcon}
            alt="userIcon"
          />
          <Setting />
        </div>
      </div>
    </>
  );
}

export default Header;