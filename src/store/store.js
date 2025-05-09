import { configureStore } from "@reduxjs/toolkit";
import filterReducer from './filterSlice';
import movieReducer from './movieSlice';

const store = configureStore({
    reducer: {
        filters: filterReducer,
        movies: movieReducer,
    }
})

export default store;