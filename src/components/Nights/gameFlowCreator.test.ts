import { describe, expect, test } from "vitest";
import { assignPlayers, generateFlow } from "./gameFlowCreator";
import {
  CharacterType,
  names,
  nights,
  turnOrder,
} from "../Characters/Characters";
import CharacterFactory from "../Characters/CharacterFactory";

const fakePlayers = [
  { name: "todd", gameId: 1, id: "1111-2222-333" },
  { name: "joe", gameId: 1, id: "1111-2222-3334" },
  { name: "bob", gameId: 1, id: "1111-2222-3335" },
  { name: "tim", gameId: 1, id: "1111-2222-3336" },
  { name: "tobey", gameId: 1, id: "1111-2222-3337" },
  { name: "karo", gameId: 1, id: "1111-2222-3341" },
  { name: "kevin", gameId: 1, id: "1111-2222-3338" },
  { name: "matty", gameId: 1, id: "1111-2222-3399" },
];

describe("game flow creator", () => {
  test("adds characters to the correct nights", () => {
    const expected: Array<CharacterType> = [
      { name: names.WEREWOLF, nights: 1, nightOrder: turnOrder.WEREWOLVES },
    ];

    const gameCharacters = [names.WHITEWOLF];

    const result = generateFlow(gameCharacters, fakePlayers);

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
      ])
      .set("night3", [{ name: "WEREWOLF", nights: 1, nightOrder: 8 }])
      .set("night4", [
        { name: "WEREWOLF", nights: 1, nightOrder: 8 },
        { name: "WHITE WOLF", nights: 2, nightOrder: 9 },
      ])
      .set("night5", [{ name: "WEREWOLF", nights: 1, nightOrder: 8 }]);

    const gameCharacters = [names.WHITEWOLF];

    const result = generateFlow(gameCharacters, fakePlayers);

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

    const gameCharacters = [names.WHITEWOLF, names.CUPID, names.DEFENDER];

    const result = generateFlow(gameCharacters, fakePlayers);

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
        //TODO: filter out more than one regular werewolf
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
      names.WEREWOLF,
      names.VILLAGER,
      names.WHITEWOLF,
      names.CUPID,
      names.DEFENDER,
      names.VIGILANTE,
    ];

    const result = generateFlow(gameCharacters, fakePlayers);

    expect(result.get("night2")).toEqual(expected);
  });

  test("should generate the correct number of nights", () => {
    const expected: number = 5;

    const specialCharacters = [
      names.WHITEWOLF,
      names.DIREWOLF,
      names.CUPID,
      names.DEFENDER,
      names.VIGILANTE,
    ];

    const result = generateFlow(specialCharacters, fakePlayers);
    console.log("result", result);
    expect(result.size).toEqual(expected);
  });
});

describe("characterAssigner", () => {
  test("should do stuff", () => {
    const players = assignPlayers(
      [names.DEFENDER, names.WHITEWOLF],
      fakePlayers
    );

    expect(players[0].character?.name).toBeTruthy();
  });
});
