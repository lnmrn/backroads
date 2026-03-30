import Logo from "./Logo";
import NavList from "./NavList";
import NavExternal from "./NavExternal";
import { useState } from "react";

function NavBar() {
  const [showLinks, setShowLinks] = useState(false);
  function handleToggle() {
    setShowLinks((show) => !show);
    console.log(showLinks);
  }

  return (
    <nav className="navbar">
      <div className="nav-center">
        <Logo onClick={handleToggle} />
        <NavList showLinks={showLinks} />
        <NavExternal className="nav-icon" />
      </div>
    </nav>
  );
}

export default NavBar;
