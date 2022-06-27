import { useState } from "react";
import Interactor from "../Interactors/Interactor";

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
    event.preventDefault();

    // ------------------------------------
    // The logic to generate the TBL goes here
    console.log(restraints);
    let tbl = genTBL(restraints);
    console.log(tbl);
    // ------------------------------------

    props.onGeneration(tbl);
  };

  const handleAddClick = () => {
    // Add a new object to the array
    // id must be unique, get the largest id and add 1
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
    console.log("from Builder.js - removing interactor with id: ", id);
    let array = [...restraints];
    let index = array.findIndex((item) => item.id === id);
    array.splice(index, 1);
    manipulateInteractor(array);
  };

  const handleChangeValues = (id, field, value) => {
    // console.log(id);
    // console.log(field);
    // console.log(value);
    let array = [...restraints];
    let index = array.findIndex((item) => item.id === id);
    array[index][field] = value;
    manipulateInteractor(array);
    // console.log(array);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        {restraints.map((restraints) => (
          <Interactor
            items={restraints}
            key={restraints.id}
            id={restraints.id}
            onChangeValue={handleChangeValues}
            onRemoveBtnPress={handleRemoveClick}
          />
        ))}
        <button type="button" onClick={handleAddClick}>
          Add Interactor
        </button>
        <button type="submit">Generate Restraints</button>
      </form>
    </div>
  );
};

const genTBL = (input_array) => {
  let tbl = JSON.stringify(input_array);
  return tbl;
};

export default BuilderForm;
