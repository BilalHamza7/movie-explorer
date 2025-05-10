import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    trendingMovies: [],
    pageNumber: 1,
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
        setPageIncrement: (state) => {
            state.pageNumber += 1;
        },
        setPageDecrement: (state) => {
            state.pageNumber = Math.max(0, state.pageNumber - 1); // prevent negative page numbers
        },
        setPageReset: (state) => {
            state.pageNumber = 1; // reset page number to 1
        },
        setSearchResult: (state, action) => {
            state.searchResult = action.payload;
        }
    }
});

export const { setMovies, setTrendingMovies, setPageNumber, setSearchResult, setPageIncrement, setPageDecrement, setPageReset } = movieSlice.actions;
export default movieSlice.reducer;