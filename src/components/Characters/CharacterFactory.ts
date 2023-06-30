import * as Characters from "./Characters";

export default function CharacterFactory(
  characterName: String
): Characters.CharacterType {
  const { names } = Characters;
  switch (characterName) {
    case names.CUPID:
      return Characters.Cupid;
    case names.DEFENDER:
      return Characters.Defender;
    case names.DIREWOLF:
      return Characters.Direwolf;
    case names.VIGILANTE:
      return Characters.Vigilante;
    case names.VILLAGER:
      return Characters.Villager;
    case names.WEREWOLF:
      return Characters.Werewolf;
    case names.WHITEWOLF:
      return Characters.WhiteWolf;
    case names.WITCH:
      return Characters.Witch;
    default:
      return Characters.Villager;
  }
}
