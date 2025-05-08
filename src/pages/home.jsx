import React from 'react'
import { useNavigate } from 'react-router-dom';
import MovieGrid from '../components/movieGrid';

const Home = () => {

  const navigate = useNavigate();

  return (
    <div>
      <MovieGrid />
    </div>
  )
}

export default Home;
