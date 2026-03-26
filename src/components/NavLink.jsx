function NavLink({ link }) {
  const { href, content } = link;
  return (
    <li>
      <a href={href} className="nav-link">
        {content}
      </a>
    </li>
  );
}

export default NavLink;
