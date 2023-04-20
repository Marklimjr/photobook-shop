import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import ProductGrid from '../../Components/Product/ProductGrid';

const MainStore = () => {
    return (

        <div>
            <NavBar />
                <h1>Main Store Page</h1>
                <ProductGrid />
        </div>
    );
};

export default MainStore;