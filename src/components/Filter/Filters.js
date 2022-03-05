import React from 'react';
import './filters.css';
import Filter from './Filter'

const Filters = () => {
  return (
    <div className='filters'>
        <h6>Choose Category:</h6>
    
        {
            ['fruit', 'vegetable', 'all'].map((category,index) => <Filter category={category} key={index} />)
        }
    </div>
  )
}

export default Filters