import React from 'react';
import {useDispatch} from 'react-redux';
import {removeItem} from '../../store/cartSlice';
import { BsFillTrashFill } from "react-icons/bs";

const CartItem = ({cartItem}) => {
    //console.log(cartItem);
    const dispatch = useDispatch()
    return (
        <div className='cartItems'>
            <div className='row'>
                <div className='col-12'>
                    <b>Name: {cartItem.productName} </b>
                </div>
                <div className='col-12'>
                    <div className='row'>
                        <div className='col-9'>
                            <p>Quantity: {cartItem.quantity}</p>
                        </div>
                        <div className='col-3' onClick={()=> dispatch(removeItem({cartItemId:cartItem.id}))}>
                            <BsFillTrashFill className='iconRemove' />
                        </div>
                    </div>
                </div>
                <div className='col-12'>
                    <p>Price: ${cartItem.productPrice}</p>
                </div>
            </div>
            
            
            
        </div> 
    )
}

export default CartItem