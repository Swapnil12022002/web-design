import "./App.scss";
import Navbar from "./components/Navbar/Navbar.component";
import Header from "./components/Header/Header.component";
import Bio from "./components/Bio/Bio.component";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Bio />
    </div>
  );
}

export default App;
