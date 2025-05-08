import React from 'react'
import getAllMovies from '../api/getAllMovies';
import Filter from './filters'
import { Grid } from '@mui/material';

const MovieGrid = () => {

    // initialize filters and pass to the api

    const getMovies = async () => {
        const response = getAllMovies();
        console.log(response);
    };

    return (
        <div className="flex flex-col items-center min-h-screen p-6 bg-[#CCC9DC]">
            <Filter />
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ width: '100%' }}>
                {Array.from(Array(6)).map((_, index) => (
                    <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
                        <div className='bg-gray-300 w-full'>{index + 1}</div>
                    </Grid>
                ))}
            </Grid>
            <p>Movies</p>
            <button onClick={() => getMovies()}>Get Movies
            </button>
        </div>
    )
}

export default MovieGrid;