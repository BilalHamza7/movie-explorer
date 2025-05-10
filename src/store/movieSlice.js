import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    trendingMovies: [],
    pageNumber: 0,
    searchResult: []
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
        },
        setSearchResult: (state, action) => {
            state.searchResult = action.payload;
        }
    }
});

export const { setMovies, setTrendingMovies, setPageNumber, setSearchResult } = movieSlice.actions;
export default movieSlice.reducer;