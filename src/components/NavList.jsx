import NavLink from "./NavLink";

function NavList() {
  return (
    <ul className="nav-links" id="nav-links">
      <NavLink linkRef="#home">home</NavLink>
      <NavLink linkRef="#about">about</NavLink>
      <NavLink linkRef="#services">services</NavLink>
      <NavLink linkRef="#tours">tours</NavLink>
    </ul>
  );
}

export default NavList;
