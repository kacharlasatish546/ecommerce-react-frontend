import axios from 'axios';
import AddProduct from '../containers/addProduct';

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

export function addProduct(products){
console.log("Add Product Action", products)
 var promise=axios.post(`${BASE_URL}addProduct/`,products);
return{
    type:"ADD_PRODUCT",
    payload:promise
}
}