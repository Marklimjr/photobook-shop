import React from 'react';
import { useState } from "react"
import { useNavigate } from 'react-router-dom';


const NewProdForm = () => {

  const [books, setBooks] = useState([]);
  
  const addBook = (book) => setBooks([book,...books]); // add book

  const navigate = useNavigate();

    const [data,setData] = useState({
        bookImg: "",
        bookTitle: "",
        author: "",
        publisher: "",
        writeUp: "",
        price : "",
        quantity: "",
        tags: "",
    })

    function handleChange(evt){
        setData({...data, [evt.target.name] : evt.target.value})
    }


    const handleAddProduct = async (event) => {
        event.preventDefault()
        const response = await fetch("/api/books", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
          });
          const book = await response.json();
          addBook(book);
        console.log("new book submitted");
        navigate('/admin');
      };

    return (
        <div>
            <h1> New Prod Form</h1>
                    <label>
                        bookImg : 
                        <input 
                        type="text" 
                        name="bookImg" 
                        onChange={handleChange}
                        value={data.bookImg}/>
                    </label>
                    <br></br>
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
                        name="writeUp" 
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
            
        </div>
    );
};

export default NewProdForm;