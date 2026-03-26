import NavLink from "./NavLink";
import { navLinks } from "../data";

function NavList() {
  return (
    <ul className="nav-links" id="nav-links">
      {navLinks.map((link) => (
        <NavLink key={link.id} link={link} className="nav-link" />
      ))}
    </ul>
  );
}

export default NavList;
