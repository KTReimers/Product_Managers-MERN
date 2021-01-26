import React, {useState, useEffect} from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';

const OneProducts = props => {
    const pStyle= {
        backgroundColor: "grey",
        padding: '20px',
    }

    const [update, setUpdate] = useState(false);


    const [product, setProduct] = useState(null);
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props._id}`)
        .then(res => setProduct(res.data.oneProduct[0]))
    },[product])

    const removeProduct = _id =>{
        axios.delete(`http://localhost:8000/api/products/delete/${_id}`)
            .then(res => setUpdate(!update), navigate("/"))
    }

    return(
        <>
            {
                product ?
                <div style={pStyle}>
                <h1>{product.title}</h1>
                <h3>Price: ${product.price}</h3>
                <h3>About: {product.description}</h3>
                <Link to={`/product/update/${product._id}`}><button>Edit</button></Link>
                <button onClick= {() => removeProduct(product._id)}>Delete</button>
                </div>
                : ""
            }
            </>
    )
}
export default OneProducts;