export const genTBL = (input_array) => {
  // Generate the TBL file
  let tbl = "";
  for (let i = 0; i < input_array.length; i++) {
    let current_id = input_array[i].id;
    let chainX = input_array[i].chain;
    for (let j = 0; j < input_array.length; j++) {
      let chainY = input_array[j].chain;
      let target_partner = input_array[j].partner;
      if (target_partner === current_id) {
        let assignResArray = input_array[i].active;
        if (canSplit(assignResArray, ",")) {
          assignResArray = input_array[i].active.split(",");
        } else {
          assignResArray = input_array[i].active.split(" ");
        }

        let innerActiveResArray = input_array[j].active;
        if (canSplit(innerActiveResArray, ",")) {
          innerActiveResArray = innerActiveResArray.split(",");
        } else {
          innerActiveResArray = innerActiveResArray.split(" ");
        }

        // Passive residues are not required, check if they exist
        let innerPassiveResArray = input_array[j].passive;
        if (innerPassiveResArray != null) {
          if (canSplit(innerPassiveResArray, ",")) {
            innerPassiveResArray = innerPassiveResArray.split(",");
          } else {
            innerPassiveResArray = innerPassiveResArray.split(" ");
          }
        } else {
          innerPassiveResArray = [];
        }

        let innerResArray = [...innerActiveResArray, ...innerPassiveResArray];

        for (let k = 0; k < assignResArray.length; k++) {
          tbl +=
            "assign ( resid " +
            assignResArray[k] +
            " and segid " +
            chainX +
            " )\n";
          tbl += "       (\n";
          for (let l = 0; l < innerResArray.length; l++) {
            tbl +=
              "        ( resid " +
              innerResArray[l] +
              " and segid " +
              chainY +
              " )\n";
            // Check if we need to add `     or`
            if (l < innerResArray.length - 1) {
              tbl += "     or\n";
            } else {
              tbl += "";
            }
          }
          tbl += "       )  2.0 2.0 0.0\n\n";
        }
      }
    }
  }
  return tbl;
};

// Check if a string can be split into an array
const canSplit = function (str, token) {
  return (str || "").split(token).length > 1;
};
