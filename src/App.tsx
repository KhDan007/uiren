import { useState } from "react";
import "./App.css";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Ru } from "./components/pages/ru/Ru";

function App() {
  const [language, setLanguage] = useState("ru");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ru" element={<Ru />}>

        </Route>
      </Routes>


      
    </BrowserRouter>
  );
}

export default App;
