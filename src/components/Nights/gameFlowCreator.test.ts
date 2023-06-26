import { describe, expect, test } from "vitest";
import { generateFlow } from "./gameFlowCreator";
import { CharacterType, names, nights } from "../Characters/Characters";
import CharacterFactory from "../Characters/CharacterFactory";

describe("game flow creator", () => {
  test("adds characters to the correct nights", () => {
    const expected = [{ name: names.WEREWOLF, nights: 1, nightOrder: 5 }];

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
      .set("night1", [{ name: names.WEREWOLF, nights: 1, nightOrder: 5 }])
      .set("night2", [
        { name: names.WEREWOLF, nights: 1, nightOrder: 5 },
        { name: names.WHITEWOLF, nights: 2, nightOrder: 6 },
      ]);

    const gameCharacters = [
      CharacterFactory(names.WEREWOLF),
      CharacterFactory(names.VILLAGER),
      CharacterFactory(names.WHITEWOLF),
    ];

    const result = generateFlow(gameCharacters);

    expect(result).toEqual(expected);
  });

  test("should order the night with the characters in the correct order", () => {
    const expected: Array<CharacterType> = [
      { name: names.CUPID, nights: 0, nightOrder: 1 },
      { name: names.WEREWOLF, nights: 1, nightOrder: 5 },
    ];

    const gameCharacters = [
      CharacterFactory(names.WEREWOLF),
      CharacterFactory(names.VILLAGER),
      CharacterFactory(names.WHITEWOLF),
      CharacterFactory(names.CUPID),
      CharacterFactory(names.DEFENDER),
    ];

    const result = generateFlow(gameCharacters);

    expect(result.get("night1")).toEqual(expected);
  });

  test("should take many characters and sort them correctly", () => {
    const expected: Array<CharacterType> = [
      { name: names.DEFENDER, nights: nights.ALL_BUT_FIRST, nightOrder: 2 },
      { name: names.VIGILANTE, nights: nights.ALL_BUT_FIRST, nightOrder: 3 },
      { name: names.WEREWOLF, nights: nights.ALL, nightOrder: 5 },
      { name: names.WHITEWOLF, nights: nights.EVERY_OTHER, nightOrder: 6 },
    ];

    const gameCharacters = [
      CharacterFactory(names.WEREWOLF),
      CharacterFactory(names.VILLAGER),
      CharacterFactory(names.WHITEWOLF),
      CharacterFactory(names.CUPID),
      CharacterFactory(names.DEFENDER),
      CharacterFactory(names.VIGILANTE),
    ];

    const result = generateFlow(gameCharacters);

    console.log("result.night2", result.get("night2"));

    expect(result.get("night2")).toEqual(expected);
  });
});
