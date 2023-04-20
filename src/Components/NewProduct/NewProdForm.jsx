import React from 'react';
import { useState } from "react"

const NewProdForm = () => {

    const [data,setData] = useState({
        bookTitle: "",
        author: "",
        publisher: "",
        writeUp: "",
        price : Number,
        quantity: Number,
        tags: "",
    })

    function handleChange(evt){
        setData({...data, [evt.target.name] : evt.target.value})
    }

    const handleAddProduct = async (evt) => {
        evt.preventDefault();
        alert("form submitted")
    }

    return (
        <div>
            <h1> New Prod Form</h1>
                <form>
                    <label>
                        bookTitle : 
                        <input 
                        type="text" 
                        name="bookTitle" 
                        onChange={handleChange}
                        value={data.bookTitle}/>
                    </label>
                    <br></br>
                    <label>
                        author : 
                        <input 
                        type="text" 
                        name="author" 
                        onChange={handleChange}
                        value={data.author}/>
                    </label>
                    <br></br>
                    <label>
                        publisher : 
                        <input 
                        type="text" 
                        name="publisher" 
                        onChange={handleChange}
                        value={data.publisher}/>
                    </label>
                    <br></br>
                    <label>
                        writeup : 
                        <textarea
                        cols={40}
                        rows={4}
                        type="text" 
                        name="writeup" 
                        onChange={handleChange}
                        value={data.writeUp}/>
                    </label>
                    <br></br>
                    <label>
                        price : 
                        <input 
                        type="number" 
                        name="price" 
                        onChange={handleChange}
                        value={data.price}/>
                    </label>
                    <br></br>
                    <label>
                        quantity : 
                        <input 
                        type="number" 
                        name="quantity" 
                        onChange={handleChange}
                        value={data.quantity}/>
                    </label>
                    <br></br>
                    <label>
                        tags : 
                        <input 
                        type="text" 
                        name="tags" 
                        onChange={handleChange}
                        value={data.tags}/>
                    </label>
                    <br></br>
                    <button type="submit" onClick={handleAddProduct}>Add New Product</button>
                </form>
            
        </div>
    );
};

export default NewProdForm;