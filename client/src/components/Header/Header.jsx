import React, { useContext } from "react";
import { Link } from 'react-router-dom'

import searchContext from '../../context/searchContext'
import cartContext from '../../context/cartContext'

const Header = () => {

  const { search, setSearch } = useContext(searchContext)
  const { cart, setCart } = useContext(cartContext)

  return (
    <header>
      <Link to="/">
        <span>LOGO</span>
      </Link>
      <input type="text" onChange={({ target }) => setSearch(target.value)} />
      <Link to="/cart">Cart</Link>
      <span>CART</span>
      <span>{cart.length}</span>
    </header>
  );
};

export default Header;
