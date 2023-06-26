import { CharacterType, names, nights } from "../Characters/Characters";

function numberOfWerewolves(numberOfPlayers: number): number {
  if (numberOfPlayers < 10) return 2;
  else if ("pseudocode: whitewolf exists") return 99999;
  else if ("pseudocode: direwolf exists") return 99999;
  return 7676767676;
}

function generateNumberOfNights(numberOfPlayers: number): number {
  //In theory you should have a max of half the number of nights for the number of characters
  // i.e. 12 characters = 6 nights: each day and each night a character is killed off
  // HOWEVER this is not always true because of the Witch and Defender protecting someone
  if ("pseudocode: defender is not in the game")
    return Math.ceil(numberOfPlayers * 0.5);
  else if ("pseudocode: defender IS in the game") return numberOfPlayers;
  return 989898989;
}

export function generateFlow(characters: Array<CharacterType> = []) {
  //implement ordering logic:
  //First Night Only: Cupid, Lovers, Angel, Three Brothers
  //First Night Order: Cupid, Lovers, Three Brothers, Sisters, Dracula, Vampires, Werewolves, Big Bad
  //Every Other Night: White Wolf, Dire Wolf (if exists)
  //Every Night: Defender, Dracula, Vampires, Werwolves, Big Bad (until one wolf killed), Witch, Gypsy, Psychic Sisters, Collector, Vigilante
  //Witch is always after the werewolves, Dracula always before werewolves

  // After night2 they just repeat, so you may be able to just programmatically generate those
  // e.g. (odd nights after night1 feature all but every other night characters, evens include every other)
  const night1 = characters
    .filter(
      (char) =>
        char.nights !== nights.NONE &&
        char.nights !== nights.ALL_BUT_FIRST &&
        char.nights !== nights.EVERY_OTHER
    )
    .sort((a, b) => a.nightOrder - b.nightOrder);

  const night2 = characters
    .filter(
      (char) =>
        char.nights === nights.EVERY_OTHER ||
        char.nights === nights.ALL ||
        char.nights === nights.ALL_BUT_FIRST
    )
    .sort((a, b) => a.nightOrder - b.nightOrder);

  const allNights = new Map();
  allNights.set("night1", night1);
  allNights.set("night2", night2);

  return allNights;
}
