import React from 'react';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const ProductIndex = () => {

    const [books, setBooks] = useState([{ _id: "" }]);
     
     useEffect(() => {
       fetch("/api/books")
         .then((response) => response.json())
         .then((data) => setBooks(data));
     }, []);

     const handleDelete = async (id) => { 
        try {
          const response = await fetch(`/api/books/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await response.json();
          console.log(data);
          navigate("/admin/index");
        } catch (error) {
          console.error(error);
        }
      };

    return (
        <div>
            <h1 className='flex justify-center items-center py-4 text-xl'> Product Index</h1>
            <div>
            {books.map((book)=> (
            <div key={book._id}>
                <h5 className='inline-block px-2'>Book Title : {book.bookTitle}</h5>
                <h5 className='inline-block px-2'>Author : {book.author}</h5>
                <h5 className='inline-block px-2'>Price : ${book.price}</h5>
                <h5 className='inline-block px-2'>Quantity : {book.quantity}</h5>
                <Link to={`/admin/${book._id}/edit`} >
                <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-2 py-2 mr-2 mb-2">
                  Edit</button>
                </Link>
                <button onClick={() => handleDelete(artwork._id)}
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-2 mr-2 mb-2"
                >Delete</button>
            </div> 
            ))}

            </div>
        </div>
    );
};

export default ProductIndex;