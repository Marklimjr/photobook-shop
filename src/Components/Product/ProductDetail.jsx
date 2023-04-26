import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatchCart } from '../../Components/Cart/Cart';
import NavBar from '../NavBar/NavBar';
import Cart from "../../Components/Cart/Cart"

const ProductDetail = ({user, setUser}) => {

    const [books,setBooks] = useState({})
    const [isShowCart,setIsShowCart] = useState(false);
    const {id} = useParams();

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
      //   const data = await response.json();
      //   setFavouriteBooks([...favouriteBooks, data.book]);
  
      } catch (error) {
        console.log(error.message)
        setError(error.message)
        
      }
    }; 

      useEffect(() => {
        const fetchBook = async () => {
          const response = await fetch(`/api/books/${id}`);
          const books = await response.json();
          setBooks(books);
        };
        fetchBook();
      }, [id]);


    return (
        <div>
        <NavBar 
        setIsShowCart={setIsShowCart}
        user={user}
        setUser={setUser}
        />
        <div className="container mx-auto" >   
            <a  className="flex flex-col bg-white border border-gray-200 rounded-lg shadow min-w-[60%] md:flex-row min-h-full">
                <img className="object-cover w-full rounded-t-lg h-192 md:h-auto md:w-96 md:rounded-none " src={`${books.bookImg}`} alt=""></img>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{books.bookTitle}</h5>
                            <p className="mb-3 font-normal text-gray-700">{books.author}</p>
                            <p className="mb-3 font-normal text-gray-700 ">Published by {books.publisher}</p>
                            <p className="mb-3 font-normal text-gray-700 ">Published by {books.writeUp}</p>
                            <p className="mb-3 font-normal text-gray-700 ">sgd $ {books.price}</p>
                            <button
                            onClick={() => addToCart(books)} 
                            className='bg-gray-300 w-full rounded-lg py-1 mt-auto mb-2 hover: bg-gray-500:'>
                            Add to Cart
                            </button>

                            { user ? (<button
                            onClick={() => addFavouriteBook(books._id)} 
                            className='bg-gray-300 w-full rounded-lg py-1 mt-auto mb-2 hover: bg-gray-500:'>
                            Add to Favourites
                            </button>) : <></>}
                            
                    </div>
            </a>
        </div>
        {isShowCart && <Cart setIsShowCart={setIsShowCart}/>}
        </div>
    );
};

export default ProductDetail;