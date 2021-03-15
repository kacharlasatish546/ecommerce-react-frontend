import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllProducts } from '../actions/products'
import ProductListItem from './productListItem';

const ProductsList = (props) => {

    useEffect(() => {
            props.getAllProducts();
    }, [])

    const renderProductsList = () => {
        if (props.products.length > 0) {
            let allProducts = props.products.map((product) => {
                return <ProductListItem history={props.history} key={product.pid} product={product}></ProductListItem>
            })
            return allProducts;
        } else {
            return <li>No Products! Please wait, the products are loading</li>
        }
    }

    if (!sessionStorage.getItem("token")) {
        props.history.push("/login");
    }

    return (
    
        <React.Fragment>
            {/* {console.log("PL APP" , appState)} */}
            <ul>
                {renderProductsList()}
            </ul>
        </React.Fragment>
    )
}

function mapStateToProps(appState) {
    console.log('applicationState PL', appState);
    return { products: appState.products}
}

function mapDispatchProps(dispatch) {
    return bindActionCreators({ getAllProducts }, dispatch)
}

export default connect(mapStateToProps, mapDispatchProps)(ProductsList);