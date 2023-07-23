"use client";

import CharacterCard from "@/components/Characters/CharacterCard";
import CharacterFactory from "@/components/Characters/CharacterFactory";
import { images, names } from "@/components/Characters/Characters";
import Nights from "@/components/Nights";
import Night from "@/components/Nights/Night";
import { generateFlow } from "@/components/Nights/gameFlowCreator";
import { useReducer } from "react";

export default function Page() {
  const [state, dispatch] = useReducer(
    (state: any, action: any) => {
      switch (action.type) {
        case "number_of_players": {
          if (action.players > 30) {
            alert("The maximum number of players is 30");
            return { ...state, players: 0 };
          }
          return { ...state, players: action.players };
        }
        case "add_character": {
          return {
            ...state,
            characters: [
              ...state.characters,
              CharacterFactory(action.characterName),
            ],
          };
        }
        case "remove_character": {
          return {
            ...state,
            characters: state.characters.filter(
              (char) => char.name !== action.characterName
            ),
          };
        }
        case "nights_generated": {
          return {
            ...state,
            nightsGenerated: true,
          };
        }
        default:
          return { ...state };
      }
    },
    {
      players: 0,
      characters: [CharacterFactory(names.VILLAGER)],
      nightsGenerated: false,
    }
  );

  const getGameFlow = () => {
    const nights = generateFlow(state.characters);
    nights.forEach((characters, nightNumber) => (
      <Night characters={characters} night={nightNumber} />
    ));
    console.log("nights", nights);
  };

  return (
    <>
      <div className="heading">Number Of Players: {state.players}</div>
      <div>
        <input
          type="text"
          onChange={(event) =>
            dispatch({
              type: "number_of_players",
              players: event?.target.value,
            })
          }
        />
      </div>
      <section style={{ display: "flex" }}>
        <CharacterCard
          characterName={names.WEREWOLF}
          imageName={images.WEREWOLF}
          dispatch={dispatch}
        />
        <CharacterCard
          characterName={names.VILLAGER}
          imageName={images.VILLAGER}
          dispatch={dispatch}
        />
        <CharacterCard
          characterName={names.WHITEWOLF}
          imageName={images.WHITEWOLF}
          dispatch={dispatch}
        />
        <CharacterCard
          characterName={names.WITCH}
          imageName={images.WITCH}
          dispatch={dispatch}
        />
        <button onClick={() => getGameFlow()}>Generate Game</button>
      </section>
      <section>
        <h2>Nights:</h2>
        <div>
          {state.characters && <Nights characters={state.characters} />}
        </div>
      </section>
    </>
  );
}
