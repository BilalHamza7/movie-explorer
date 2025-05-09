import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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

export const { setGenre, setReleaseYear, setReleaseDateRange, setRating } = filterSlice.actions;
export default filterSlice.reducer;