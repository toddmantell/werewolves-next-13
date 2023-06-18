import * as React from 'react';

type Props = {
    characterName: string
}

export default (props : Props) => (
    <div>
        <img src={`/images/${props.characterName}`} alt={props.characterName} />
        <hr />
        <div>{props.characterName}</div>
        <div><input type='checkbox' /></div>
    </div>    
);