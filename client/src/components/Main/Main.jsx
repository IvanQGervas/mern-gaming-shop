import React, { useEffect, useState } from "react";

import data from '../../data'

const Main = () => {

  const [games, setGames] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {

    console.log('peticicion');
    setGames(data)
    // const getProducts = async function() {

    // }

  }, [])

  const verlo = () => {

    const numeros = games.map((e) => e.platform)
    const unicos = [];

    for (var i = 0; i < numeros.length; i++) {

      const elemento = numeros[i];

      if (!unicos.includes(numeros[i])) {
        unicos.push(elemento);
      }
    }

    console.log(unicos);
  }

  return (
    <main>

      {search
        ? 'busuqeda'
        : 'Portada'
      }



      {verlo()}

      { }
      <form>
        <input type="text" value={search} onChange={({ target }) => setSearch(target.value)} />
      </form>
      {games.filter((val) => {
        if (search === '') {
          return val
        } else if (val.title.toLowerCase().includes(search.toLowerCase()) || val.platform.toLowerCase().includes(search.toLowerCase())) {
          return val
        }
      })
        .map((val, key) => {
          return (
            <div key={key}>
              <img src={val.image} alt={val.title} />
              <h3>{val.title}</h3>
              <span>{val.price}</span>
              <span>{val.platform}</span>
            </div>
          )
        })}
    </main>
  )
};

export default Main;
