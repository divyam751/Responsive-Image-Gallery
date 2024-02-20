import { useState } from "react";
import "../styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCircleInfo,
  faEnvelope,
  faHouseChimney,
  faImages,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [hamburger, setHemburger] = useState(false);
  const handleNav = () => {
    setHemburger((prev) => !prev);
  };
  return (
    <div className="navContainer">
      <ul className={`links ${hamburger ? "" : "menu-close"}`}>
        <li>
          <FontAwesomeIcon icon={faHouseChimney} />
          <a href="#"> Home</a>
        </li>

        <li>
          <FontAwesomeIcon icon={faImages} />
          <a href="#">Gallery</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faEnvelope} />
          <a href="#"> Contact</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faCircleInfo} />
          <a href="#"> About</a>
        </li>
      </ul>
      <div className="hamburger">
        <FontAwesomeIcon icon={faBars} onClick={handleNav} />
      </div>
    </div>
  );
};

export default Navbar;
