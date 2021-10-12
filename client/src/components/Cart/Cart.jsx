import React, { useContext } from "react";

import cartContext from '../../context/cartContext'

const Cart = () => {

  const { cart, setCartAndCheck, subtractAmountInCart, removeFromCart } = useContext(cartContext)

  return (
    <div>
      {cart.map(game => {
        return (
          <div>
            <img src={game.image} alt={game.title} />
            <h3>{game.title}</h3>
            <span>{game.price}</span>

            <button onClick={() => subtractAmountInCart(game)}>-</button>
            <span>{game.amount}</span>
            <button onClick={() => setCartAndCheck(game)}>+</button>
            <button onClick={() => removeFromCart(game)}>Papelera</button>
          </div>

        )
      })}
    </div>
  );
};

export default Cart;