import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../reducers/reducers'

const store = configureStore({
    reducer: counterReducer,
});

export default store;