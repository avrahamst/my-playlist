import SearchBar from "./SearchBar/SearchBar";
import { useState, useRef, useEffect } from "react";

import { NavBar } from "./SideNavBar/SideNavBar";
import { AiOutlineBars } from "react-icons/ai";
import "./style.css";

export default function Header(props) {
  const [navState, setNavState] = useState(false);
  const openMenu = useRef(null);

  const openNav = function () {
    setNavState(true);
  };
  const closeNav = () => {
    setNavState(false);
  };

  return (
    <div className="nav_container">
      <div className="nav_size">
        {!navState ? (
          <div>
            <AiOutlineBars onClick={openNav} size="30px" color="white" />
          </div>
        ) : (
          <div ref={openMenu}>
            <NavBar close={closeNav} />
          </div>
        )}
      </div>
      <div className="input_size">
        <SearchBar />
      </div>
    </div>
  );
}
