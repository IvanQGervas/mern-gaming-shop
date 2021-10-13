import React, { useContext } from "react";
import queryString from 'query-string'

import gamesContext from '../../context/gamesContext'
import cartContext from '../../context/cartContext'

import proovedores from '../../proovedores'

const Details = (props) => {

  const { games, setGames } = useContext(gamesContext)
  const { cart, setCart, setCartAndCheck } = useContext(cartContext)

  const nameGame = props.location.pathname.split('/')[2]

  const [ game ] = games.filter(gm => gm.title === nameGame)


  const [{ cif }] = proovedores.filter(pr => pr.platform === game.platform)


  return (
    <div>
      <button onClick={() => setCartAndCheck(game)}>Add to Cart</button>
      <h1>{game.title}</h1>
      <p>{game.platform}</p>
      <p>{game.price}</p>
      {game.tags.map( (tag, i) => <p key={i}>{tag}</p>)}
      <p>{game.rating}</p>
      <img src={game.image} alt={game.title} />
      <p>{cif}</p>
    </div>
  );
};

export default Details;
