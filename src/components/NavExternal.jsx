import { externalLinks } from "../data";

function NavExternal() {
  return (
    <ul className="nav-icons">
      {externalLinks.map((link) => (
        <li key={link.id}>
          <a href={link.href} target="_blank" className="nav-icon">
            <i className={link.icon}></i>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavExternal;
