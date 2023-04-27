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
            },
          });
    
        } catch (error) {
          console.log(error.message)
          setError(error.message)
          
        }
      };

    return (
      
        <div className="flex-1 flex flex-col items-center min-w-[250px]  px-2 mx-2 " >

            <div className="max-w-sm bg-amber-50 border border-gray-200 rounded-lg shadow ">
              <a>
                <img className="rounded-t-lg" src={`${book.bookImg}`} alt="" />
              </a>
                <div className="p-5">
              <a>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-500 ">{book.bookTitle}</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{book.author}</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">${book.price}</p>

              
              { user ? (
              <button 
              onClick={() => addFavouriteBook(book._id)}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-400 rounded-lg hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300">
              Add to Favourites
              </button> ) :
              <></>
            }

              <button 
              onClick={() => addToCart(book)}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-amber-200 rounded-lg hover:bg-amber-400 focus:ring-4 focus:outline-none focus:ring-amber-300">
              Add To Cart
              
              </button> 

              <button 
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-amber-200 rounded-lg hover:bg-amber-400 focus:ring-4 focus:outline-none focus:ring-amber-300">
              <Link to={`/books/${book._id}`} underline="none">
              View Book
              </Link>
          
              </button> 


    </div>
</div>      





        </div>
            
        
    );
};

export default ProductSingle;