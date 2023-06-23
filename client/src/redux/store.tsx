import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './productsReducer';

const reducer = {
    products: productsReducer,
}

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware() //.concat(logger)
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
