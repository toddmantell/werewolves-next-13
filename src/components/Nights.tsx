import * as React from 'react';
import Night from './Nights/Night';
import { CharacterType } from './Characters/Characters';

interface Props {
    characters: Array<CharacterType>
};

export default function Nights({characters} : Props) {
    const nights = determineCharacterOrder()
    // this will just return an array of Night components; the individual nights
    // render the object or set
    return nights.map((night, index) => <Night characters={[]} night={index+1}/>)
}

//Somewhere we need to generate an array of night objects [night1, night2]
// maybe the nights are a set of the order?
function determineCharacterOrder() : Array<CharacterType>{
    return [];
}