import { Player } from "@/types/Player";
import CharacterFactory from "../Characters/CharacterFactory";
import { CharacterType, names, nights } from "../Characters/Characters";

function calculateNumberOfWerewolves(numberOfPlayers: number): number {
  if (numberOfPlayers < 9) return 2;
  else if (numberOfPlayers > 9 && numberOfPlayers < 15) return 3;
  return 4;
}

export function generateFlow(
  selectedCharacters: Array<string> = [],
  players: Array<Player>
): Map<string, Array<CharacterType>> {
  // Also need to add Lovers somehow; maybe just a link between the two lovers
  // console.log("characters:", characters);
  const assignedPlayers = assignPlayers(selectedCharacters, players);

  const generatedNights = generateNights(assignedPlayers);

  return generatedNights;
}

function generateNights(assignedPlayers: Array<Player>) {
  // Get character types from the players array and then assign the characters
  // to their nights in the right order
  const chars: Array<CharacterType> = assignedPlayers.map((p) => p.character);

  const night1 = chars
    .filter(
      (char) =>
        char.nights !== nights.NONE &&
        char.nights !== nights.ALL_BUT_FIRST &&
        char.nights !== nights.EVERY_OTHER
    )
    .sort((a, b) => a.nightOrder - b.nightOrder);

  const evenNights = chars
    .filter(
      (char) =>
        char.nights === nights.EVERY_OTHER ||
        char.nights === nights.ALL ||
        char.nights === nights.ALL_BUT_FIRST
    )
    .sort((a, b) => a.nightOrder - b.nightOrder);

  const oddNights = chars
    .filter(
      (char) =>
        char.nights === nights.ALL || char.nights === nights.ALL_BUT_FIRST
    )
    .sort((a, b) => a.nightOrder - b.nightOrder);

  const allNights = new Map();

  const numberOfNights = Math.round((chars.length + 1) / 2);

  for (var i = 1; i <= numberOfNights; i++) {
    if (i === 1) allNights.set("night1", night1);
    else if (i % 2 === 0) allNights.set(`night${i}`, evenNights);
    else if (i % 1 === 0) allNights.set(`night${i}`, oddNights);
  }

  // console.log("all nights", allNights);

  return allNights;
}

export function assignPlayers(
  selectedCharacters: Array<string>,
  players: Array<Player>
): Array<Player> {
  // randomly assign werewolves based on number of players
  // but also have to keep track of how many werewolves have been assigned
  const numberOfWerewolves: number = calculateNumberOfWerewolves(
    players.length
  );

  let werewolvesAssigned = 0;

  const numberOfSpecialWerewolves: number = selectedCharacters.reduce(
    (accumulator, current): number => {
      if (current === names.WHITEWOLF || current === names.DIREWOLF)
        return accumulator++;
      return accumulator;
    },
    0
  );

  // Where do we use this?
  const numberOfVanillaWerwolves =
    numberOfWerewolves - numberOfSpecialWerewolves;

  let allCharacters: Array<string> = [
    names.VILLAGER,
    names.WEREWOLF,
    ...selectedCharacters,
  ];

  let assignedPlayers: Player[] = [];
  if (selectedCharacters.length) {
    //assign special characters beyond villager and werewolf are in the game
    assignedPlayers = players.map(
      (currentPlayer: Player, index: number): Player => {
        const randomCharacterIndex: number = Math.floor(
          Math.random() * allCharacters.length
        );

        const assignedPlayer = {
          ...currentPlayer,
          character: CharacterFactory(allCharacters[randomCharacterIndex]),
        };

        allCharacters =
          allCharacters[randomCharacterIndex] !== names.WEREWOLF ||
          allCharacters[randomCharacterIndex] !== names.VILLAGER
            ? allCharacters.filter(
                (name: string, index: number) => index !== randomCharacterIndex
              )
            : allCharacters;

        const isWerewolf: boolean = [
          ...Object.values(names).filter((name) => name.includes("WOLF")),
        ].includes(assignedPlayer.character.name);

        const arrayofwolfnames = [
          ...Object.values(names).filter((name) => name.includes("WOLF")),
        ];

        console.log(arrayofwolfnames.includes(assignedPlayer.character.name));

        if (isWerewolf) werewolvesAssigned++;
        console.log("werewolves assigned", werewolvesAssigned);

        return assignedPlayer;
      }
    );
  }

  console.log("PLAYERS", assignedPlayers);
  return assignedPlayers;
}
