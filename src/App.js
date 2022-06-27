import { useState } from "react";

import BuilderForm from "./components/Builder/BuilderForm";
import Output from "./components/Output/Output";

import "./App.css";

const App = () => {
  const [output, setOutput] = useState("");

  // Lift the state from the BuilderForm and send it over
  //  to the Output component
  const getOutput = (tbl) => {
    setOutput("Your restraints go here: " + tbl);
  };

  return (
    <div>
      <BuilderForm onGeneration={getOutput} />
      <Output value={output} />
    </div>
  );
};

export default App;
