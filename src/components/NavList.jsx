function NavList() {
  return (
    <ul className="nav-links" id="nav-links">
      <li>
        <a href="#home" className="nav-link">
          {" "}
          home{" "}
        </a>
      </li>

      <li>
        <a href="#about" className="nav-link">
          {" "}
          about{" "}
        </a>
      </li>

      <li>
        <a href="#services" className="nav-link">
          {" "}
          services{" "}
        </a>
      </li>

      <li>
        <a href="#tours" className="nav-link">
          {" "}
          tours
        </a>
      </li>
    </ul>
  );
}

export default NavList;
