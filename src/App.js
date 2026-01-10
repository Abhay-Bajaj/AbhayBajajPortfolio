import React, { useEffect } from "react";
import "./App.scss";
import Main from "./containers/Main";

function App() {
  // makes sure App wrapper exists, won't interfere with "dark-mode" toggle
  useEffect(() => {
    // do nothing by default
  }, []);

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
