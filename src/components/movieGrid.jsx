import React, { useEffect, useState } from 'react'
import getAllMovies from '../api/getAllMovies';
import getGenres from '../api/getGenres';
import Filter from './filters'
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import MovieCard from './movieCard';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies, setPageNumber } from '../store/movieSlice';
import { setGenreList } from '../store/filterSlice';

const MovieGrid = () => {

    // initialize filters and pass to the api

    // get all movies and display using state

    // change in filter updates the movie state to be displayed

    // count page number as a state and increment number before calling page 2 of the movies and extend
    const dispatch = useDispatch();
    const { movies, pageNumber } = useSelector((state) => state.movies);
    const { genreList, selectedReleaseYear, selectedReleaseDateGte, selectedReleaseDateLte, selectedRating, selectedGenre } = useSelector((state) => state.filters);

    useEffect(() => {
        const getMovies = async () => {
            const response = await getAllMovies({ pageNumber, selectedReleaseYear, selectedReleaseDateGte, selectedReleaseDateLte, selectedRating, selectedGenre });
            console.log(response);
            dispatch(setMovies(response.results));
            dispatch(setPageNumber(response.page));
        };

        const getAllGenres = async () => {
            const response = await getGenres();
            console.log(response);
            dispatch(setGenreList(response.genres));
        }

        getMovies();
        getAllGenres();
    }, []);

    return (
        <div className="flex flex-col items-center min-h-screen p-6 bg-[#CCC9DC]">
            <Filter />
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 9, md: 16 }} sx={{ width: '100%', marginTop: 4 }}>
                {movies.map((movie, index) => (
                    <Grid key={index} size={{ xs: 2, sm: 3, md: 4 }}>
                        <MovieCard movie={movie} genreList={genreList} />
                    </Grid>
                ))}
            </Grid>
            <div>
                
            </div>
        </div >
    )
}

export default MovieGrid;