import React from 'react';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductSingle from './ProductSingle'

export default function ProductGrid({ cart, setCart}) {
    //! show the list of artworks
     const [books, setBooks] = useState([{ _id: "" }]); 
  
    // useEffect(() => {
    //   fetch("/api/books")
    //     .then((response) => response.json())
    //     .then((data) => setBooks(data));
    // }, []);

    //   const [selectedBook, setSelectedBook] = useState(null);
  
    //   const onClick = (id) => setSelectedBook(books.find((b) => b._id === id));
  
     return (
      <>
       <div className='flex flex-wrap'>
         {books.map((book) => (
           <div key={book._id}>
             <ProductSingle
             cart={cart}
             setCart={setCart}  
             book={book}
             />
           </div>
         ))}
         
       </div>
       {/* <Link className="CustomGridLinks" to={`/books/${selectedBook?._id}`} books={books} underline="none"/>
   */}
      </>
     );
  }