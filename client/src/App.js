import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import axios from 'axios';

// Components
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

// Context
import searchContext from './context/searchContext'
import gamesContext from './context/gamesContext'
import cartContext from './context/cartContext'

import data from './data'

// Styles
import './styles/styles.scss'


function App() {

  const [search, setSearch] = useState('')
  const [games, setGames] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    async function getDataGames(){
      const {data} = await axios.get('http://localhost:3002/api/games')
      console.log('peticicion');
      setGames(data)
    }
    getDataGames()
  }, [])

  const setCartAndCheck = (objGame) => {

    let indexElement

    cart.forEach((el, i) => { if (el.title === objGame.title) { indexElement = i } });

    if (indexElement === undefined) {
      console.log('hola aqui entra');
      objGame.amount = 1
      setCart([...cart, objGame])
    } else {
      let gameObjInCart = [...cart]
      gameObjInCart[indexElement].amount += 1
      setCart(gameObjInCart)
      console.log(gameObjInCart[indexElement]);
    }
  }

  const subtractAmountInCart = (objGame) => {

    let indexElement

    cart.forEach((el, i) => { if (el.title === objGame.title) { indexElement = i } });

    let gameObjInCart = [...cart]
    gameObjInCart[indexElement].amount -= 1
    setCart(gameObjInCart)
    console.log(gameObjInCart[indexElement]);

    if (cart[indexElement].amount === 0) {
      const newCart = cart.filter((game, i) => i !== indexElement)
      setCart(newCart)
    }
  }

  const removeFromCart = (objGame) => {

    let indexElement

    cart.forEach((el, i) => { if (el.title === objGame.title) { indexElement = i } });

    const newCart = cart.filter((game, i) => i !== indexElement)
    setCart(newCart)
  }

  return (
    <div className="app">
      <searchContext.Provider value={{ search, setSearch }}>
        <gamesContext.Provider value={{ games, setGames }}>
          <cartContext.Provider value={{ cart, setCart, removeFromCart, setCartAndCheck, subtractAmountInCart }}>
            <BrowserRouter>
              <Header />
              <Main />
            </BrowserRouter>
            <Footer />
          </cartContext.Provider>
        </gamesContext.Provider>
      </searchContext.Provider>
    </div>
  );
}

export default App;
