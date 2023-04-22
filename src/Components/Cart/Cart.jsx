import React, { useReducer, useContext, createContext } from 'react'
import './Cart.css'

const CartStateContext = createContext();
const CartDispatchContext = createContext();
const reducer = (state, action) => {
    switch(action.type) {

        case "ADD":
            return [...state, action.item]
        default: 
            throw new Error(`unknown action ${action.type}`)
    }
}





export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, []);
    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value = {state} >
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    )
}

export const useCart = () => useContext(CartStateContext)
export const useDispatchCart = () => useContext(CartDispatchContext)

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