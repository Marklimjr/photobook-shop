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
            <h1> Product Index</h1>
            <div>
            {books.map((book)=> (
            <ul key={book._id} className='bookIndex'>
                <li>Book Title : {book.bookTitle}</li>
                <li>Author : {book.author}</li>
                <li>Price : ${book.price}</li>
                <li>Quantity : {book.quantity}</li>
                <Link to={`/admin/${book._id}/edit`} >
                <button>Edit</button>
                </Link>
                <button onClick={() => handleDelete(artwork._id)}>Delete</button>
            
            </ul> 
            ))}

            </div>
        </div>
    );
};

export default ProductIndex;