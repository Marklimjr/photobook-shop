import { useDispatchCart } from '../Cart/Cart';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductSingle = ({book, user}) => {
    

    const [error, setError] = useState("")    
    const dispatch = useDispatchCart();
    const addToCart = (item) => {
        dispatch({type: "ADD", item})
    }

    const addFavouriteBook = async (bookId) => {
        const userId = encodeURIComponent(user._id);
        console.log(userId)

        try {
          const response = await fetch(`/api/users/${userId}/favourites/${bookId}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            //   "Authorization": `Bearer ${token}`,
            },
          });
        //   const data = await response.json();
        //   setFavouriteBooks([...favouriteBooks, data.book]);
    
        } catch (error) {
          console.log(error.message)
          setError(error.message)
          
        }
      };

    return (
      
        <div className="flex-1 flex flex-col items-center min-w-[250px] border border-yellow-200 px-2 mx-2 " >
              {error}
            <h3>Book Title : {book.bookTitle}</h3>
            <h3>Price : ${book.price}</h3>
            <button
            onClick={() => addToCart(book)} 
            className='bg-gray-300 w-full rounded-lg py-1 mt-auto mb-2 hover: bg-gray-500:'>
                Add to Cart
            </button>

            { user ? <button
                onClick={() => addFavouriteBook(book._id)}
                className="bg-gray-300 w-full rounded-lg py-1 mt-auto mb-2 hover:bg-gray-500"
            >
                add to Favourites
            </button> : <></>}
            
            <Link to={`/books/${book._id}`} underline="none">
              <h3>Book Details</h3>
            </Link>
        </div>
            
        
    );
};

export default ProductSingle;