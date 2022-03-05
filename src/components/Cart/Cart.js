import React from 'react';
import './cart.css';
import {useSelector} from 'react-redux';
import CartItem from './CartItem';
import {getTotalPrice} from '../../store/cartSlice'

const Cart = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const TotalPrice = useSelector(getTotalPrice);
    
  return (
    <div className='cart'>
        <div>
            <h2>cart</h2>
            <p className='total'>Total:</p>
            <span className='totalPrice'>${TotalPrice}</span>
        </div>
        {
            cartItems.map((cartItem)=> <CartItem key={cartItem.id} cartItem={cartItem} />)
        }
        
        {/* <div className='cartItems'>
            <p>Name: </p>
            <p>Quantity: </p>
            <p>Price: </p>
        </div> */}
    </div>
  )
}

export default Cart