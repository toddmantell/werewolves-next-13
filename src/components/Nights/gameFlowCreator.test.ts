import { describe, expect, test } from "vitest";
import { generateFlow } from "./gameFlowCreator";
import {
  CharacterType,
  names,
  nights,
  turnOrder,
} from "../Characters/Characters";
import CharacterFactory from "../Characters/CharacterFactory";

describe("game flow creator", () => {
  test("adds characters to the correct nights", () => {
    const expected: Array<CharacterType> = [
      { name: names.WEREWOLF, nights: 1, nightOrder: turnOrder.WEREWOLVES },
    ];

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
      .set("night1", [
        {
          name: names.WEREWOLF,
          nights: nights.ALL,
          nightOrder: turnOrder.WEREWOLVES,
        },
      ])
      .set("night2", [
        {
          name: names.WEREWOLF,
          nights: nights.ALL,
          nightOrder: turnOrder.WEREWOLVES,
        },
        {
          name: names.WHITEWOLF,
          nights: nights.EVERY_OTHER,
          nightOrder: turnOrder.WHITE_WOLF,
        },
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
      {
        name: names.CUPID,
        nights: nights.FIRST_ONLY,
        nightOrder: turnOrder.CUPID,
      },
      {
        name: names.WEREWOLF,
        nights: nights.ALL,
        nightOrder: turnOrder.WEREWOLVES,
      },
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
      {
        name: names.DEFENDER,
        nights: nights.ALL_BUT_FIRST,
        nightOrder: turnOrder.DEFENDER,
      },
      {
        name: names.VIGILANTE,
        nights: nights.ALL_BUT_FIRST,
        nightOrder: turnOrder.VIGILANTE,
      },
      {
        name: names.WEREWOLF,
        nights: nights.ALL,
        nightOrder: turnOrder.WEREWOLVES,
      },
      {
        name: names.WHITEWOLF,
        nights: nights.EVERY_OTHER,
        nightOrder: turnOrder.WHITE_WOLF,
      },
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

    expect(result.get("night2")).toEqual(expected);
  });

  test("should generate the correct number of nights", () => {
    const expected: number = 8;

    const gameCharacters = [
      CharacterFactory(names.WEREWOLF),
      CharacterFactory(names.WEREWOLF),
      CharacterFactory(names.WEREWOLF),
      CharacterFactory(names.WHITEWOLF),
      CharacterFactory(names.VILLAGER),
      CharacterFactory(names.VILLAGER),
      CharacterFactory(names.VILLAGER),
      CharacterFactory(names.VILLAGER),
      CharacterFactory(names.VILLAGER),
      CharacterFactory(names.VILLAGER),
      CharacterFactory(names.VILLAGER),
      CharacterFactory(names.DIREWOLF),
      CharacterFactory(names.CUPID),
      CharacterFactory(names.DEFENDER),
      CharacterFactory(names.VIGILANTE),
    ];

    const result = generateFlow(gameCharacters);

    expect(result.size).toEqual(expected);
  });
});
