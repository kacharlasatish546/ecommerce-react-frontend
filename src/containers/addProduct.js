import React from 'react';
import { useForm } from 'react-hook-form/dist/index.ie11';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addProduct } from '../actions/products';

const AddProduct = (props) => {

    const mandatory = "Mandatory Field";
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        console.log("data in add Product",data);
        props.addProduct(data);
        
    }

    return (
        <React.Fragment>
            <div className="span6">
                <h2>Add Product</h2>
                <form>
                    <label>Product Id</label>
                    <input type="text" name="pid" className="span5" ref={register({ required: true })} />
                    {errors.pid && <p style={{ color: "red" }}>{mandatory}</p>}

                    <label>Product Name</label>
                    <input type="text" name="product_name" className="span5" ref={register({ required: true })} />
                    {errors.product_name && <p style={{ color: "red" }}>{mandatory}</p>}

                    <label>Price</label>
                    <input type="text" name="price" className="span5" ref={register({ required: true })} />
                    {errors.price && <p style={{ color: "red" }}>{mandatory}</p>}

                    <label>Category</label>
                    <input type="text" name="category" className="span5" ref={register({ required: true })} />
                    {errors.product_name && <p style={{ color: "red" }}>{mandatory}</p>}

                    <label>Product Image</label>
                    <input type="text" name="product_image" className="span5" ref={register({ required: true })} />
                    {errors.product_image && <p style={{ color: "red" }}>{mandatory}</p>}

                    <label>Sub Category</label>
                    <input type="text" name="sub_category" className="span5" ref={register({ required: true })} />
                    {errors.sub_category && <p style={{ color: "red" }}>{mandatory}</p>}

                    <label>Seller</label>
                    <input type="text" name="seller" className="span5" ref={register({ required: true })} />
                    {errors.seller && <p style={{ color: "red" }}>{mandatory}</p>}

                    <label>Product Specifications</label>
                    <input type="text" name="product_specifications" className="span5" ref={register({ required: true })} />
                    {errors.product_specifications && <p style={{ color: "red" }}>{mandatory}</p>}

                    <label>Offers</label>
                    <input type="text" name="offers" className="span5" ref={register({ required: true })} />
                    {errors.offers && <p style={{ color: "red" }}>{mandatory}</p>}

                    <label>Reviews</label>
                    <input type="textbox" name="reviews" className="span5" style={{ height: '60px' }} ref={register({ required: true })} />
                    {errors.reviews && <p style={{ color: "red" }}>{mandatory}</p>}<br></br><br></br>

                    <button className="btn btn-primary" onClick={handleSubmit(onSubmit)}>Submit</button><br></br><br></br>
                    {/* <input type="submit" value="Submit" className="btn btn-primary"></input> */}
                    <div className="clearfix"></div>
                </form>
            </div>
        </React.Fragment>
    )
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addProduct }, dispatch);
}

function mapStateToProps(appState) {
    return { isUserLoggedIn: appState.isUserLoggedIn }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);