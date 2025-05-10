import React from 'react'
import { Grid } from '@mui/material';
import MovieCard from './movieCard';

const MovieGrid = ({ movies }) => {

    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 9, md: 16 }} sx={{ width: '100%', marginTop: 4 }}>
            {movies.map((movie, index) => (
                <Grid key={index} size={{ xs: 2, sm: 3, md: 4 }}>
                    <MovieCard movie={movie} />
                </Grid>
            ))}
        </Grid>
    )
}

export default MovieGrid;