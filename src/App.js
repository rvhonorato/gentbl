import { useState } from "react";
import BuilderForm from "./components/Builder/BuilderForm";
import Output from "./components/Output/Output";
import "./App.css";

const App = () => {
  const [output, setOutput] = useState("");

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
