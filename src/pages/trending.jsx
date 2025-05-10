import React, { useEffect } from 'react'
import getTrendingMovies from '../api/getTrendingMovies';
import MovieGrid from '../components/movieGrid';
import { useDispatch, useSelector } from 'react-redux';
import { setTrendingMovies } from '../store/movieSlice';

const Trending = () => {

  const dispatch = useDispatch();
  const { trendingMovies } = useSelector((state) => state.movies);

  useEffect(() => {
    const getPopularMovies = async () => {
      const response = await getTrendingMovies();
      console.log(response);
      dispatch(setTrendingMovies(response.results));
    };
    getPopularMovies();
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-[#CCC9DC]">
      <p className='text-2xl md:text-3xl'>Movies Trending This Week!</p>
      <MovieGrid movies={trendingMovies} />
    </div>
  )
}

export default Trending;