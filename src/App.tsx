import "./App.css";
import { Data } from "./components/Data";
import { Intro } from "./components/Intro";
import { Mission } from "./components/Mission";
import { Navbar } from "./components/Navbar";
import { Special } from "./components/Special";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Navbar />
        <Intro />
        <Data />
        <Mission />
        <Special />
      </div>
    </div>
  );
}

export default App;
