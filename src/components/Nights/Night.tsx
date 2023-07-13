import React from "react";
import { CharacterType } from "../Characters/Characters";

type Props = {
  characters: Array<CharacterType>;
  night: string;
};

export default ({ characters, night }: Props) => (
  <div>
    <h2>Night {night}</h2>
    <hr />
    <ol>
      {[...characters].map((character) => (
        <li key={`char-${night}`}>{character.name}</li>
      ))}
    </ol>
  </div>
);
