import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './productsReducer';

const reducer = {
    products: productsReducer,
}

export const ConfigureStore = () => {
    const store = configureStore({
        reducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware() // .concat(logger)
    });
    return store;
}