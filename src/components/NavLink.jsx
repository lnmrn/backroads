function NavLink({ link, className = "", onNavigate = () => {} }) {
  const { href, content } = link;

  return (
    <li>
      <a href={href} className={className} onClick={onNavigate}>
        {content}
      </a>
    </li>
  );
}

export default NavLink;
