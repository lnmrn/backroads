function NavLink({ link, className = "", iconClassName = "", target = "" }) {
  const { href, content } = link;
  return (
    <li>
      <a href={href} target={target} className={className}>
        {content}
        <i className={iconClassName}></i>
      </a>
    </li>
  );
}

export default NavLink;
