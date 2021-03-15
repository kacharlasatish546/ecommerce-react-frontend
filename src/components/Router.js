import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { HashRouter, NavLink, Route } from 'react-router-dom';
import AddProduct from '../containers/addProduct';
import { Home } from '../containers/home';
import Login from '../containers/login';
import Product from '../containers/Product';
import ProductsList from '../containers/ProductsList';
import Register from '../containers/register';
import Careers from './careers';
import ContactUs from './contactus';
import Logout from './logout';

const Router = (props) => {

    var token = sessionStorage.getItem("token");
    useEffect(() => {
        token = sessionStorage.getItem("token")
    }, [])

    console.log("Props in Router", props)

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
                                                <h1 className="muted">Welcome {sessionStorage.getItem("username")}</h1>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="navbar">
                                        <div className="navbar-inner">
                                            <div className="container">
                                                <ul className="nav">

                                                    <li><NavLink to="">Home</NavLink></li>
                                                    {(!sessionStorage.getItem("token")) ? <li><NavLink to="/login">Login</NavLink></li> : null}
                                                    {(!sessionStorage.getItem("token")) ? <li><NavLink to="/register">Register</NavLink></li> : null}
                                                    <li><NavLink to="/productsList">Products</NavLink></li>
                                                    <li><NavLink to="/contactus">Contact Us</NavLink></li>
                                                    <li><NavLink to="/careers">Careers</NavLink></li>
                                                    <li><NavLink to="/addproduct">Add Product</NavLink></li>
                                                    {(sessionStorage.getItem("token")) ? <li><NavLink to="/logout">Logout</NavLink></li> : null}

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
                <Route path="/addproduct" component={AddProduct}></Route>
                <Route path="/contactus" component={ContactUs}></Route>
                <Route path="/careers" component={Careers}></Route>
                <Route path="/logout" component={Logout}></Route>
            </HashRouter>
        </React.Fragment>
    )
}



function mapStateToProps(applicationState) {

    console.log('applicationState', applicationState);

    return { isLoggedIn: applicationState };

}


export default connect(mapStateToProps, "")(Router);