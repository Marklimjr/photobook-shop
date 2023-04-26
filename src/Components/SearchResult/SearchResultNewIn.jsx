import NavBar from '../NavBar/NavBar';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductSingle from '../Product/ProductSingle';

const SearchResult = ({user, setUser}) => {
    const {tag} = useParams();
    const [isShowCart,setIsShowCart] = useState(false);
    const [books, setBooks] = useState([{ _id: "" }]); 

    useEffect(() => {
        fetch(`/api/books/search/new`)
          .then((response) => response.json())
          .then((data) => setBooks(data));
      }, []);
    
    return (
        <div className='bg-amber-50'>
            <div className='bg-amber-50'>
            <NavBar
            setIsShowCart={setIsShowCart}
            user={user}
            setUser={setUser}
            />
            </div>
            <div>
                {books.map((book) => (
                    <div key={book._id}>
                        <ProductSingle  
                        user={user}
                        book={book}
                        />
           </div>
         ))}
        {isShowCart && <Cart setIsShowCart={setIsShowCart}/>}
            </div>
        </div>
    );
};

export default SearchResult;