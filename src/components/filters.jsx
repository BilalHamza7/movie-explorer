import { Autocomplete, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';

const Filter = ({ genres, selectedGenre, handleSelectedGenre, selectedReleaseYear, handleSelectedReleaseYear, handleSelectedReleaseDateGreaterThan, handleSelectedReleaseDateLessThan, selectedRating, handleSelectedRating }) => {

  // search bar
  const [year, setYear] = useState();

  // handles year filter to make the date range
  const handleYearChange = (val) => {
    setYear(val);

    if (val === '2025') return handleSelectedReleaseYear('2025');
    if (val === '2024') return handleSelectedReleaseYear('2024');

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
      handleSelectedReleaseDateGreaterThan(ranges[val][0]);
      handleSelectedReleaseDateLessThan(ranges[val][1]);
      return;
    }

    return;
  };

  return (
    <div className='w-full'>
      <Autocomplete
        id="search-movies"
        freeSolo
        // options={top100Films.map((option) => option.title)}
        options={['1', '2', '3', '4', '54', 'bilal']}
        renderInput={(params) => <TextField {...params} label="Search Movies" />}
      />
      <div className="flex gap-5 mt-6">

        {/* Genre filter */}
        <FormControl fullWidth >
          <InputLabel id="genre-label">Genre</InputLabel>
          <Select
            labelId="genre-label"
            value={selectedGenre}
            label="Genre"
            onChange={(e) => handleSelectedGenre(e.target.value)}
          >
            <MenuItem value=''><em>All</em></MenuItem>
            {
              genres?.map((item) =>
                <MenuItem key={item.id} value={item.name}>
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
            <MenuItem value=""><em>All</em></MenuItem>
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
            onChange={(e) => handleSelectedRating(e.target.value)}
          >
            <MenuItem value=""><em>All</em></MenuItem>
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