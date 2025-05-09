import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    pageNumber: 0
};

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload;
        },
        setPageNumber: (state, action) => {
            state.pageNumber = action.payload;
        }
    }
});

export const { setMovies, setPageNumber } = movieSlice.actions;
export default movieSlice.reducer;