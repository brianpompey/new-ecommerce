import React from 'react'
import './Card.css'

const Card = props => (
    <div className="Card">
        <a href={props.url} target="_blank" rel="noreferrer"><img src={props.image} alt="card-pic"/>
        <h3>{props.title}</h3>
        <p>{props.text}</p></a>
    </div>
)

export default Card;