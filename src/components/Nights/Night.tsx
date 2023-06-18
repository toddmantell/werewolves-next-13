import React from 'react';
import {CharacterType} from "../Characters/Characters"

type Props = {
    characters:  Array<CharacterType>,
    night: Number
}

export default ({characters, night} : Props) => (
    <div>
        <h2>Night {night.toString()}</h2>
        <hr />
    <ol>
        {[...characters].map((character, index) => <li key={`char-${night}-${index+1}`}>{character.name}</li>)}
    </ol>
    </div>
)
