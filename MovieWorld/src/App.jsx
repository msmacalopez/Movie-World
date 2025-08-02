import { useState } from "react";

import "./App.css";
import Hero from "./Components/Hero";
import Main from "./Components/Main";
import NavBar from "./Components/NavBar";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Hero />
      <Main />
    </>
  );
}

export default App;
