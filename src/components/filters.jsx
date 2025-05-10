import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Autocomplete, CardMedia, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

import { setGenre, setRating, setReleaseDateRange, setReleaseYear } from '../store/filterSlice';
import getAllMovies from '../api/getAllMovies';
import { setMovies, setPageNumber, setSearchResult } from '../store/movieSlice';
import getMovieBySearch from '../api/getMovieBySearch';

const Filter = () => {

  // search bar
  const [year, setYear] = useState('');

  const dispatch = useDispatch();
  const { genreList, selectedReleaseYear, selectedReleaseDateGte, selectedReleaseDateLte, selectedGenre, selectedRating } = useSelector((state) => state.filters);
  const { movies, pageNumber, searchResult } = useSelector((state) => state.movies);

  // handles year filter to make the date range
  const handleYearChange = (val) => {
    setYear(val);

    if (val === '2025' || val === '2024') {
      dispatch(setReleaseYear(val));
      return;
    }

    const ranges = {
      '2020-2025': ['2020-01-01', '2025-12-31'],
      '2010-2025': ['2010-01-01', '2025-12-31'],
      '2010-2019': ['2010-01-01', '2019-12-31'],
      '2000-2009': ['2000-01-01', '2009-12-31'],
      '1990-1999': ['1990-01-01', '1999-12-31'],
      '1980-1989': ['1980-01-01', '1989-12-31'],
      '1970-1979': ['1970-01-01', '1979-12-31'],
      '1950-1969': ['1950-01-01', '1969-12-31'],
      '1900-1949': ['1900-01-01', '1949-12-31'],
    };

    if (ranges[val]) {
      dispatch(setReleaseYear(''));
      dispatch(setReleaseDateRange({ gte: ranges[val][0], lte: ranges[val][1] }));
      return;
    }
    dispatch(setReleaseYear(''));
    dispatch(setReleaseDateRange({ gte: '', lte: '' }));
  };

  const handleSearch = async (value) => {
    if (value.trim() !== '') {
      const response = await getMovieBySearch(value);
      const filtered = response.results.filter(movie => movie.original_language === 'en');
      dispatch(setSearchResult(filtered));
      dispatch(setMovies(filtered));
    } else {
      dispatch(setSearchResult([]));
      getMovies();
    };
  }

  const getMovies = async () => {
    const response = await getAllMovies({ pageNumber, selectedReleaseYear, selectedReleaseDateGte, selectedReleaseDateLte, selectedRating, selectedGenre });
    dispatch(setMovies(response.results));
  };

  return (
    <div className='w-full mt-5'>
      <Autocomplete
        id="search-movies"
        freeSolo
        options={searchResult}
        getOptionLabel={(option) => option.original_title || ''}
        renderOption={(props, option) => (
          <li {...props} key={option.id} className='flex gap-2 p-1 items-center w-full bg-[#D6D6D6]'>
            <img
              src={`https://image.tmdb.org/t/p/w92${option.backdrop_path}`}
              alt={option.original_title}
              className='w-36 md:w-52 h-20 md:h-28 object-cover'
            />
            <span>{option.original_title}</span>
          </li>
        )}
        onInputChange={(event, value, reason) => {
          handleSearch(value);
        }}
        onChange={(event, value) => {
          if (value && value.original_title) {
            handleSearch(value.original_title);
          }
        }} renderInput={(params) => <TextField {...params} label="Search Movies" />}
      />
      <div className="flex gap-5 mt-6">

        {/* Genre filter */}
        <FormControl fullWidth >
          <InputLabel id="genre-label">Genre</InputLabel>
          <Select
            labelId="genre-label"
            value={selectedGenre}
            label="Genre"
            onChange={(e) => dispatch(setGenre(e.target.value))}
          >
            <MenuItem value=''>All</MenuItem>
            {
              genreList?.map((item) =>
                <MenuItem key={item.id} value={item.id}>
                  {item.name}
                </MenuItem>
              )
            }
          </Select>
        </FormControl>

        {/* Year filter */}
        <FormControl fullWidth >
          <InputLabel id="year-label">Year</InputLabel>
          <Select
            labelId="year-label"
            value={year}
            label="Year"
            onChange={(e) => handleYearChange(e.target.value)}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="2025">2025</MenuItem>
            <MenuItem value="2024">2024</MenuItem>
            <MenuItem value="2020-2025">2020-now</MenuItem>
            <MenuItem value="2010-2025">2010-now</MenuItem>
            <MenuItem value="2010-2019">2010-2019</MenuItem>
            <MenuItem value="2000-2009">2000-2009</MenuItem>
            <MenuItem value="1990-1999">1990-1999</MenuItem>
            <MenuItem value="1980-1989">1980-1989</MenuItem>
            <MenuItem value="1970-1979">1970-1979</MenuItem>
            <MenuItem value="1950-1969">1950-1969</MenuItem>
            <MenuItem value="1900-1949">1900-1949</MenuItem>
          </Select>
        </FormControl>

        {/* Rating filter */}
        <FormControl fullWidth >
          <InputLabel id="rating-label">Rating</InputLabel>
          <Select
            labelId="rating-label"
            value={selectedRating}
            label="Rating"
            onChange={(e) => dispatch(setRating(e.target.value))}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="9">9+</MenuItem>
            <MenuItem value="8">8+</MenuItem>
            <MenuItem value="7">7+</MenuItem>
            <MenuItem value="6">6+</MenuItem>
            <MenuItem value="5">5+</MenuItem>
            <MenuItem value="4">4+</MenuItem>
            <MenuItem value="3">3+</MenuItem>
            <MenuItem value="2">2+</MenuItem>
            <MenuItem value="1">1+</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div >
  )
}

export default Filter;