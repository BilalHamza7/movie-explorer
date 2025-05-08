import { Autocomplete, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';

const Filter = () => {

  // search bar
  // search by genre, year and rating (vote_average)
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');
  const [rating, setRating] = useState('');

  return (
    <div className='w-full'>
      <Autocomplete
        id="search-movies"
        freeSolo
        // options={top100Films.map((option) => option.title)}
        options={[1, 2, 3, 4, 54, 'bilal']}
        renderInput={(params) => <TextField {...params} label="Search Movies" />}
      />
      <div className="flex gap-5 mt-6">
        <FormControl fullWidth >
          <InputLabel id="genre-label">Genre</InputLabel>
          <Select
            labelId="genre-label"
            value={genre}
            label="Genre"
            onChange={(e) => setGenre(e.target.value)}
          >
            <MenuItem value="Drama">Drama</MenuItem>
            <MenuItem value="Action">Action</MenuItem>
            <MenuItem value="Romance">Romance</MenuItem>
          </Select>
        </FormControl>

        {/* Year Select */}
        <FormControl fullWidth >
          <InputLabel id="year-label">Year</InputLabel>
          <Select
            labelId="year-label"
            value={year}
            label="Year"
            onChange={(e) => setYear(e.target.value)}
          >
            <MenuItem value="2023">2023</MenuItem>
            <MenuItem value="2022">2022</MenuItem>
            <MenuItem value="2021">2021</MenuItem>
          </Select>
        </FormControl>

        {/* Rating Select */}
        <FormControl fullWidth >
          <InputLabel id="rating-label">Rating</InputLabel>
          <Select
            labelId="rating-label"
            value={rating}
            label="Rating"
            onChange={(e) => setRating(e.target.value)}
          >
            <MenuItem value="PG">PG</MenuItem>
            <MenuItem value="PG-13">PG-13</MenuItem>
            <MenuItem value="R">R</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div >
  )
}

export default Filter;