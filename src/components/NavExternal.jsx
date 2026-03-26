import { externalLinks } from "../data";
import NavLink from "./NavLink";

function NavExternal() {
  const [facebook, twitter, squarespace] = externalLinks;

  return (
    <ul className="nav-icons">
      <NavLink
        link={facebook}
        target="_blank"
        iconClassName="fab fa-facebook"
        className="nav-icon"
      />
      <NavLink
        link={twitter}
        target="_blank"
        iconClassName="fab fa-twitter"
        className="nav-icon"
      />
      <NavLink
        link={squarespace}
        target="_blank"
        iconClassName="fab fa-squarespace"
        className="nav-icon"
      />
    </ul>
  );
}

export default NavExternal;
