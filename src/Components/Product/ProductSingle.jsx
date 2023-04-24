import React from 'react';
import { useDispatchCart } from '../Cart/Cart';

const ProductSingle = ({book}) => {
    
    const dispatch = useDispatchCart();

    const addToCart = (item) => {
        dispatch({type: "ADD", item})
    }


    return (
        <div className="flex-1 flex flex-col items-center min-w-[250px] border border-yellow-200 px-2 mx-2 " >
            <h3>Book Title : {book.bookTitle}</h3>
            <h3>Price : ${book.price}</h3>
            <h3>Quantity: {book.quantity}</h3>
            <button
            onClick={() => addToCart(book)} 
            className='bg-gray-300 w-full rounded-lg py-1 mt-auto mb-2 hover: bg-gray-500:'>
                Add to Cart
            </button>

        </div>
            
        
    );
};

export default ProductSingle;