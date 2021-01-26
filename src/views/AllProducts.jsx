import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

const AllProducts = () =>{
    const [allProducts, setAllProducts] = useState(null)

    const productStyle ={
        backgroundColor: 'black',
        color:'aqua',
        // width: '200px',
        // textAlign: 'center',
        // marginLeft: '42%',
        // boarderRadius: '10px'
    }

    const [update, setUpdate] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {setAllProducts(res.data.allProducts)})
    }, [allProducts])

    const removeProduct = _id =>{
        axios.delete(`http://localhost:8000/api/products/delete/${_id}`)
            .then(res => setUpdate(!update))
    }
    return(
        <>
            <h1 style={{color: 'aqua'}}>All Products</h1>
            {
                allProducts ?
                allProducts.map((items, i) => {
                    return <div key={i} style={productStyle}>
                        <h3><Link to= {`/product/${items._id}`}>{items.title}</Link></h3>
                        <button onClick={() => removeProduct(items._id)}>Delete</button>
                    </div>
                }) : ""
            }
        </>
    )
}
export default AllProducts;