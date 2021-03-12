import React from 'react'

const ProductListItem = (props) => {

   
    const renderProductsList = () => {
        console.log("PLI Props", props);
        localStorage.setItem('currentProductId', props.product.pid);
        props.history.push("/product");
    }


    return (
        <li onClick={renderProductsList}>
            {props.product.product_name} {props.product.price}
            <img src={props.product.product_image}></img>
        </li>
    )
}

export default ProductListItem;