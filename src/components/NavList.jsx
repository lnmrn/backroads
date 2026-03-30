import NavLink from "./NavLink";
import { navLinks } from "../data";
import { useState } from "react";

function NavList() {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <ul
      className={`nav-links ${showLinks ? "show-links" : ""}`}
      id="nav-links"
      onClick={() => setShowLinks((show) => !show)}
    >
      {navLinks.map((link) => (
        <NavLink key={link.id} link={link} className="nav-link" />
      ))}
    </ul>
  );
}

export default NavList;
