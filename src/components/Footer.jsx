import { navLinks } from "../data";
import NavExternal from "./NavExternal";
import NavLink from "./NavLink";

function Footer() {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {navLinks.map((link) => (
          <NavLink key={link.id} link={link} className="footer-link" />
        ))}
      </ul>
      <ul className="footer-icons">
        <NavExternal className="footer-icon" />
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
}

export default Footer;
