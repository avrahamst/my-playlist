import SearchBar from "./SearchBar/SearchBar";
import SideNavBar from "./SideNavBar/SideNavBar";
import NavBar from "../NavBar/NavBar";
import "./style.css";

export default function Header(props) {
  return (
    <div className="nav_container">
      <div className="nav_size">
        <NavBar />
      </div>
      <div className="input_size">
        <SearchBar />
      </div>
    </div>
  );
}
