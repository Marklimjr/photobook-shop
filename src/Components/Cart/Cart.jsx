import React, { useReducer, useContext, createContext, useState } from 'react'
import './Cart.css'

const CartStateContext = createContext();
const CartDispatchContext = createContext();


const reducer = (state, action) => {
    switch(action.type) {

        case "ADD":
            return [...state, action.item];

        case "REMOVE":
            const newArr = [...state];
            newArr.splice(action.index, 1)
            return newArr;

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





const CartItem = ({ product, index, handleRemove}) => {

    const [quantity, setQuantity] = useState(1);

    const handleAddQuantity = () => {
        setQuantity(quantity + 1);
      };
    
      const handleReduceQuantity = () => {
        if (quantity > 1) {
          setQuantity(quantity - 1);
        }
      };

    return (
      <article>
        <div className="dt w-100 bb b--black-10 pb2 mt2 dim blue" href="#0">
            <h1>{product.bookTitle}</h1>

              <dt>Price</dt>
              <dd className="ml0">
                {product.price.toLocaleString("en", {
                  style: "currency",
                  currency: "SGD"
                })}
              </dd>
              <div>
                <button onClick={handleReduceQuantity}>-</button>
                {quantity}
                <button onClick={handleAddQuantity}>+</button>
               </div>
            <button onClick={handleRemove}>Remove from cart</button>
          </div>
      </article>
    );
  };





const Cart = ({setIsShowCart}) => {
    const items = useCart();
    const dispatch = useDispatchCart();
    const totalPrice = items.reduce((total, b) => total + b.price, 0)

    const handleRemove = index => {
        dispatch({ type: "REMOVE", index})
    }


    if(items.length === 0) {
        return(
            <div className='fixed inset-0 bg-[rgba(0,0,0,0.7)]'
                onClick={() => setIsShowCart(false)}>
                <div 
                    className='bg-white w-[250px] h-full absolute right-0'
                    onClick={e => e.stopPropagation}>
                        <h1 className='bg-red-400 py-2 text-center text-white  '>
                            Cart is Empty
                        </h1>
                </div>
            </div>
        )
    }

    return (
        <div className='fixed inset-0 bg-[rgba(0,0,0,0.7)]'>
            <div 
            className='bg-white w-[250px] h-full absolute right-0'
            onClick={e => e.stopPropagation}>
                <h1 className='bg-red-400 py-2 text-center text-white  '>
                    <button onClick={() => setIsShowCart(false)}>
                        Close Cart
                    </button>

                </h1>
                <h1 className='bg-red-400 py-2 text-center text-white  '>
                Placeholder Cart
                </h1>
                    <p>
                        Total Price : {" "}
                        {totalPrice.toLocaleString("en", {
                            style:"currency",
                            currency: "SGD"
                        })}
                    </p>
                    {items.map((item, index) => (
                        <CartItem
                            key={index}
                            index={index}
                            product={item}
                            handleRemove={handleRemove}
                            setIsShowCart={setIsShowCart}
                        />
                    ))}
            </div>
        </div>
    );
};

export default Cart;