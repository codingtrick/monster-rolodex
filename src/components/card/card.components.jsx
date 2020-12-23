import React from 'react';
import './card.components.css';
export const Card = (props) => (
    <div className="card-container">
        <img className="monsterImg" src={`https://robohash.org/${props.monster.id}?Size=180×180&set=set2`} alt="monster"/>
        <h1>{props.monster.name} </h1>
        <p>{props.monster.email} </p>
    </div>
);