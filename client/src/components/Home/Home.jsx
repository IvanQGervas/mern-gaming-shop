import React, { useState, useContext } from "react";
import ReactPaginate from 'react-paginate';

import Card from '../Card'

import searchContext from '../../context/searchContext'
import gamesContext from '../../context/gamesContext'


const Home = () => {

  const { search, setSearch } = useContext(searchContext)
  const { games, setGames } = useContext(gamesContext)

  // Estados de los botones de filtrado
  const [alphabeticalOrder, setAlphabeticalOrder] = useState(0) // 0 desactivado, 1 activado a-z, 2 activado z-a
  const [priceOrder, setPriceOrder] = useState(0) // 0 desactivado, 1 descendente, 2 ascendente
  const [assessmentOrder, setAssessmentOrder] = useState(0) // 0 desactivado, 1 descendente, 2 ascendente

  // Paginación
  const [pageNumber, setPageNumber] = useState(0)

  const gamesForPage = 10
  const pagesVisited = pageNumber * gamesForPage
  const pageCount = Math.ceil(games.length / gamesForPage)

  const displayGamesPagination = games.slice(pagesVisited, pagesVisited + gamesForPage).map((val, key) => <Card key={key} game={val} />)

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }
  //

  // Busqueda por nombre o plataforma
  const displayGamesSearch = games.filter((val) => {
    if (search === '') {
      return val
    } else if (val.title.toLowerCase().includes(search.toLowerCase()) || val.platform.toLowerCase().includes(search.toLowerCase())) {
      return val
    }
  }).map((val, key) => <Card key={key} game={val} />);
  //



  // Boton alfabetico
  const handleClickAlphabeticalOrderDisabled = (num) => {
    games.sort((prev, next) => {
      if (prev.title > next.title) {
        return 1
      } else if (prev.title < next.title) {
        return -1
      }
      return 0
    })
    setPriceOrder(0)
    setAssessmentOrder(0)
    setAlphabeticalOrder(num)
  }

  const handleClickAlphabeticalOrderStateOne = (num) => {
    games.sort((prev, next) => {
      if (prev.title < next.title) {
        return 1
      } else if (prev.title > next.title) {
        return -1
      }
      return 0
    })
    setAlphabeticalOrder(num)
  }

  const handleClickAlphabeticalOrderStateTwo = (num) => {
    games.sort((prev, next) => {
      if (prev.title > next.title) {
        return 1
      } else if (prev.title < next.title) {
        return -1
      }
      return 0
    })
    setAlphabeticalOrder(num)
  }
  //


  // Boton precio
  const handleClickPriceOrderDisabled = (num) => {
    games.sort((prev, next) => {
      if (prev.price > next.price) {
        return 1
      } else if (prev.price < next.price) {
        return -1
      }
      return 0
    })
    setAssessmentOrder(0)
    setAlphabeticalOrder(0)
    setPriceOrder(num)
  }

  const handleClickPriceOrderStateOne = (num) => {
    games.sort((prev, next) => {
      if (prev.price < next.price) {
        return 1
      } else if (prev.price > next.price) {
        return -1
      }
      return 0
    })
    setPriceOrder(num)
  }

  const handleClickPriceOrderStateTwo = (num) => {
    games.sort((prev, next) => {
      if (prev.price > next.price) {
        return 1
      } else if (prev.price < next.price) {
        return -1
      }
      return 0
    })
    setPriceOrder(num)
  }
  //


  // Boton valoración
  const handleClickAssessmentOrderDisabled = (num) => {
    games.sort((prev, next) => {
      if (prev.rating < next.rating ) {
        return 1
      } else if (prev.rating > next.rating) {
        return -1
      }
      return 0
    })
    setPriceOrder(0)
    setAlphabeticalOrder(0)
    setAssessmentOrder(num)
  }

  const handleClickAssessmentOrderStateOne = (num) => {
    games.sort((prev, next) => {
      if (prev.rating > next.rating) {
        return 1
      } else if (prev.rating < next.rating) {
        return -1
      }
      return 0
    })
    setAssessmentOrder(num)
  }

  const handleClickAssessmentOrderStateTwo = (num) => {
    games.sort((prev, next) => {
      if (prev.rating < next.rating) {
        return 1
      } else if (prev.rating > next.rating) {
        return -1
      }
      return 0
    })
    setAssessmentOrder(num)
  }
  //


  return (
    <>
      <h1>LOGO</h1>

      <p>Filtros</p>
      <div>

        {
          alphabeticalOrder === 0
            ? <button onClick={() => handleClickAlphabeticalOrderDisabled(1)}>Ordenar A - Z</button>
            : alphabeticalOrder === 1 ? <button onClick={() => handleClickAlphabeticalOrderStateOne(2)}>Ordenar Z - A</button>
              : <button onClick={() => handleClickAlphabeticalOrderStateTwo(1)}>Ordenar A - Z</button>
        }

        {
          priceOrder === 0
            ? <button onClick={() => handleClickPriceOrderDisabled(1)}>Precio abajo</button>
            : priceOrder === 1 ? <button onClick={() => handleClickPriceOrderStateOne(2)}>Precio arriba</button>
              : <button onClick={() => handleClickPriceOrderStateTwo(1)}>Precio abajo</button>
        }

        {
          assessmentOrder === 0
            ? <button onClick={() => handleClickAssessmentOrderDisabled(1)}>Valoración arriba</button>
            : assessmentOrder === 1 ? <button onClick={() => handleClickAssessmentOrderStateOne(2)}>Valoración abajo</button>
              : <button onClick={() => handleClickAssessmentOrderStateTwo(1)}>Valoración arriba</button>
        }

      </div>
      {search === ''
        ? (
          <>
            {displayGamesPagination}
            <ReactPaginate
              previousLabel={"anterior"}
              nextLabel={"siguiente"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"ESTILO"}
              previousLinkClassName={"esto nose q ue es"}
              nextClassName={"Estilos de todo y tal"}
              disabledClassName={"algo de desactivar clase"}
              activeClassName={"clase avtiva o nse"}
              pageRangeDisplayed={4}
              marginPagesDisplayed={1}
            />
          </>
        )
        : displayGamesSearch
      }
    </>
  );
};

export default Home;
