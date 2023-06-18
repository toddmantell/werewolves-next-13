export interface CharacterType {
    name: String,
    nights: number,
    disabled?: boolean,
    ability?: String
}

enum nights {
    ALL = 1000
}

export const names = {
    WEREWOLF: "WEREWOLF",
    VILLAGER: "VILLAGER"
};

export const Werewolf : CharacterType = {
    name: names.WEREWOLF,
    nights: nights.ALL
}

export const Villager : CharacterType = {
    name: names.VILLAGER,
    nights: nights.ALL
}

