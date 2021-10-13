import React from "react";
import { Link } from 'react-router-dom'

const Card = ({ game }) => {
  return (
    <div>
      <Link to={`/game/${game.title}`}>
        <img src={game.image} alt={game.title} />
        <h3>{game.title}</h3>
        <span>{game.price}</span>
        <span>{game.platform}</span>
        <p>{game.rating}</p>
      </Link>
    </div>
  )
};

export default Card;
