import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";

import Home from '../Home'
import Cart from '../Cart'
import Details from '../Details'
import Error from '../Error'

import searchContext from '../../context/searchContext'

const Main = () => {

  const {search, setSearch} = useContext(searchContext)

  return (
    <main className="main">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
        <Route path="/game/:game" component={Details} exact />
        <Route path="*" component={Error} exact />
      </Switch>
    </main>
  )
};

export default Main;
