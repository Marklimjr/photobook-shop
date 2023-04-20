import React from 'react';

const ProductSingle = ({book}) => {
    return (
        <li>
            <h3>Book Title : {book.bookTitle}</h3>
            <h3>Price : ${book.price}</h3>
            <h3>Quantity: {book.quantity}</h3>
            <button>Add to Cart</button>
        </li>
            
        
    );
};

export default ProductSingle;