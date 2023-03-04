import "./Header.styles.scss";
import coverImage from "../../Assets/webdesign.png";

function Header() {
  return (
    <div className="App-header">
      <div className="info-container">
        <div className="info-container-1">
          <div className="first-info">PORTFOLIO</div>
          <div className="second-info">
            <div className="second-info-1">SWAPNIL</div>
            <div className="second-info-2">SARKAR</div>
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
