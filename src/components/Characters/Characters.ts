export interface CharacterType {
  name: String;
  nights: number;
  disabled?: boolean;
  ability?: String;
}

export enum nights {
  NONE = -1,
  FIRST_ONLY = 0,
  ALL = 1,
  EVERY_OTHER = 2,
  ALL_BUT_FIRST = 3,
}

export const names = {
  CUPID: "CUPID",
  VIGILANTE: "VIGILANTE",
  VILLAGER: "VILLAGER",
  WEREWOLF: "WEREWOLF",
  WHITEWOLF: "WHITE WOLF",
};

export const Vigilante: CharacterType = {
  name: names.VIGILANTE,
  nights: nights.ALL_BUT_FIRST,
};

export const Villager: CharacterType = {
  name: names.VILLAGER,
  nights: nights.NONE,
};

export const Werewolf: CharacterType = {
  name: names.WEREWOLF,
  nights: nights.ALL,
};

export const WhiteWolf: CharacterType = {
  name: names.WHITEWOLF,
  nights: nights.EVERY_OTHER,
};
