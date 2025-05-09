import { Card, CardActionArea, CardContent, CardMedia, Chip, Typography } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';

const MovieCard = ({ movie }) => {

    const { genreList } = useSelector((state) => state.filters);

    const genreNames = movie.genre_ids
        .map((id) => genreList.find((g) => g.id === id)?.name)
        .filter(Boolean); // removes undefined in case of no match


    return (
        <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <CardActionArea color='#000' sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
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

                    <div className="flex items-center justify-between mt-1">

                        {/* Movie Release Year */}
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ fontSize: { xs: 14, md: 16 }, fontWeight: 400 }}
                        >
                            {new Date(movie.release_date).getFullYear()}
                        </Typography>

                        {/* Movie Rating */}
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ fontSize: { xs: 14, md: 16 }, fontWeight: 400 }}
                        >
                            {movie.vote_average.toFixed(1)} &#11088;
                        </Typography>
                    </div>

                    <div className="flex gap-1 flex-wrap mt-2">
                        {
                            genreNames.map((genre) =>
                                <Chip key={genre} label={genre} size='small' sx={{ fontSize: 10 }} />
                            )
                        }
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default MovieCard;