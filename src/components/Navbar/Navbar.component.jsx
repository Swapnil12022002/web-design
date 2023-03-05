import "./Navbar.styles.scss";

function Navbar() {
  return (
    <div>
      <ul className="Navbar-list">
        <li>
          <a href="#home">HOME</a>
        </li>
        <li>
          <a href="#about">ABOUT ME</a>
        </li>
        <li>
          <a href="#services">SERVICES</a>
        </li>
        <li>
          <a href="#contact">CONTACT</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
