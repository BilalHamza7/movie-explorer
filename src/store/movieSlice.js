import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    trendingMovies: [],
    pageNumber: 0
};

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload;
        },
        setTrendingMovies: (state, action) => {
            state.trendingMovies = action.payload;
        },
        setPageNumber: (state, action) => {
            state.pageNumber = action.payload;
        }
    }
});

export const { setMovies, setTrendingMovies, setPageNumber } = movieSlice.actions;
export default movieSlice.reducer;