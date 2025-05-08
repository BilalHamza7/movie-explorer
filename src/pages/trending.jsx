import React from 'react'
import getTrendingMovies from '../api/getTrendingMovies';

const Trending = () => {

  const getPopularMovies = async () => {
    const response = getTrendingMovies();
    console.log(response);
  };

  return (
    <div>
      <p>Trending</p>
      <button onClick={() => getPopularMovies()}>Get Movies
      </button>
    </div>
  )
}

export default Trending;