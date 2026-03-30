import { externalLinks } from "../data";

function NavExternal({ className = "" }) {
  return (
    <ul className="nav-icons">
      {externalLinks.map((link) => (
        <li key={link.id}>
          <a href={link.href} target="_blank" className={className}>
            <i className={link.icon}></i>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavExternal;
