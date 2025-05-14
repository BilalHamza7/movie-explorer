import React, { useEffect } from 'react'
import MovieGrid from '../components/movieGrid';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies, setPageReset } from '../store/movieSlice';
import getGenres from '../api/getGenres';
import { setGenreList } from '../store/filterSlice';
import getAllMovies from '../api/getAllMovies';
import Filter from '../components/filters';
import { setPageDecrement, setPageIncrement } from '../store/movieSlice';


const Home = () => {

  const dispatch = useDispatch();
  const { movies, pageNumber } = useSelector((state) => state.movies);
  const { selectedReleaseYear, selectedReleaseDateGte, selectedReleaseDateLte, selectedRating, selectedGenre } = useSelector((state) => state.filters);

  const getMovies = async () => {
    const response = await getAllMovies({ pageNumber, selectedReleaseYear, selectedReleaseDateGte, selectedReleaseDateLte, selectedRating, selectedGenre });
    console.log(response);
    dispatch(setMovies(response.results));
  };

  useEffect(() => {
    const getAllGenres = async () => {
      const response = await getGenres();
      console.log(response);
      dispatch(setGenreList(response.genres));
    }

    getMovies();
    getAllGenres();
  }, [selectedGenre, selectedRating, selectedReleaseYear, selectedReleaseDateGte, selectedReleaseDateLte, pageNumber]);

  useEffect(() => {
    dispatch(setPageReset());
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen p-6 gap-10 bg-[#CCC9DC]">
      <p className='text-3xl'>Explore Latest Movies!</p>
      <Filter />
      <MovieGrid movies={movies} />
      <div className="flex justify-between w-full">
        <p className="text-lg font-medium cursor-pointer" onClick={() => dispatch(setPageDecrement())}>Previous Page</p>
        <p className="text-lg font-medium">{pageNumber}</p>
        <p className="text-l  g font-medium cursor-pointer" onClick={() => dispatch(setPageIncrement())}>Next Page</p>
      </div>
    </div>
  )
}

export default Home;
