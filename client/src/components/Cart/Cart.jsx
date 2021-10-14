import React, { useContext } from "react";
import { Link } from 'react-router-dom'

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import SearchIcon from '@mui/icons-material/Search';

import cartContext from '../../context/cartContext'

const Cart = () => {

  const { cart, setCartAndCheck, subtractAmountInCart, removeFromCart } = useContext(cartContext)

  return (

    <>
      {cart.length === 0
        ? <div className="cart">
          <div className="container-cart-empty">
            <SearchIcon className="search-icon" />
            <p>Lo sentimos, el carrito de esta vacio :(</p>
            <Link to="/"><button>Volver al inicio para ver el catalogo</button></Link>
          </div>
        </div>
        : <div className="cart">
          <div className="conteiner-products">
            <h1>Carrito</h1>

            <div className="conteiner-cards-products">
              {cart.map(game => {
                return (
                  <div className="product">
                    <img src={game.image} alt={game.title} />
                    <h3>{game.title}</h3>
                    <span>{(game.price * game.amount).toFixed(2)}€</span>

                    <div className="conteiner-amount">
                      {/* <button onClick={}>-</button> */}
                      <RemoveCircleOutlineOutlinedIcon className="add-minus-icons" onClick={() => subtractAmountInCart(game)} />
                      <span>{game.amount}</span>
                      <AddCircleOutlineOutlinedIcon className="add-minus-icons" onClick={() => setCartAndCheck(game)} />
                      {/* <button >+</button> */}
                    </div>

                    <DeleteOutlineIcon onClick={() => removeFromCart(game)} className="trash-icon" />
                  </div>

                )
              })}
            </div>

          </div>

          <div className="conteiner-total">
            <h2>Total (5) juegos</h2>
            <p className="final-price">Precio final: {cart.map(game => (game.price * game.amount).toFixed(2)).reduce((a, b) => a + b)}€</p>
            <button>Finalizar compra</button>
          </div>
        </div >
      }
    </>

  );
};

export default Cart;