import React from "react";
import "./App.css";

function App() {
  const [buttonState, setButtonState] = React.useState(false);

  return (
    <div className="App">
      <button onClick={() => setButtonState("string")}>Click me</button>
      <p>{JSON.stringify(buttonState)}</p>
    </div>
  );
}

export default App;
