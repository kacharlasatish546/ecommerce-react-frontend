import React from 'react';
import { NavLink } from 'react-router-dom';

const ProductListItem = (props) => {

    const getProduct = () => {
        localStorage.setItem('currentProductId', props.product._id);
        props.history.push("/product");
    }

    return (
        <React.Fragment>
            <div className="container mb-4">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mt-4">
                        <div className="card shadow">
                            <div className="card-body text-center">
                                <h3 className="text-warning">SALE {props.product.offers}/- OFF</h3>
                                <img onClick={getProduct} className="card-img-top" src={props.product.product_image} alt="" />
                                <div className="text-warning">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="far fa-star"></i>
                                </div>
                                <NavLink className="text-reset" to="#"><h3 className="card-title display-4">{props.product.product_name}</h3></NavLink>
                                <h6>{props.product.price}</h6>
                                <NavLink className="btn btn-dark my-2" to="#" role="button">Add to Cart</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProductListItem;
