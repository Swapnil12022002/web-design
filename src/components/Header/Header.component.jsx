import "./Header.styles.scss";
import HeaderPic from "../../Assets/headerPic.png";

function Header() {
  return (
    <div id="#home" className="App-header">
      <div className="header-info">
        <h1>HI!👋👋</h1>
        <p>I am Swapnil Sarkar😄😄.</p>
        <p>Welcome to my Website</p>
      </div>
      <img src={HeaderPic} alt="header-pic" />
    </div>
  );
}

export default Header;
