import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    genreList: [],
    selectedGenre: '',
    selectedReleaseYear: '',
    selectedReleaseDateGte: '',
    selectedReleaseDateLte: '',
    selectedRating: ''
};

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setGenreList: (state, action) => {
            state.genreList = action.payload;
        },
        setGenre: (state, action) => {
            state.selectedGenre = action.payload;
        },
        setReleaseYear: (state, action) => {
            state.selectedReleaseYear = action.payload;
        },
        setReleaseDateRange: (state, action) => {
            state.selectedReleaseDateGte = action.payload.gte;
            state.selectedReleaseDateLte = action.payload.lte;
        },
        setRating: (state, action) => {
            state.selectedRating = action.payload;
        }
    }
});

export const { setGenreList, setGenre, setReleaseYear, setReleaseDateRange, setRating } = filterSlice.actions;
export default filterSlice.reducer;