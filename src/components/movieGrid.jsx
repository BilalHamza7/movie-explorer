import React, { useEffect, useState } from 'react'
import getAllMovies from '../api/getAllMovies';
import getGenres from '../api/getGenres';
import Filter from './filters'
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';

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
                        <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <CardActionArea sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <CardMedia
                                    component="img"
                                    height="160"
                                    image={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                                    alt={movie.original_title}
                                    sx={{ objectFit: 'cover', width: '100%' }}
                                />
                                <CardContent sx={{ flexGrow: 1, p: 2, width: '100%' }}>

                                    {/* Movie Title */}
                                    <Typography
                                        variant="h6"
                                        component="div"
                                        sx={{ fontSize: { xs: 16, md: 20 }, fontWeight: 600 }}
                                    >
                                        {movie.original_title}
                                    </Typography>

                                    {/* Movie Release Year and Rating */}
                                    <Typography
                                        variant="h6"
                                        component="div"
                                        sx={{ fontSize: { xs: 14, md: 16 }, fontWeight: 400 }}
                                    >
                                        {new Date(movie.release_date).getFullYear()}
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        component="div"
                                        sx={{ fontSize: { xs: 14, md: 16 }, fontWeight: 400 }}
                                    >
                                        {movie.vote_average.toFixed(1)}
                                    </Typography>

                                    {/* <Typography
                                        variant="body2"
                                        sx={{
                                            color: 'text.secondary',
                                            fontSize: { xs: 12, md: 14 },
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            display: '-webkit-box',
                                            WebkitLineClamp: 3,
                                            WebkitBoxOrient: 'vertical',
                                        }}
                                    >
                                        {movie.overview}
                                    </Typography> */}
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <p>Movies</p>
        </div >
    )
}

export default MovieGrid;