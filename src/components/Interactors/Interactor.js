import { useState } from "react";
import Card from "../UI/Card";

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
  };

  const handleRemoveClick = () => {
    props.onRemoveBtnPress(props.id);
  };

  return (
    <Card>
      <div className="interactor">
        <p>Interactor {props.id}</p>

        <label htmlFor="passive-res">Chain</label>
        <input
          id="passive-res"
          type="text"
          value={chain}
          onChange={chainChangeHandler}
        />

        <label htmlFor="active-res">Active</label>
        <input
          id="active-res"
          type="text"
          value={active}
          onChange={activeChangeHandler}
        />

        <label htmlFor="passive-res">Passive</label>
        <input
          id="passive-res"
          type="text"
          value={passive}
          onChange={passiveChangeHandler}
        />

        <label htmlFor="partners">Partner</label>
        <input
          id="partners"
          type="text"
          value={partner}
          onChange={partnerChangeHandler}
        />
      </div>
      <button type="button" onClick={handleRemoveClick}>
        Remove
      </button>
    </Card>
  );
};

export default Interactor;
