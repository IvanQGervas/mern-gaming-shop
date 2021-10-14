import React, { useContext } from "react";

import CheckIcon from '@mui/icons-material/Check';

import gamesContext from '../../context/gamesContext'
import cartContext from '../../context/cartContext'

import proovedores from '../../proovedores'


const Details = (props) => {

  const { games, setGames } = useContext(gamesContext)
  const { cart, setCart, setCartAndCheck } = useContext(cartContext)

  const nameGame = props.location.pathname.split('/')[2]

  const [game] = games.filter(gm => gm.title === nameGame)
  console.log(game);

  // const [{ cif }] = proovedores.filter(pr => pr.platform === game.platform)

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
    <div className="details">
      <div className="details--conteiner-img">
        <img src={game.image} alt={game.title} />
      </div>

      <div className="details--conteiner-data">
        <h1>{game.title}</h1>
        <div className="data-stock">
          <p><CheckIcon className="check-icon" />En Stock</p>
          <p><CheckIcon className="check-icon" />Descarga inmediata</p>
        </div>

        <div className="data-provider">
          <p>Plataforma: {game.platform[0].platform}</p>
          <p>Cif: {game.platform[0].cif}</p>
        </div>

        <div className="conteiner-tags">
          {game.tags.map((tag, i) => <span className="tag" key={i}>{tag}</span>)}
        </div>

        <div className="conteiner-price-cart">
          <div className="conteiner-price-raiting">
            <p className={'rating ' + ratingClass()}>{game.rating}</p>
            <p className="price">{game.price}€</p>
          </div>

          <button onClick={() => setCartAndCheck(game)}>Añadir al carrito</button>
        </div>

      </div>
    </div>
  );
};

export default Details;
