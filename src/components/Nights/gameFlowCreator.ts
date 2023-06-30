import { CharacterType, names, nights } from "../Characters/Characters";

function numberOfWerewolves(numberOfPlayers: number): number {
  if (numberOfPlayers < 10) return 2;
  else if ("pseudocode: whitewolf exists") return 99999;
  else if ("pseudocode: direwolf exists") return 99999;
  return 7676767676;
}

export function generateFlow(characters: Array<CharacterType> = []) {
  const night1 = characters
    .filter(
      (char) =>
        char.nights !== nights.NONE &&
        char.nights !== nights.ALL_BUT_FIRST &&
        char.nights !== nights.EVERY_OTHER
    )
    .sort((a, b) => a.nightOrder - b.nightOrder);

  const evenNights = characters
    .filter(
      (char) =>
        char.nights === nights.EVERY_OTHER ||
        char.nights === nights.ALL ||
        char.nights === nights.ALL_BUT_FIRST
    )
    .sort((a, b) => a.nightOrder - b.nightOrder);

  const oddNights = characters
    .filter(
      (char) =>
        char.nights === nights.ALL || char.nights === nights.ALL_BUT_FIRST
    )
    .sort((a, b) => a.nightOrder - b.nightOrder);

  const allNights = new Map();

  const numberOfNights = (characters.length + 1) / 2;

  for (var i = 1; i <= numberOfNights; i++) {
    if (i === 1) allNights.set("night1", night1);
    else if (i % 2 === 0) allNights.set(`night${i}`, evenNights);
    else if (i % 1 === 0) allNights.set(`night${i}`, oddNights);
  }

  console.log("all nights", allNights);

  return allNights;
}
