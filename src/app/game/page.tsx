"use client";

import CharacterCard from "@/components/Characters/CharacterCard";
import CharacterFactory from "@/components/Characters/CharacterFactory";
import { names } from "@/components/Characters/Characters";
import Night from "@/components/Nights/Night";
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
        default:
          return { ...state };
      }
    },
    { players: 0 }
  );

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
      <section>
        <CharacterCard characterName="Werewolf" />
        <CharacterCard characterName="Villager" />
        <button onClick={() => alert("not implemented")}>Generate Game</button>
      </section>
      <Night
        night={"night1"}
        characters={[
          CharacterFactory(names.VILLAGER),
          CharacterFactory(names.WEREWOLF),
        ]}
      />
    </>
  );
}
