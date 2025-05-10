import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import getMovieDetails from '../api/getMovieDetails';
import { Chip } from '@mui/material';
import getCastDetails from '../api/getCastDetails';
import getTrailer from '../api/getTrailer';

const MovieDetails = () => {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const movieId = queryParams.get('id');

  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);
  const [key, setKey] = useState();

  const genreNames = movie?.genres?.map((genre) => genre.name) || [];

  useEffect(() => {
    const getMovieById = async () => {
      const response = await getMovieDetails(movieId);
      console.log("Details", response);
      setMovie(response);
    };

    const getMovieCast = async () => {
      const response = await getCastDetails(movieId);
      setCast(response.cast);
      console.log(response.cast);
    };

    const getMovieTrailer = async () => {
      const response = await getTrailer(movieId);
      const trailer = response.results.find(   // two types of videos are available
        (vid) => vid.type === "Trailer" && vid.site === "YouTube" // find the trailer type 
      );
      if (trailer) {
        setKey(trailer.key);
      }
    };

    getMovieById();
    getMovieTrailer();
    getMovieCast();
  }, [movieId]);

  return (
    <>
      <p className='text-3xl text-center mt-5'>Movie Details</p>
      <div className="flex flex-col md:flex-row p-5 gap-5">
        <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.original_title} className='w-full md:w-1/2 h-full' />

        <div className="flex flex-col gap-3 w-full">
          <p className='text-2xl font-bold'>{movie.original_title}</p>
          <p className='text-lg'>{movie.overview}</p>
          <div className="flex gap-1 flex-wrap mt-2">
            {
              genreNames.map((genre) => (
                < Chip key={genre} label={genre} size='small' sx={{ fontSize: { sm: 10, md: 16 } }} />
              ))
            }
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 p-5">
        <p className='text-xl font-semibold'>Cast:</p>
        <div className="flex gap-1 flex-wrap">
          {
            cast.map((cast) => <ul>
              <li key={cast.cast_id} className='italic font-light'>
                <span className='font-medium'>{cast.original_name}</span> as {cast.character}
              </li>
            </ul>)
          }
        </div>
        <div className="flex flex-col gap-3 w-full">
          <p className='text-xl font-semibold'>Trailer:</p>
          <iframe
            className="w-full h-64 md:w-1/2 md:h-full"
            src={`https://www.youtube.com/embed/${key}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  )
}

export default MovieDetails;