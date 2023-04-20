import React from 'react';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductSingle from './ProductSingle'

export default function ProductGrid() {
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
       <ul className="CustomGrid" >
         {books.map((book) => (
           <div key={book._id}>
             <ProductSingle book={book} />
           </div>
         ))}
         
       </ul>
       {/* <Link className="CustomGridLinks" to={`/books/${selectedBook?._id}`} books={books} underline="none"/>
   */}
      </>
     );
  }