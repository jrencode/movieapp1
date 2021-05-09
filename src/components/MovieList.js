import React from 'react'

export default function MovieList(props) {
  const FavouriteComponent = props.favouriteComponent;
  return (
    <>
      {props.movies.map((movie,index) => 
        <div className="image-container d-flex justify-content-center">
          <img  src={movie.Poster} alt="movie"></img>
          <div onClick={props.handleFavouritesClick} className="overlay d-flex align-items-center justify-content-center">
            <FavouriteComponent />
          </div>
        </div>
      )}
    </>
  )
}
