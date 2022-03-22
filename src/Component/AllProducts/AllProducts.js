import React, { useEffect, useState } from 'react';
import SingleProducts from '../SingleProducts/SingleProducts';
import './AllProducts.css'

const AllProducts = (props) => {
const {setCartCount} = props;
const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProducts(data))
    } , [])

    console.log(products);

    return (
        <div>
            <h1>All Products</h1>

           <div className="row container">
           {
                products.map( pd => (
                    <SingleProducts 
                    key = {pd.id}
                    products = {pd}
                    setCartCount = {setCartCount}
                    ></SingleProducts>
                ))
            }
           </div>

        </div>
    );
};

export default AllProducts;