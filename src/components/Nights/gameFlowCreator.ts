import { CharacterType, names, nights } from "../Characters/Characters";

const game = {
  firstNight: new Set(),
  secondNight: new Set(),
  thirdNight: new Set(),
  fourthNight: new Set(),
  fifthNight: new Set(),
  sixthNight: new Set(),
  seventhNight: new Set(),
  eighthNight: new Set(),
  ninthNight: new Set(),
};

// Old version (6/22/23)
export default function addToNight(
  characterName: string,
  night: Set<string>
): Set<string> {
  const {
    firstNight,
    secondNight,
    thirdNight,
    fourthNight,
    fifthNight,
    sixthNight,
    seventhNight,
    eighthNight,
    ninthNight,
  } = game;
  //implement ordering logic:
  //First Night Only: Cupid, Lovers, Angel, Three Brothers
  //First Night Order: Cupid, Lovers, Three Brothers, Sisters, Dracula, Vampires, Werewolves, Big Bad
  //Every Other Night: White Wolf, Wolf Hunter (if exists)
  //Every Night: Defender, Dracula, Vampires, Werwolves, Big Bad (until one wolf killed), Witch, Gypsy, Psychic Sisters, Collector, Vigilante
  //Witch is always after the werewolves, Dracula always before werewolves
  const tempSet: Set<string> = new Set();
  if (tempSet.has(characterName)) return night;
  switch (characterName) {
    case "wildchilditem":
      firstNight.add(characterName);
      break;
    case "wolfhounditem":
      firstNight.add(characterName);
      break;
    case "cupiditem":
      firstNight.add("Cupid");
      firstNight.add("Lovers");
      break;
    case "threebrothersitem":
      firstNight.add("Three Brothers");
      break;
    case "psychicsistersitem":
      firstNight.add("Psychic Sisters");
      secondNight.add("Psychic Sisters");
      thirdNight.add("Psychic Sisters");
      fourthNight.add("Psychic Sisters");
      break;
    case "gypsyitem":
      secondNight.add(characterName);
      thirdNight.add(characterName);
      fourthNight.add(characterName);
      break;
    case "defenderitem":
      secondNight.add(characterName);
      thirdNight.add(characterName);
      fourthNight.add(characterName);
      break;
    case "draculaitem":
      firstNight.add("Dracula");
      firstNight.add("Vampires");
      secondNight.add("Dracula");
      secondNight.add("Vampires");
      thirdNight.add("Dracula");
      thirdNight.add("Vampires");
      fourthNight.add("Dracula");
      fourthNight.add("Vampires");
      break;
    case "werewolfitem":
      firstNight.add("Werewolves");
      secondNight.add("Werewolves");
      thirdNight.add("Werewolves");
      fourthNight.add("Werewolves");
      break;
    case "bigbadwolfitem":
      firstNight.add(characterName);
      secondNight.add(characterName);
      thirdNight.add(characterName);
      fourthNight.add(characterName);
      break;
    case "whitewolfitem":
      secondNight.add(characterName);
      fourthNight.add(characterName);
      break;
    case "angelitem": //break this out into another function that handles this logic?
      firstNight.add(characterName);
      break;
    case "witchitem":
      firstNight.add(characterName);
      secondNight.add(characterName);
      thirdNight.add(characterName);
      fourthNight.add(characterName);
      break;
    case "vigilanteitem":
      secondNight.add(characterName);
      thirdNight.add(characterName);
      fourthNight.add(characterName);
      break;
    case "collectoritem":
      secondNight.add(characterName + " (as it applies)");
      thirdNight.add(characterName + " (as it applies)");
      fourthNight.add(characterName + " (as it applies)");
      break;
  }
  // We probably eventually want to just compile the set and then return it instead of mutating existing sets?
  return tempSet;
}

export function generateFlow(characters: Array<CharacterType> = []) {
  //implement ordering logic:
  //First Night Only: Cupid, Lovers, Angel, Three Brothers
  //First Night Order: Cupid, Lovers, Three Brothers, Sisters, Dracula, Vampires, Werewolves, Big Bad
  //Every Other Night: White Wolf, Wolf Hunter (if exists)
  //Every Night: Defender, Dracula, Vampires, Werwolves, Big Bad (until one wolf killed), Witch, Gypsy, Psychic Sisters, Collector, Vigilante
  //Witch is always after the werewolves, Dracula always before werewolves

  const night1 = characters.filter(
    (char) =>
      char.nights !== nights.NONE &&
      char.nights !== nights.ALL_BUT_FIRST &&
      char.nights !== nights.EVERY_OTHER
  );

  const night2 = characters.filter(
    (char) =>
      char.nights === nights.EVERY_OTHER ||
      char.nights === nights.ALL ||
      char.nights === nights.ALL_BUT_FIRST
  );

  const allNights = new Map();
  allNights.set("night1", night1);
  allNights.set("night2", night2);

  return allNights;
}
