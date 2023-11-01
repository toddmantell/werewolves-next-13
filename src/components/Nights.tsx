"use client";

import * as React from "react";
import Night from "./Nights/Night";
import { CharacterType } from "./Characters/Characters";
import { generateFlow } from "./Nights/gameFlowCreator";

interface Props {
  characters: Array<CharacterType>;
  numberOfPlayers: number;
}

export default function Nights({ characters, numberOfPlayers }: Props) {
  const allNights = determineCharacterOrder(characters);
  return (
    <section>
      tktktk
      {allNights.forEach((sortedCharacters, key, map) => {
        console.log("sortedcharacters: ", sortedCharacters);
        <Night characters={sortedCharacters} night={key + 1} />;
      })}
    </section>
  );
}

//Somewhere we need to generate an array of night objects [night1, night2]
// maybe the nights are a set of the order?
function determineCharacterOrder(
  characters: Array<CharacterType>
): Map<string, Array<CharacterType>> {
  return generateFlow(characters);
}
