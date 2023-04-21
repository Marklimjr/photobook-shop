import React from 'react';

const ProductSingle = ({book}) => {
    return (
        <div className="flex-1 flex flex-col items-center min-w-[250px] border border-yellow-200 px-2 mx-2 " >
            <h3>Book Title : {book.bookTitle}</h3>
            <h3>Price : ${book.price}</h3>
            <h3>Quantity: {book.quantity}</h3>
            <button>Add to Cart</button>
        </div>
            
        
    );
};

export default ProductSingle;