import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

import {Link} from 'react-scroll'


const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();
  const container = useRef(null);
  const [columns, setColums] = useState("col-2");
  useEffect(() => {
    setColums("col-2");
    const subMenu = container.current;
    const { btnCenter, btnBottom } = location;
    subMenu.style.left = `${btnCenter}px`;
    subMenu.style.top = `${btnBottom}px`;
    if (links.length === 3) {
      setColums("col-3");
    }
    if (links.length > 3) {
      setColums("col-4");
    }
  });
  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      ref={container}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
           
            <Link  to={url} spy={true} smooth={true} offset={-50} duration={500} >
          {icon}{label}
        </Link>
        
   
           
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
