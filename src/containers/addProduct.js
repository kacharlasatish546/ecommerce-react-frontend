import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import {bindActionCreators} from 'redux'
import {addProduct} from '../actions/products'
import {connect} from 'react-redux'

const initialValues = {
    pid: '',
    product_name: '',
    price: '',
    category: '',
    product_image: '',
    sub_category: '',
    seller: '',
    product_specifications: '',
    offers: '',
    reviews: '',
}

const AddProduct = (props) => {

    let pidRef = React.createRef();
    let product_nameRef = React.createRef();
    let priceRef = React.createRef();
    let product_image = React.createRef();
    let categoryRef = React.createRef();
    let sub_categoryRef = React.createRef();
    let sellerRef = React.createRef();
    let product_specificationsRef = React.createRef();
    let offersRef = React.createRef();
    let reviewsRef = React.createRef();

    const [addProduct, setAddProduct] = useState({
        pid: '',
        product_name: '',
        price: '',
        category: '',
        product_image: '',
        sub_category: '',
        seller: '',
        product_specifications: '',
        offers: '',
        reviews: '',
    })

    const handleInputChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        // if(name=='product_id'){
        //     if(value==""){
        //         product_idRef.current.innerHTML = "Required"
        //     }
        // }
        setAddProduct(addProduct => ({ ...addProduct, [name]: value }))
    }

    const addProductFunction = (event) =>{
        event.preventDefault();
        console.log("Add Products", addProduct)
        console.log("Add Products props", props)
        props.addProduct(addProduct);
    } 

    const reset = (event) => {
        setAddProduct(initialValues)
    }
    if (!sessionStorage.getItem("token")) {
        props.history.push("/login");
    }
    return (
        <React.Fragment>
            <div className="span6">
                <h2>Add Product</h2>
                <form>
                    <label>Product Id</label>
                    <input type="text" name="pid" className="span5" onKeyPress={handleInputChange} onChange={handleInputChange}/>
                    {/* <p style={{color:'red'}} ref={pidRef}></p> */}
                    <label>Product Name</label>
                    <input type="text" name="product_name" className="span5" onChange={handleInputChange}/>
                    {/* <p style={{color:'red'}} ref={product_nameRef}></p> */}
                    <label>Price</label>
                    <input type="text" name="price" className="span5" onChange={handleInputChange}/>
                    {/* <p style={{color:'red'}} ref={priceRef}></p> */}
                    <label>Category</label>
                    <input type="text" name="category" className="span5" onChange={handleInputChange}/>
                    {/* <p style={{color:'red'}} ref={categoryRef}></p> */}
                    <label>Product Image</label>
                    <input type="text" name="product_image" className="span5" onChange={handleInputChange}/>
                    <label>Sub Category</label>
                    <input type="text" name="sub_category" className="span5" onChange={handleInputChange}/>
                    {/* <p style={{color:'red'}} ref={sub_categoryRef}></p> */}
                    <label>Seller</label>
                    <input type="text" name="seller" className="span5" onChange={handleInputChange}/>
                    {/* <p style={{color:'red'}} ref={sellerRef}></p> */}
                    <label>Product Specifications</label>
                    <input type="text" name="product_specifications" className="span5" onChange={handleInputChange}/>
                    {/* <p style={{color:'red'}} ref={product_specificationsRef}></p> */}
                    <label>Offers</label>
                    <input type="text" name="offers" className="span5" onChange={handleInputChange}/>
                    {/* <p style={{color:'red'}} ref={offersRef}></p> */}
                    <label>Reviews</label>
                    <input type="textbox" name="reviews" className="span5" style={{height:'60px'}} onChange={handleInputChange}/><br></br><br></br>
                    {/* <p style={{color:'red'}} ref={reviewsRef}></p> */}
                    <button  className="btn btn-primary" onClick={addProductFunction}>Submit</button><br></br><br></br>
                    <button  className="btn btn-primary" onClick={reset}>Reset</button>
                    <div className="clearfix"></div>
                </form>
            </div>
        </React.Fragment>
    )
}

function mapDispatchToProps(dispatch){
return bindActionCreators({addProduct},dispatch);
}

function mapStateToProps(appState){
return {isUserLoggedIn:appState.isUserLoggedIn}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);