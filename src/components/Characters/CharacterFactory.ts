import * as Characters from "./Characters";

export default function CharacterFactory(
  characterName: String
): Characters.CharacterType {
  switch (characterName) {
    case Characters.names.VILLAGER:
      return Characters.Villager;
    case Characters.names.WEREWOLF:
      return Characters.Werewolf;
    case Characters.names.WHITEWOLF:
      return Characters.WhiteWolf;
    default:
      return Characters.Villager;
  }
}
