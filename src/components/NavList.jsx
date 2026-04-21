import NavLink from "./NavLink";
import { navLinks } from "../data";

function NavList({ showLinks, onNavigate }) {
  return (
    <ul className={`nav-links ${showLinks ? "show-links" : ""}`} id="nav-links">
      {navLinks.map((link) => (
        <NavLink
          key={link.id}
          link={link}
          className="nav-link"
          onNavigate={onNavigate}
        />
      ))}
    </ul>
  );
}

export default NavList;
