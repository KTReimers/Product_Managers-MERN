import React, {useState, useEffect} from 'react';
import Form from "../components/Form"
import {navigate} from '@reach/router';
import axios from 'axios';
const UpdateProducts = props => {

    const [form, setForm] = useState({
        title: "",
        price: 0,
        description: ""
    })
    const [error, setError] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props._id}`)
        .then(res => setForm(res.data.oneProduct[0]))
    },[props])

    const onChangeHandler = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/update/${props._id}`, form)
        .then(res => {
            if(res.data.error){
                setError(res.data.error.errors)
            } else {
                navigate("/")
            }
        })
        .catch(console.log("error occured while editing a product"));
    }

    return(
        <>
            <h1>Update </h1>
            <Form form={form} onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} error={error}/>
        </>
    )
}
export default UpdateProducts;