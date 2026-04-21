function NavLink({ link, className = "", onNavigate = () => {} }) {
  const { href, content } = link;

  return (
    <li className="nav-link">
      <a href={href} className={className} onClick={onNavigate}>
        {content}
      </a>
    </li>
  );
}

export default NavLink;
