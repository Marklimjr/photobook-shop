import React from 'react';
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


const ModifyProduct = () => {
  const { id } = useParams();
  const [books, setBooks] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const fetchBook = async () => {
      const response = await fetch(`/api/books/${id}`);
      const books = await response.json();
      setBooks(books);
      console.log("this" + {id})
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
    navigate('/admin/index');
  };

    return (
        <div>

              <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center"> Update Product Information </h1>
                    <form>
                        <input 
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="bookImg"
                            label="Book Image"
                            onChange={handleChange}
                            value={books.bookImg}
                            required 
                            placeholder="Book Img Url" />
                        <input 
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="bookAltImg"
                            label="Book Alt Image"
                            onChange={handleChange}
                            value={books.bookAltImg}
                            required 
                            placeholder="Book Alt Img Url" />   
                        <input 
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="bookTitle"
                            label="Book Title"
                            onChange={handleChange}
                            value={books.bookTitle}
                            required 
                            placeholder="Book Title" />

                        <input 
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="author"
                            label="Author"
                            onChange={handleChange}
                            value={books.author}
                            required 
                            placeholder="Author" /> 

                        <input 
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="publisher"
                            label="Publisher"
                            onChange={handleChange}
                            value={books.publisher}
                            required 
                            placeholder="Publisher" /> 


                        <label className="block mb-2 text-sm font-medium text-gray-400">Book Description</label>
                        <textarea type="text" name="writeUp" onChange={handleChange} value={books.writeUp} id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

                        <input 
                            type="number"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="price"
                            label="Price"
                            onChange={handleChange}
                            value={books.price}
                            required 
                            placeholder="Price" /> 

                        <input 
                            type="number"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="quantity"
                            label="Quantity"
                            onChange={handleChange}
                            value={books.quantity}
                            required 
                            placeholder="Quantity" /> 

                        <input 
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="tags"
                            label="Tags"
                            onChange={handleChange}
                            value={books.tags}
                            required 
                            placeholder="Tags, seperate tag with ," /> 

                        <button
                            type="submit"
                            onClick={handleUpdate}
                            className="w-full text-center py-3 rounded bg-green text-black hover:bg-green-dark focus:outline-none my-1"         
                            >Modify Product Details</button>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ModifyProduct;