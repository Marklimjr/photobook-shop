import React from 'react';
import { useEffect, useState } from "react";
import ProductSingle from './ProductSingle'

export default function ProductGrid({user}) {
    //! show the list of artworks
     const [books, setBooks] = useState([{ _id: "" }]); 
  
    useEffect(() => {
      fetch("/api/books")
        .then((response) => response.json())
        .then((data) => setBooks(data));
    }, []);

    //   const [selectedBook, setSelectedBook] = useState(null);
    //   const onClick = (id) => setSelectedBook(books.find((b) => b._id === id));
  
     return (
      <>
       <div className='flex flex-wrap'>
         {books.map((book) => (
           <div key={book._id}>
             <ProductSingle  
             user={user}
             book={book}
             />
           </div>
         ))}
         
       </div>
      </>
     );
  }