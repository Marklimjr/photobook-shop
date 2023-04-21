import React, { useState } from 'react';
import { useEffect } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import ProductGrid from '../../Components/Product/ProductGrid';
import Cart from '../../Components/Cart/Cart';

const MainStore = () => {

    const [isShowCart,setIsShowCart] = useState(false);
    const [isAddingToCart, setIsAddingToCart] = useState(false);

    const [cart,setCart] = useState([]);
    const [books, setBooks] = useState([{ _id: "" }]);
     
     useEffect(() => {
       fetch("/api/books")
         .then((response) => response.json())
         .then((data) => setBooks(data));
     }, []);

     const handleAddToCart = (books) => {
        console.log('handleAddToCart called')
        setIsAddingToCart(true);
        setCart(prevCart => {
          const index = prevCart.findIndex(item => item._id === books._id);
          if (index !== -1) {
            const updatedCart = [...prevCart];
            updatedCart[index].quantity += 1;
            return updatedCart;
          }
          return [...prevCart, { ...books, quantity: 1 }];
        });
        setIsAddingToCart(false);

      };




    return (

        <div className='MainStore'>
            <NavBar 
            cart={cart} 
            setIsShowCart={setIsShowCart}
            />
                <h1>Main Store Page</h1>
                <div >
                <ProductGrid  
                handleAddToCart={handleAddToCart} 
                books={books} 
                setBooks={setBooks}
                isAddingToCart={isAddingToCart}
                />
                </div>
                {isShowCart && <Cart setIsShowCart={setIsShowCart}/>}

                
                
                
        </div>
    );
};

export default MainStore;