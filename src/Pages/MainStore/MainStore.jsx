import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import ProductGrid from '../../Components/Product/ProductGrid';
import Cart from '../../Components/Cart/Cart';
import './MainStore.css'

const MainStore = () => {
    return (

        <div className='MainStore'>
            <NavBar />
                <h1>Main Store Page</h1>
                <Cart />
                <ProductGrid />
                
                
        </div>
    );
};

export default MainStore;