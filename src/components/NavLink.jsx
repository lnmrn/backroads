function NavLink({ link, className = "" }) {
  const { href, content } = link;
  return (
    <li>
      <a href={href} className={className}>
        {content}
      </a>
    </li>
  );
}

export default NavLink;
