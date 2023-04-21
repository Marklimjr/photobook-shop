import React from 'react';
import './Cart.css'

const Cart = ({setIsShowCart}) => {
    return (
        <div className='fixed inset-0 bg-[rgba(0,0,0,0.7)]'
        onClick={() => setIsShowCart(false)}>
            <div 
            className='bg-white w-[250px] h-full absolute right-0'
            onClick={e => e.stopPropagation}>
                <h1 className='bg-red-400 py-2 text-center text-white  '>Placeholder Cart</h1>
            </div>
        </div>
    );
};

export default Cart;