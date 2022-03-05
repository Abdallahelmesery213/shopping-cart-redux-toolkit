import React from 'react';
import "./filter.css";
import { useDispatch} from'react-redux';
import {filterCategory} from'../../store/productsSlice'

const Filter = ({category}) => {
    const dispatch = useDispatch();
    

  return (
    <div className='filter'>
        
        <span onClick={() => dispatch(filterCategory(category))}>
            <span className='categoryItem'>{category}</span>
        </span>
    </div>
  )
}

export default Filter