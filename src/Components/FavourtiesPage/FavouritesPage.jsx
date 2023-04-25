import { useEffect, useState } from 'react';
import Cart from "../../Components/Cart/Cart"
import NavBar from '../NavBar/NavBar';


const FavouritesPage = ({user, setUser}) => {

const [isShowCart,setIsShowCart] = useState(false);

const userId = user._id
console.log(JSON.stringify(user,null,2))
const [favouriteBooks, setFavouriteBooks] = useState([])
const fetchFavouriteBooks = async () => {
    try {
      const response = await fetch(`/api/users/${userId}/favourites`,
      {
        headers:{
            "Content-Type": "application/json",
            }
        })
      const data = await response.json();
      setFavouriteBooks(data);
    } catch (error) {
      console.error("Error fetching favourite books:", error);
    }
    
  };

const deleteFavouriteBook = async (bookId) => {
    try {
      await fetch(`/api/users/${userId}/favourites/${bookId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        }
      });
      setFavouriteBooks(favouriteBooks.filter((book) => book._id !== bookId));
    } catch (error) {
      console.error("Error deleting favourite book:", error);
    }
  };

  useEffect(() => {
    fetchFavouriteBooks();
  }, []);

  useEffect(() => {
    deleteFavouriteBook();
  }, [])

    return (
        <div>
          <NavBar
          setIsShowCart={setIsShowCart}
          user={user}
          setUser={setUser}
          />
          <h1>Favourites Page</h1>
          {favouriteBooks.map((fav) => (
            <div
              key={fav._id}
              className="flex-1 flex flex-col items-center min-w-[250px] border border-yellow-200 px-2 mx-2"
            >
              <h3>Book Title: {fav.bookTitle}</h3>
              <h3>Price: ${fav.price}</h3>
              <h3>Quantity: {fav.quantity}</h3>
              <button className="bg-gray-300 w-full rounded-lg py-1 mt-auto mb-2 hover:bg-gray-500">
                Add to Cart
              </button>
              <button 
              
              onClick={()=>{deleteFavouriteBook(fav._id)}}
              className="bg-gray-300 w-full rounded-lg py-1 mt-auto mb-2 hover:bg-gray-500">
                Remove from Favourites
              </button>
            </div>
          ))}
          {isShowCart && <Cart setIsShowCart={setIsShowCart}/>}
        </div>
      );
}

export default FavouritesPage;