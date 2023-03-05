import "./Header.styles.scss";
import coverImage from "../../Assets/webdesign.jpg";

function Header() {
  return (
    <div id="#home" className="App-header">
      <div className="info-container">
        <div className="info-container-1">
          <div className="first-info">PORTFOLIO</div>
          <div className="second-info">
            <h2>SWAPNIL</h2>
            <h2>SARKAR</h2>
          </div>
        </div>
        <div className="info-container-2">
          <p>Website Design And Development</p>
          <p>Email Me</p>
        </div>
      </div>
      <div
        className="cover-image"
        style={{
          backgroundImage: `url(${coverImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
}

export default Header;
