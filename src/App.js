import "./App.css";
import Navbar from "./navbar";
import Home from "./home";

function App() {
  const testy = "helllllo welcome to hell";
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
