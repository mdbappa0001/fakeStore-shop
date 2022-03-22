import React from 'react';
import ReactModal from '../ReactModal/ReactModal';
import './SingleProducts.css'

const SingleProducts = (props) => {
    console.log(props);
    const {setCartCount} = props;
    return (
        <div className='col-md-4' >
            <div className="card p-3 border">
                <img className='w-50 m-auto' src={props.products.image} alt="" />
            <h1>{props.products.title.slice(0, 10)}</h1>
            <div className="d-flex justify-content-around">
            <button onClick={setCartCount} className='btn btn-success'>Add To Cart</button>
            <button className='btn btn-danger'>Delete</button>
            {/* <button className='btn btn-info'>Details</button> */}
            <ReactModal products={props.products}></ReactModal>
            </div>
            </div>
        </div>
    );
};

export default SingleProducts;