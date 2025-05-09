import React, { useEffect, useState } from 'react'
import getAllMovies from '../api/getAllMovies';
import getGenres from '../api/getGenres';
import Filter from './filters'
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import MovieCard from './movieCard';

const MovieGrid = () => {

    // initialize filters and pass to the api

    // get all movies and display using state

    // change in filter updates the movie state to be displayed

    // count page number as a state and increment number before calling page 2 of the movies and extend
    const [allMovies, setAllMovies] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [genreList, setGenreList] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('');

    useEffect(() => {
        const getMovies = async () => {
            const response = await getAllMovies();
            console.log(response);
            setAllMovies(response.results);
            setPageNumber(response.page);
        };

        const getAllGenres = async () => {
            const response = await getGenres();
            console.log(response);
            setGenreList(response.genres);
        }

        getAllGenres();
        getMovies();
    }, []);

    return (
        <div className="flex flex-col items-center min-h-screen p-6 bg-[#CCC9DC]">
            <Filter genres={genreList} selectedGenre={selectedGenre} handleSelectedGenre={(value) => setSelectedGenre(value)} />
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 9, md: 16 }} sx={{ width: '100%', marginTop: 4 }}>
                {allMovies.map((movie, index) => (
                    <Grid key={index} size={{ xs: 2, sm: 3, md: 4 }}>
                        <MovieCard movie={movie} genreList={genreList} />
                    </Grid>
                ))}
            </Grid>
            <p>Movies</p>
        </div >
    )
}

export default MovieGrid;