import React, {useState, useEffect} from 'react';

const Form = props =>{
    const input = {
            // backgroundColor: 'grey'
            color: 'aqua',
    }
    return(
        <>
        <form onSubmit={props.onSubmitHandler}>
            <div className="input">
                <h3 style={input}>Title: <input type = "text" name="title" onChange={props.onChangeHandler} value={props.form.title}/></h3>
                {
                    props.error.title ? <span style={{color:"red"}}>{props.error.title.message}</span> : ""
                }
            </div>
            <div className="input">
                <h3 style={input}>Price: <input type="Number" step="0.01" name="price" onChange={props.onChangeHandler} value={props.form.price}/></h3>
                {
                    props.error.price ? <span style={{color:"red"}}>{props.error.price.message}</span> : ""
                }
            </div>
            <div className="input">
                <h3 style={input}>Description: <input type = "text" name="description" onChange={props.onChangeHandler} value={props.form.description}/></h3>
                {
                    props.error.description ? <span style={{color:"red"}}>{props.error.description.message}</span> : ""
                }
            </div>
            <input type="submit" value="submit"/>
        </form>
        </>
    )
}
export default Form;