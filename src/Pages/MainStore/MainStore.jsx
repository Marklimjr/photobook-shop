import React, { useState } from 'react';
import { useEffect } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import ProductGrid from '../../Components/Product/ProductGrid';
import Cart from '../../Components/Cart/Cart';

const MainStore = ({user, setUser}) => {
    

    const [isShowCart,setIsShowCart] = useState(false);

    const [cart,setCart] = useState([]);
    const [books, setBooks] = useState([{ _id: "" }]);
     




    return (

        <div className='bg-amber-50'>
            <NavBar 
            setIsShowCart={setIsShowCart}
            user={user}
            setUser={setUser}
            />
                <div >
                    <ProductGrid  
                    user={user}
                    />
                </div>
                {isShowCart && <Cart setIsShowCart={setIsShowCart}/>}

        </div>
    );
};

export default MainStore;