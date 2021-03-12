import axios from 'axios';

const BASE_URL = "http://localhost:10899/admin/"

export function getAllProducts() {
    console.log('All Products in Action');
    var promise = axios.get(`${BASE_URL}allProducts`)
    return {
        type: 'ALL_PRODUCTS',
        payload: promise
    }
}

export function getSpecificProduct(pid) {
    console.log('getSpecificProduct in Action', pid);
    var promise=axios.get(`${BASE_URL}product/${pid}`);
    return {
        type: 'CURRENT_PRODUCT',
        payload: promise
    }
}