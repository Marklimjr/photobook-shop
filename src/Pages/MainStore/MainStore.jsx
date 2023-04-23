import React, { useState } from 'react';
import { useEffect } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import ProductGrid from '../../Components/Product/ProductGrid';
import Cart from '../../Components/Cart/Cart';

const MainStore = ({user, setUser}) => {
    //state for side slider
    const [isShowCart,setIsShowCart] = useState(false);

    //state for general cart
    const [cart, setCart] = useState(null);

    const [books, setBooks] = useState([{ _id: "" }]);
     




    return (

        <div className='MainStore'>
            <NavBar 
            setIsShowCart={setIsShowCart}
            user={user}
            setUser={setUser}
            />
                <h1>Main Store Page</h1>
                <div >
                <ProductGrid
                cart={cart}
                setCart={setCart}
                />
                </div>
                {isShowCart && <Cart setIsShowCart={setIsShowCart}/>}

                
                
                
        </div>
    );
};

export default MainStore;