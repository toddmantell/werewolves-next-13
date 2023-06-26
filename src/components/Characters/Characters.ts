export interface CharacterType {
  name: String;
  nights: number;
  nightOrder: number;
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
  DEFENDER: "DEFENDER",
  VIGILANTE: "VIGILANTE",
  VILLAGER: "VILLAGER",
  WEREWOLF: "WEREWOLF",
  WHITEWOLF: "WHITE WOLF",
};

export const Cupid: CharacterType = {
  name: names.CUPID,
  nights: nights.FIRST_ONLY,
  nightOrder: 1,
};

export const Defender: CharacterType = {
  name: names.DEFENDER,
  nights: nights.ALL_BUT_FIRST,
  nightOrder: 2,
};

export const Vigilante: CharacterType = {
  name: names.VIGILANTE,
  nights: nights.ALL_BUT_FIRST,
  nightOrder: 3,
};

export const Villager: CharacterType = {
  name: names.VILLAGER,
  nights: nights.NONE,
  nightOrder: -1,
};

export const Werewolf: CharacterType = {
  name: names.WEREWOLF,
  nights: nights.ALL,
  nightOrder: 5,
};

export const WhiteWolf: CharacterType = {
  name: names.WHITEWOLF,
  nights: nights.EVERY_OTHER,
  nightOrder: 6,
};
