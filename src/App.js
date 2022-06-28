import { useState } from "react";

import BuilderForm from "./components/Builder/BuilderForm";
import Output from "./components/Output/Output";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const App = () => {
  const [output, setOutput] = useState("");

  // Lift the state from the BuilderForm and send it over
  //  to the Output component
  const getOutput = (tbl) => {
    setOutput("!\n! HADDOCK AIR restraints\n!\n" + tbl);
  };

  return (
    <div>
      <Typography
        style={{ textAlign: "center", marginTop: "15px" }}
        variant="h3">
        GenTBL
      </Typography>
      <Typography
        style={{ textAlign: "center", padding: "30px" }}
        variant="body1">
        <p>This app generates TBL restraint files for docking using HADDOCK.</p>
        <p>
          Fill in the information for each interactor, define with which it
          should be paired with and click <u>Generate Restraints</u>.
        </p>
        <p>
          The output will be a TBL restraint file that can be used in HADDOCK,
          either copy it to <u>ambig.tbl</u> or click <u>Download</u>.
        </p>
      </Typography>
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center">
        <BuilderForm onGeneration={getOutput} />
        <Output value={output} />
      </Grid>
    </div>
  );
};

export default App;
