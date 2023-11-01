export interface CharacterType {
  name: string;
  nights: number;
  nightOrder: number;
  disabled?: boolean;
  ability?: string;
}

export enum nights {
  NONE = -1,
  FIRST_ONLY = 0,
  ALL = 1,
  EVERY_OTHER = 2,
  ALL_BUT_FIRST = 3,
}

export enum turnOrder {
  CUPID,
  SEER,
  LOVERS,
  TWO_SISTERS,
  THREE_BROTHERS,
  WILD_CHILD,
  DEFENDER,
  VIGILANTE,
  WEREWOLVES,
  WHITE_WOLF,
  DIRE_WOLF,
  BIG_BAD_WOLF,
  WITCH,
  GYPSY,
  DRACULA,
}

export const names = {
  CUPID: "CUPID",
  DEFENDER: "DEFENDER",
  DIREWOLF: "DIREWOLF",
  VIGILANTE: "VIGILANTE",
  VILLAGER: "VILLAGER",
  WEREWOLF: "WEREWOLF",
  WHITEWOLF: "WHITE WOLF",
  WITCH: "WITCH",
};

export const images = {
  CUPID: "CUPID",
  DEFENDER: "DEFENDER",
  DIREWOLF: "DIREWOLF",
  VIGILANTE: "VIGILANTE",
  VILLAGER: "images/characters/Villageois_8889.jpg",
  WEREWOLF: "images/characters/LoupGarou_321.jpg",
  WHITEWOLF: "images/characters/LoupBlanc_3487.jpg",
  WITCH: "images/characters/Sorciere_1222.jpg",
};

export const Cupid: CharacterType = {
  name: names.CUPID,
  nights: nights.FIRST_ONLY,
  nightOrder: turnOrder.CUPID,
};

export const Defender: CharacterType = {
  name: names.DEFENDER,
  nights: nights.ALL_BUT_FIRST,
  nightOrder: turnOrder.DEFENDER,
};

export const Direwolf: CharacterType = {
  name: names.DIREWOLF,
  nights: nights.EVERY_OTHER,
  nightOrder: turnOrder.DIRE_WOLF,
};

export const Vigilante: CharacterType = {
  name: names.VIGILANTE,
  nights: nights.ALL_BUT_FIRST,
  nightOrder: turnOrder.VIGILANTE,
};

export const Villager: CharacterType = {
  name: names.VILLAGER,
  nights: nights.NONE,
  nightOrder: -1,
};

export const Werewolf: CharacterType = {
  name: names.WEREWOLF,
  nights: nights.ALL,
  nightOrder: turnOrder.WEREWOLVES,
};

export const WhiteWolf: CharacterType = {
  name: names.WHITEWOLF,
  nights: nights.EVERY_OTHER,
  nightOrder: turnOrder.WHITE_WOLF,
};

export const Witch: CharacterType = {
  name: names.WITCH,
  nights: nights.ALL_BUT_FIRST,
  nightOrder: turnOrder.WITCH,
};
