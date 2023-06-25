import { describe, expect, test } from "vitest";
import { generateFlow } from "./gameFlowCreator";
import { names } from "../Characters/Characters";
import CharacterFactory from "../Characters/CharacterFactory";

describe("game flow creator", () => {
  test("adds characters to the correct nights", () => {
    const expected = [{ name: names.WEREWOLF, nights: 1 }];

    const gameCharacters = [
      CharacterFactory(names.WEREWOLF),
      CharacterFactory(names.VILLAGER),
      CharacterFactory(names.WHITEWOLF),
    ];

    const result = generateFlow(gameCharacters);

    expect(result.get("night1")).toEqual(expected);
  });

  test("Should get all nights correctly", () => {
    const expected = new Map()
      .set("night1", [{ name: names.WEREWOLF, nights: 1 }])
      .set("night2", [
        { name: names.WEREWOLF, nights: 1 },
        { name: names.WHITEWOLF, nights: 2 },
      ]);

    const gameCharacters = [
      CharacterFactory(names.WEREWOLF),
      CharacterFactory(names.VILLAGER),
      CharacterFactory(names.WHITEWOLF),
    ];

    const result = generateFlow(gameCharacters);

    expect(result).toEqual(expected);
  });
});
