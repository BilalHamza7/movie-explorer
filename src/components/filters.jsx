import { Autocomplete, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';

const Filter = ({ genres, selectedGenre, handleSelectedGenre }) => {

  // search bar
  // search by genre, year and rating (vote_average)
  // const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');
  const [rating, setRating] = useState('');

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
            onChange={(e) => setYear(e.target.value)}
          >
            <MenuItem value="0"><em>All</em></MenuItem>
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
            value={rating}
            label="Rating"
            onChange={(e) => setRating(e.target.value)}
          >
            <MenuItem value=""><em>All</em></MenuItem>
            <MenuItem value="9+">9+</MenuItem>
            <MenuItem value="8+">8+</MenuItem>
            <MenuItem value="7+">7+</MenuItem>
            <MenuItem value="6+">6+</MenuItem>
            <MenuItem value="5+">5+</MenuItem>
            <MenuItem value="4+">4+</MenuItem>
            <MenuItem value="3+">3+</MenuItem>
            <MenuItem value="2+">2+</MenuItem>
            <MenuItem value="1+">1+</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div >
  )
}

export default Filter;