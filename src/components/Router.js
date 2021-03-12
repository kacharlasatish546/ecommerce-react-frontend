import React, { useEffect } from 'react';
import { HashRouter, NavLink, Route } from 'react-router-dom';
import { Home } from '../containers/home';
import Login from '../containers/login';
import Product from '../containers/Product';
import ProductsList from '../containers/ProductsList';
import Register from '../containers/register';

const Router = () => {

    var token = sessionStorage.getItem("token");
    useEffect(() => {
        token = sessionStorage.getItem("token")
    }, [])

    return (
        <React.Fragment>
            <HashRouter>

                <nav>
                    <div className="container">
                        <div className="row">
                            <div className="span12">
                                <div className="head">
                                    <div className="row-fluid">
                                        <div className="span12">
                                            <div className="span6">
                                                <h1 className="muted">Company Name</h1>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="navbar">
                                        <div className="navbar-inner">
                                            <div className="container">
                                                <ul className="nav">

                                                    <li><NavLink to="">Home</NavLink></li>
                                                    <li><NavLink to="/login">Login</NavLink></li>
                                                    <li><NavLink to="/register">Register</NavLink></li>
                                                    <li><NavLink to="/productsList">Products</NavLink></li>
                                                    <li><NavLink to="/register">Contact Us</NavLink></li>
                                                    <li><NavLink to="/register">Careers</NavLink></li>
                                                    <li><NavLink to="/login">Logout</NavLink></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <Route path="/" exact component={Home}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/register" component={Register}></Route>
                <Route path="/product" component={Product}></Route>
                <Route path="/productsList" component={ProductsList}></Route>
            </HashRouter>
        </React.Fragment>
    )
}



export default Router;