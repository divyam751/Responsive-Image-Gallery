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
          Home
        </li>

        <li>
          <FontAwesomeIcon icon={faImages} />
          Gallery
        </li>
        <li>
          <FontAwesomeIcon icon={faEnvelope} />
          Contact
        </li>
        <li>
          <FontAwesomeIcon icon={faCircleInfo} /> About
        </li>
      </ul>
      <div className="hamburger">
        <FontAwesomeIcon icon={faBars} onClick={handleNav} />
      </div>
    </div>
  );
};

export default Navbar;
