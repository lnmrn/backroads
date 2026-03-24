import Logo from "./Logo";
import NavList from "./NavList";
import NavExternal from "./NavExternal";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Logo />
        <NavList />
        <NavExternal />
      </div>
    </nav>
  );
}

export default NavBar;
