import React, { useState } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import ProductGrid from '../../Components/Product/ProductGrid';
import Cart from '../../Components/Cart/Cart';
import './MainStore.css'

const MainStore = () => {

    const [isShowCart,setIsShowCart] = useState(false)

    return (

        <div className='MainStore'>
            <NavBar setIsShowCart={setIsShowCart}/>
                <h1>Main Store Page</h1>
                <div >
                <ProductGrid />
                </div>
                {isShowCart && <Cart setIsShowCart={setIsShowCart}/>}
                
                
                
        </div>
    );
};

export default MainStore;