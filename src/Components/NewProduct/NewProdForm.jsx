import React from 'react';
import { useState } from "react"
import { useNavigate } from 'react-router-dom';


const NewProdForm = () => {

  const [books, setBooks] = useState([]);
  
  const addBook = (book) => setBooks([book,...books]); 

  const navigate = useNavigate();

    const [data,setData] = useState({
        bookImg: "",
        bookAltImg: "",
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
            <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center"> Add New Product </h1>
                    <form>
                        <input 
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="bookImg"
                            label="Book Image"
                            onChange={handleChange}
                            value={data.bookImg}
                            required 
                            placeholder="Book Img Url" />
                        <input 
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="bookAltImg"
                            label="Book Alt Image"
                            onChange={handleChange}
                            value={data.bookAltImg}
                            required 
                            placeholder="Book Alt Img Url" />   
                        <input 
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="bookTitle"
                            label="Book Title"
                            onChange={handleChange}
                            value={data.bookTitle}
                            required 
                            placeholder="Book Title" />

                        <input 
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="author"
                            label="Author"
                            onChange={handleChange}
                            value={data.author}
                            required 
                            placeholder="Author" /> 

                        <input 
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="publisher"
                            label="Publisher"
                            onChange={handleChange}
                            value={data.publisher}
                            required 
                            placeholder="Publisher" /> 


                        <label className="block mb-2 text-sm font-medium text-gray-400">Book Description</label>
                        <textarea type="text" name="writeUp" onChange={handleChange} value={data.wrteUp} id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

                        <input 
                            type="number"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="price"
                            label="Price"
                            onChange={handleChange}
                            value={data.price}
                            required 
                            placeholder="Price" /> 

                        <input 
                            type="number"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="quantity"
                            label="Quantity"
                            onChange={handleChange}
                            value={data.quantity}
                            required 
                            placeholder="Quantity" /> 

                        <input 
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="tags"
                            label="Tags"
                            onChange={handleChange}
                            value={data.tags}
                            required 
                            placeholder="Tags, seperate tag with ," /> 

                        <button
                            type="submit"
                            onClick={handleAddProduct}
                            className="w-full text-center py-3 rounded bg-green text-black hover:bg-green-dark focus:outline-none my-1"         
                            >Submit New Product</button>
                        </form>
                    </div>
                </div>
            </div>
    );
            
        </div>
    );
};

export default NewProdForm;