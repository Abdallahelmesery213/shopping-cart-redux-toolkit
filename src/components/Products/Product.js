import React, { useState } from 'react';
import "./Product.css";
import { useDispatch } from 'react-redux';
import { addItemCart } from '../../store/cartSlice';

const Product = ({product}) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const addQuantity = () => {
    setQuantity(quantity +1);
  }
  const subStaractQuantity = () => {
    if (quantity <=1) return false;
    setQuantity(quantity - 1);
  }
  return (
    <div className=' col-md-6 col-sm-12'>

      <div className='product'>
        <div className='row'>
          <div className='col-6 img'>
            <img src={product.img} alt={product.name} className='img-fluid' />
          </div>
          <div className='col-6 text-center'>
            <h4>{product.name}</h4>
            <h6>${product.price}</h6>
            <div className='cont-button'>
              <button className='minus' onClick={subStaractQuantity}>-</button>
              <span>{quantity}</span>
              <button className='plus' onClick={addQuantity}>+</button>
            </div>
            <button className='btn btn-primary add' onClick={()=> dispatch(addItemCart({product, quantity}))}>Add To Cart</button>
            <a href='/'>View full details</a>
          </div>
        </div>
      </div>
      
        
        
    </div>
  )
}

export default Product;