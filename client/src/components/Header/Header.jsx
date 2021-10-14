import React, { useContext, useState } from "react";
import { Link, Redirect } from 'react-router-dom'

import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

import searchContext from '../../context/searchContext'
import cartContext from '../../context/cartContext'

// Image
import logo from '../../assets/img/logo-now-gaming.png'

const Header = () => {

  const { search, setSearch } = useContext(searchContext)
  const { cart, setCart, subtractAmountInCart, setCartAndCheck } = useContext(cartContext)

  const [redirect, setRedirect] = useState(false)
  const [previewCart, setPreviewCart] = useState(false)

  const classNamePreviewCart = previewCart === false ? 'no-display' : ''
  console.log(classNamePreviewCart);

  const handleRedirect = () => {
    setRedirect(!redirect)
  }

  return (
    <header className="header">
      <div className="header--container">
        <Link to="/">
          <img src={logo} alt="logo now gaming" />
        </Link>
        <div className="header--container-input">
          <input placeholder="Far Cry 6, Steam, Ubisoft..." type="text" onChange={({ target }) => {
            setSearch(target.value)
            handleRedirect()
          }
          }
          />
          <div className="conteiner-search-icon">
            <SearchIcon className="search-icon" />
          </div>
        </div>
        <div className="header--container-cart">
          <Link className="cart-link" to="/cart">Cart</Link>
          {cart.length > 0
            ? <span className="amount-cart">{cart.map(game => game.amount).reduce((a, b) => a + b)}</span>
            : null
          }
          <ShoppingCartIcon className="icon-cart" sx={{ fontSize: '30px' }} onClick={() => setPreviewCart(!previewCart)}/>
          <div className={`preview-cart ${classNamePreviewCart}`}>
            {cart.map(game => {
              return (
                <div className="product">
                  <img src={game.image} alt={game.title} />
                  <p className="product-title">{game.title}</p>
                  <div className="conteiner-amount">
                    <RemoveCircleOutlineOutlinedIcon className="add-minus-icons" onClick={() => subtractAmountInCart(game)} />
                    <span>{game.amount}</span>
                    <AddCircleOutlineOutlinedIcon className="add-minus-icons" onClick={() => setCartAndCheck(game)} />
                  </div>
                </div>
              )
            })}
            <Link to="/cart"><button>Ver carrito</button></Link>
          </div>
        </div>
      </div>

      {redirect
        ? <Redirect to="/" />
        : null
      }

    </header>
  );
};

export default Header;
