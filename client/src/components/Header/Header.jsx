import React, { useContext } from "react";
import { Link } from 'react-router-dom'

import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

import searchContext from '../../context/searchContext'
import cartContext from '../../context/cartContext'

// Image
import logo from '../../assets/img/logo-now-gaming.png'

const Header = () => {

  const { search, setSearch } = useContext(searchContext)
  const { cart, setCart } = useContext(cartContext)

  return (
    <header className="header">
      <div className="header--container">
        <Link to="/">
          <img src={logo} alt="logo now gaming" />
        </Link>
        <div className="header--container-input">
          <input type="text" onChange={({ target }) => setSearch(target.value)} />
          <div className="conteiner-search-icon">
            <SearchIcon className="search-icon" />
          </div>
        </div>
        <div className="header--container-cart">
          <Link to="/cart">Cart</Link>
          {cart.length > 0
            ? <span className="amount-cart">{cart.length}</span>
            : null
          }
          <ShoppingCartIcon className="icon-cart" sx={{ fontSize: '30px' }} />
        </div>
      </div>
    </header>
  );
};

export default Header;
