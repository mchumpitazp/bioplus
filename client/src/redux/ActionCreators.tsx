import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../baseUrl';

export const fetchProducts = () => (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
    dispatch(productsLoading());

    return fetch(baseUrl + '/products')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                // error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(products => dispatch(addProducts(products)))
        .catch(error => dispatch(productsFailed(error.message)));
};

export const productsLoading = () => ({
    type: ActionTypes.PRODUCTS_LOADING
});

export const productsFailed = (errmess: any) => ({
    type: ActionTypes.PRODUCTS_FAILED,
    payload: errmess
});

export const addProducts = (products: any) => ({
    type: ActionTypes.ADD_PRODUCTS,
    payload: products
});