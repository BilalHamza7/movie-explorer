import React, { useEffect } from 'react'
import MovieGrid from '../components/movieGrid';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies, setPageNumber } from '../store/movieSlice';
import getGenres from '../api/getGenres';
import { setGenreList } from '../store/filterSlice';
import getAllMovies from '../api/getAllMovies';
import Filter from '../components/filters';

const Home = () => {

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
      <MovieGrid movies={movies} />
    </div>
  )
}

export default Home;
