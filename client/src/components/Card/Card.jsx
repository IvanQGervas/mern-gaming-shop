import React from "react";
import { Link } from 'react-router-dom'

const Card = ({ game }) => {

  const ratingClass = () => {
    if (game.rating > 80) {
      return 'green'
    } else if (game.rating > 60) {
      return 'low-green'
    } else if (game.rating > 40) {
      return 'yellow'
    } else if (game.rating > 20) {
      return 'orange'
    }
  }

  return (
    <div className="card">
      <Link to={`/game/${game.title}`}>
        <div className="card-image-container">
          <p className={ratingClass()}>{game.rating}</p>
          <img src={game.image} alt={game.title} />
          <div className="box-shadow"></div>
          <span className="card-price">{game.price}€</span>
        </div>
        <h3 className="card-title">{game.title}</h3>
      </Link>
    </div>
  )
};

export default Card;
