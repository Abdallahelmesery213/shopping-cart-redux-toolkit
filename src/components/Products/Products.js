import React from 'react'
import { useSelector } from 'react-redux';
import Product from './Product';

export const products = [
    {
        id:1,
        name:'Garlic ',
        img: 'https://bnat23.com/wp-content/uploads/2019/01/%D8%B1%D8%A7%D8%AD%D8%A9-%D8%A7%D9%84%D8%AB%D9%88%D9%85-%D8%A7%D9%84%D9%83%D8%B1%D9%8A%D9%87%D8%A9.jpeg',
        price:25,
        category:'vegetable'
    },
    {
        id:2,
        name:'Lemon',
        img: 'https://www.hiamag.com/sites/default/files/styles/1000xauto/public/article/09/09/2021/%D9%81%D9%88%D8%A7%D8%A6%D8%AF%20%D8%A7%D9%84%D9%84%D9%8A%D9%85%D9%88%D9%86.jpg?itok=u-sfZfXQ',
        price:45,
        category:'vegetable'
    },
    {
        id:3,
        name:'Apple',
        img: 'https://image.shutterstock.com/image-photo/red-apple-isolated-on-white-260nw-1727544364.jpg',
        price:55,
        category:'fruit'
    },
    {
        id:4,
        name:'avocado',
        img: 'https://www.almowaten.net/wp-content/uploads/2020/12/%D9%81%D9%88%D8%A7%D8%A6%D8%AF-%D8%A7%D9%84%D8%A7%D9%81%D9%88%D9%83%D8%A7%D8%AF%D9%88.jpg',
        price:45,
        category:'fruit'
    },
    {
        id:5,
        name:'carrot',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZntMfmQ2bNaRW5trtak0xKAZK_hrXVTgbdQ&usqp=CAU',
        price:15,
        category:'vegetable'
    },
    {
        id:6,
        name:'Grape',
        img: 'https://mufahras.com/wp-content/uploads/2021/02/%D8%A3%D8%B6%D8%B1%D8%A7%D8%B1-%D8%A7%D9%84%D8%B9%D9%86%D8%A8.jpg',
        price:95,
        category:'fruit'
    },
    {
        id:7,
        name:'Kiwi',
        img: 'https://www.thefitglobal.com/wp-content/uploads/2017/08/Benefits-of-Kiwi.jpg',
        price:85,
        category:'fruit'
    },
    {
        id:8,
        name:'Tomato',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDKXz1VQbTKSZgg0p_cdaebSzHiCCPhjqyYw&usqp=CAU',
        price:55,
        category:'vegetable'
    },
    
]

const Products = () => {
    const selectedCategory = useSelector(state => state.products.selectedCategory);
  return (
    <React.Fragment>
        <div className='row'>
            {
                products
                .filter(product => {
                    if (selectedCategory === 'all') return true;
                    return selectedCategory === product.category;
                })
                .map(product => <Product product={product} key={product.id} />)
            }
        </div>
        
    </React.Fragment>
  )
}

export default Products;