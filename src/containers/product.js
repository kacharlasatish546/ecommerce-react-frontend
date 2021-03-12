import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getSpecificProduct } from '../actions/products'

const Product = (props) => {
    useEffect(() => {
        props.getSpecificProduct(localStorage.getItem("currentProductId"));
    },[])

    return (
        <React.Fragment>    
            <div className="container mb-4">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mt-4">
                        <div className="card shadow">
                            <div className="card-body text-center">
                                <h3 className="text-warning">SALE 50% OFF</h3>
                                <img className="card-img-top" src={props.currentProduct.product_image} alt="" />
                                <div className="text-warning">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="far fa-star"></i>
                                </div>
                                <NavLink className="text-reset" to="#"><h3 className="card-title display-4">{props.currentProduct.product_name}</h3></NavLink>
                                <h6>Price: {props.currentProduct.price}</h6>
                                <NavLink className="btn btn-dark my-2" to="#" role="button">Add to Cart</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

function mapStateToProps(appState) {
    return { currentProduct: appState.currentProduct }
}

function mapDispatchToProps(dispatch){
return bindActionCreators({getSpecificProduct},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);