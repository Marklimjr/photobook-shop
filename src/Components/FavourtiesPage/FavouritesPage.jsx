import { useEffect, useState } from 'react';
import Cart from "../../Components/Cart/Cart"
import NavBar from '../NavBar/NavBar';
import ProductSingleFav from '../Product/ProductSingleFav'



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
        <div className='bg-amber-50'>
          <NavBar
          setIsShowCart={setIsShowCart}
          user={user}
          setUser={setUser}
          />

          <h1>Favourites</h1>

          {favouriteBooks.map((book) => (
              <div key={book._id}>
                <ProductSingleFav
                user={user}
                book={book}
                />
              </div>
            
          ))}
          {isShowCart && <Cart setIsShowCart={setIsShowCart}/>}
        </div>
      );
}

export default FavouritesPage;