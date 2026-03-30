import logo from "../assets/logo.svg";

function Logo({ onClick }) {
  return (
    <div className="nav-header">
      <img src={logo} className="nav-logo" alt="backroads" />
      <button
        onClick={onClick}
        type="button"
        className="nav-toggle"
        id="nav-toggle"
      >
        <i className="fas fa-bars"></i>
      </button>
    </div>
  );
}

export default Logo;
