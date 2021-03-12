import React from 'react'
import { NavLink } from 'react-router-dom'
import ProductsList from './ProductsList'

export const Home =()=>{
    return(
        <React.Fragment>
            <h1>This is Home Page Please <NavLink to='/login'>Login</NavLink> to view Products</h1>
        </React.Fragment>
    )
}