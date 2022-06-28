import { useState } from "react";
import Interactor from "../Interactors/Interactor";
import { genTBL } from "../../utils";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const DUMMY_RESTRAINTS = [
  {
    id: "1",
    active: null,
    passive: null,
    chain: null,
    partner: null,
  },
  {
    id: "2",
    active: null,
    passive: null,
    chain: null,
    partner: null,
  },
];

const BuilderForm = (props) => {
  const [restraints, manipulateInteractor] = useState(DUMMY_RESTRAINTS);

  const handleFormSubmit = (event) => {
    // Handles the form submission
    event.preventDefault();

    // ------------------------------------
    // The logic to generate the TBL goes here
    let tbl = genTBL(restraints);
    // ------------------------------------

    props.onGeneration(tbl);
  };

  const handleAddClick = () => {
    // Adds a new object to the array
    // id must be unique, get the largest id and add 1
    // -- aka add a new Interactor
    let highestId = Math.max(
      ...restraints.map((restraints) => parseInt(restraints.id))
    );
    manipulateInteractor([
      ...restraints,
      {
        id: String(highestId + 1),
        active: null,
        passive: null,
        chain: null,
        partner: null,
      },
    ]);
  };

  const handleRemoveClick = (id) => {
    // Remove a specific object from the array
    //  -- aka remove one of the Interactor
    console.log("from Builder.js - removing interactor with id: ", id);
    let array = [...restraints];
    let index = array.findIndex((item) => item.id === id);
    array.splice(index, 1);
    manipulateInteractor(array);
  };

  const handleChangeValues = (id, field, value) => {
    // This function listens to values being changed in the Interactor component
    //  and updates the current restraints array
    let array = [...restraints];
    let index = array.findIndex((item) => item.id === id);
    array[index][field] = value;
    manipulateInteractor(array);
  };

  // Render the Interactor components based on how many
  //  elements there are in the restraints array
  const interactorlist = restraints.map((restraints) => (
    <Interactor
      items={restraints}
      key={restraints.id}
      id={restraints.id}
      onChangeValue={handleChangeValues}
      onRemoveBtnPress={handleRemoveClick}
    />
  ));

  return (
    <form onSubmit={handleFormSubmit} style={{ marginTop: "20px" }}>
      {interactorlist}
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center">
        <Grid item>
          <Button variant="outlined" type="button" onClick={handleAddClick}>
            Add Interactor
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" type="submit">
            Generate Restraints
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default BuilderForm;
