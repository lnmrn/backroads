import NavLink from "./NavLink";
import data from "../data";

function NavList() {
  return (
    <ul className="nav-links" id="nav-links">
      {data.map((link) => (
        <NavLink key={link.id} link={link} />
      ))}
    </ul>
  );
}

export default NavList;
