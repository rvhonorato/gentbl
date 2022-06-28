import { useState } from "react";

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Interactor = (props) => {
  const [chain, setChain] = useState("");
  const [active, setActive] = useState("");
  const [passive, setPassive] = useState("");
  const [partner, setPartner] = useState([]);

  // The props.onChangeValue is a function defined on the parent component
  //  that lifts the state from this component
  const chainChangeHandler = (event) => {
    setChain(event.target.value);
    props.onChangeValue(props.id, "chain", event.target.value);
  };
  const activeChangeHandler = (event) => {
    setActive(event.target.value);
    props.onChangeValue(props.id, "active", event.target.value);
  };
  const passiveChangeHandler = (event) => {
    setPassive(event.target.value);
    props.onChangeValue(props.id, "passive", event.target.value);
  };
  const partnerChangeHandler = (event) => {
    setPartner(event.target.value);
    props.onChangeValue(props.id, "partner", event.target.value);
  };

  const handleRemoveClick = () => {
    props.onRemoveBtnPress(props.id);
  };

  return (
    <Card style={{ margin: "20px" }}>
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
          Interactor {props.id}
        </Typography>
        <TextField
          id="standard-basic"
          label="Chain"
          variant="standard"
          required
          style={{ padding: "5px" }}
          value={chain}
          onChange={chainChangeHandler}
        />

        <TextField
          id="standard-basic"
          label="Active"
          variant="standard"
          required
          type="text"
          style={{ padding: "5px" }}
          value={active}
          onChange={activeChangeHandler}
        />

        <TextField
          // required
          id="standard-basic"
          label="Passive"
          variant="standard"
          type="text"
          style={{ padding: "5px" }}
          value={passive}
          onChange={passiveChangeHandler}
        />

        <TextField
          required
          label="Partner"
          variant="standard"
          id="standard-basic"
          type="text"
          style={{ padding: "5px" }}
          value={partner}
          onChange={partnerChangeHandler}
        />

        {/* <CardActions> */}
        <IconButton
          aria-label="delete"
          type="button"
          onClick={handleRemoveClick}>
          <DeleteIcon />
        </IconButton>
        {/* </CardActions> */}
      </CardContent>
    </Card>
  );
};

export default Interactor;
