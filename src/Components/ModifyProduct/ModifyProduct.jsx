import React from 'react';
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


const ModifyProduct = () => {

  const [books, setBooks] = useState([]);
  
  const addBook = (book) => setBooks([book,...books]); // add book

  const navigate = useNavigate();

  useEffect(() => {
    const fetchBook = async () => {
      const response = await fetch(`/api/books/${id}`);
      const book = await response.json();
      setBooks(books);
    };
    fetchBook();
  }, [id]);

    const handleChange = (event) => {
    const key = event.target?.name;
    const value = event.target?.value;

    setBooks({ ...books, [key]: value });
  };


  const handleUpdate = async (event) => {
    event.preventDefault()
    const response = await fetch(`/api/books/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(books),
    });
    navigate('/admin');
  };

    return (
        <div>
            <h1> Update Book Form</h1>
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
                    <button type="submit" onClick={handleUpdate}>Update Product Information</button>
            
        </div>
    );
};

export default ModifyProduct;