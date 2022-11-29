import React from "react";

import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = (e) => {
    const btnText = e.target.textContent;
    const btnPos = e.target.getBoundingClientRect();
    const btnCenter = (btnPos.left + btnPos.right) / 2;
    const btnBottom = btnPos.bottom - 3;
    openSubmenu(btnText, { btnCenter, btnBottom });
  };

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };

  return (
    <nav id="home"className="nav" onMouseOver={handleSubmenu} style={{background:"#fff"}}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={require('./images/kkslogo.png')} style={{width:"50px", height:"50px"}}/>
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li className="link-btn" onMouseOver={displaySubmenu}>
            about us
          </li>
          <li className="link-btn" onMouseOver={displaySubmenu}>
            gallery
          </li>
          <li className="link-btn" onMouseOver={displaySubmenu}>
            contact us
          </li>
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
