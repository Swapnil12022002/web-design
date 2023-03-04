import "./Navbar.styles.scss";

function Navbar() {
  return (
    <div>
      <ul className="Navbar-list">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#services">Bio</a>
        </li>
        <li>
          <a href="#work">Work</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
