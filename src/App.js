import { useEffect, useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavorites from './components/AddFavorites';

function App() {
  const [movies, setMovies] =  useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState('avatar');

  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=4f0092cc`

    const response = await fetch(url);
    const responseJson = await response.json();
    
    console.log(responseJson);
    if(responseJson.Search) {
      setMovies(responseJson.Search);
    }
    setMovies(responseJson.Search);
  }

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue])

  const addFavouritesMovie = (movie) => {
    const newFavourites = [...favourites, movie];
    setFavourites(newFavouriteList);
  }
  return (
    <div className='container-fluid'>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className="row">
        <MovieList 
          movies={movies} 
          handleFavouritesClick = {addFavouritesMovie}
          favouriteComponent = {AddFavorites} 
        />
      </div>
    </div>
  );
}

export default App;
