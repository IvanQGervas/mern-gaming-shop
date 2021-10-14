import React, { useState, useContext } from "react";
import ReactPaginate from 'react-paginate';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

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
  //


  // Paginación
  const [pageNumber, setPageNumber] = useState(0)

  const gamesForPage = 12
  const pagesVisited = pageNumber * gamesForPage
  const pageCount = Math.ceil(games.length / gamesForPage)

  const displayGamesPagination = games.slice(pagesVisited, pagesVisited + gamesForPage).map((val, key) => <Card key={key} game={val} />)

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }
  //


  // Busqueda por nombre o plataforma
  const displayGamesSearch = games.filter((val) => {
  if (val.title.toLowerCase().includes(search.toLowerCase()) || val.platform[0].platform.toLowerCase().includes(search.toLowerCase())) {
      return val
    }
  }).map((val, key) => <Card key={key} game={val} />);
  //



  // Boton alfabético
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
      if (prev.rating < next.rating) {
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
    <div className="home">
      <div className="home--container">
        <h1>¡Tus juegos favoritos al mejor precio!</h1>
        <h2>Compra tus claves digitales y recibelas al instante.</h2>

        <div className="container-filter">
          {/* <p>Filtros</p> */}

          {
            alphabeticalOrder === 0
              ? <button className="button-disabled" onClick={() => handleClickAlphabeticalOrderDisabled(1)}>Ordenar A - Z<KeyboardArrowDownIcon className="arrow-down" /></button>
              : alphabeticalOrder === 1 ? <button className="button-activated" onClick={() => handleClickAlphabeticalOrderStateOne(2)}>Ordenar Z - A<KeyboardArrowUpIcon className="arrow-up" /></button>
                : <button className="button-activated" onClick={() => handleClickAlphabeticalOrderStateTwo(1)}>Ordenar A - Z<KeyboardArrowDownIcon className="arrow-down" /></button>
          }

          {
            priceOrder === 0
              ? <button className="button-disabled" onClick={() => handleClickPriceOrderDisabled(1)}>Precio abajo<KeyboardArrowDownIcon className="arrow-down" /></button>
              : priceOrder === 1 ? <button className="button-activated" onClick={() => handleClickPriceOrderStateOne(2)}>Precio arriba<KeyboardArrowUpIcon className="arrow-up" /></button>
                : <button className="button-activated" onClick={() => handleClickPriceOrderStateTwo(1)}>Precio abajo<KeyboardArrowDownIcon className="arrow-down" /></button>
          }

          {
            assessmentOrder === 0
              ? <button className="button-disabled" onClick={() => handleClickAssessmentOrderDisabled(1)}>Valoración arriba<KeyboardArrowUpIcon className="arrow-down" /></button>
              : assessmentOrder === 1 ? <button className="button-activated" onClick={() => handleClickAssessmentOrderStateOne(2)}>Valoración abajo<KeyboardArrowDownIcon className="arrow-up" /></button>
                : <button className="button-activated" onClick={() => handleClickAssessmentOrderStateTwo(1)}>Valoración arriba<KeyboardArrowUpIcon className="arrow-down" /></button>
          }

        </div>

        <div className="container-products">
          {search === ''
            ? (
              <>
                {displayGamesPagination}
                <ReactPaginate
                  previousLabel={"anterior"}
                  nextLabel={"siguiente"}
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName={"conteiner-pagination"}
                  previousLinkClassName={"previous-pagination"}
                  nextClassName={"next-pagination"}
                  disabledClassName={"disabled-next-previus"}
                  activeClassName={"page-active"}
                  pageRangeDisplayed={4}
                  marginPagesDisplayed={1}
                />
              </>
            )
            : displayGamesSearch
          }
        </div>

      </div>
    </div>
  );
};

export default Home;
