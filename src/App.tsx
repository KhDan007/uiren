import "./App.css";
import { Data } from "./components/Data";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Intro } from "./components/Intro";
import { Mission } from "./components/Mission";
import { Navbar } from "./components/Navbar";
import { Process } from "./components/Process";
import { Reviews } from "./components/Reviews";
import { Special } from "./components/Special";
import { Subjects } from "./components/Subjects";

function App() {
  return (
    <div className="App">
      <div className="wrapper pt-9">
        <Navbar />
        <Intro />
        <Data />
        <Mission />
        <Special />
        <Subjects />
        <Process />
        <FAQ />
        <Reviews />
        <Footer />
      </div>
    </div>
  );
}

export default App;
