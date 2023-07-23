"use client";

import * as React from "react";
import { names } from "./Characters";

type Props = {
  characterName: string;
  imageName: string;
  dispatch: Function;
};

export default (props: Props) => {
  const [checked, updateChecked] = React.useState(false);

  const handleCheckChange = (event: any) => {
    if (checked === false) {
      props.dispatch({
        type: "add_character",
        characterName: props.characterName,
      });
      return updateChecked(!checked);
    }
    props.dispatch({
      type: "remove_character",
      characterName: props.characterName,
    });
    return updateChecked(!checked);
  };

  return (
    <div className="col-md-4">
      <div className="team-item">
        <div className="team-image">
          <img src={props.imageName} className="embeddedimage" alt="" />
        </div>
        <div className="team-text">
          <h3>{props.characterName}</h3>
          <div className="quoteright" style={{ width: "100px" }}></div>
          {props.characterName !== names.VILLAGER && (
            <input
              type="checkbox"
              value={checked}
              id={`${props.characterName}-checkbox`}
              onChange={handleCheckChange}
            />
          )}
        </div>
      </div>
    </div>
  );
};
