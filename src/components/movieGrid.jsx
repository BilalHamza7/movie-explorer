import React from 'react'
import getAllMovies from '../api/getAllMovies';
import Filter from './filter'

const MovieGrid = () => {

    // initialize filters and pass to the api

    const getMovies = async () => {
        const response = getAllMovies();
        console.log(response);
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-[#CCC9DC]">
            <p>Movies</p>
            <Filter />
            <button onClick={() => getMovies()}>Get Movies
            </button>
        </div>
    )
}

export default MovieGrid;