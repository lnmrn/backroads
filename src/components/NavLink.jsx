function NavLink({ linkRef, children }) {
  return (
    <li>
      <a href={linkRef} className="nav-link">
        {children}
      </a>
    </li>
  );
}

export default NavLink;
