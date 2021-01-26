import { navigate } from '@reach/router';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Form from "../components/Form";
import AllProducts from './AllProducts';

const AddProduct = () => {

    const [form, setForm] = useState({
        title: "",
        price: 0,
        description: ""
    })
    const [error, setError] = useState({})

    const onChangeHandler = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products/new", form)
        .then(res => {
            if(res.data.error){
                setError(res.data.error.errors)
            } else {
                navigate("/")
            }
        })
        .catch(console.log("error occured while adding a product"));
    }
    return(
        <>
            <Form form={form} onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} error={error}/>
            <hr/>
            <AllProducts/>
        </>
    )
}
export default AddProduct;