import React from 'react';

const OrderDetail = () => {

    if (!order) return null;

    //line item

    return (
        <div>
            <div className='Section Heading'>
            {order.isPaid ?
        
            <span>ORDER <span>{order.orderId}</span></span>
            :
            <span>NEW ORDER</span>
            }

            <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
            </div>

            {lineItems}
            <section className='total'>
                {order.isPaid ?
                    <span className='right'>TOTAL </span>
                :
                <button 
                onClick={handleCheckout}
                disabled={!lineItems.length}>
                CHECKOUT
                </button>
                }
            <span>{order.totalQty} </span>
            <span className='right'>${order.orderTotal.toFixed(2)}</span>
            </section>
            <div>Hungry...?</div>
        </div>
    );
};

export default OrderDetail;