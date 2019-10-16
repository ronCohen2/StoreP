import React from "react";
import Store from "../src/Store";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <link rel="stylesheet" href="{PATH}/alertify.min.css" />
      <link rel="stylesheet" href="{PATH}/themes/default.min.css" />
      <Store />
    </div>
  );
};

export default App;
