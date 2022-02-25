import React from "react";
import "./App.css";
import P5Canvas from "./game/P5Canvas";
import mysketch from "./game/game";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <P5Canvas sketch={mysketch} />
    </div>
  );
}

export default App;
