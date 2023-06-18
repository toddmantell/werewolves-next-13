import * as Characters from "./Characters";


export default function CharacterFactory(characterName : String) : Characters.CharacterType {
    switch(characterName) {
        case Characters.names.VILLAGER: 
            return Characters.Villager;
        case Characters.names.WEREWOLF:
            return Characters.Werewolf;
        default: 
            return Characters.Villager
    }
}
