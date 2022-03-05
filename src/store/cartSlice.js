import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        cartItems:[],
    },
    reducers:{
        
        addItemCart: (state, action) => {
            console.log(action.payload);
            
            const pseudoId= (new Date()).getTime(); // generate id for cart item
            state.cartItems.push({
                id: pseudoId,
                productId: action.payload.product.id,
                productName: action.payload.product.name,
                quantity: action.payload.quantity,
                productPrice: action.payload.quantity * action.payload.product.price,
                // totalPrice: action.payload.quantity * action.payload.product.price,
            })
            
        },
        removeItem: (state, action) => {
            state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.cartItemId)
        },
    },
})
export const getTotalPrice = state => {
    return state.cart.cartItems.reduce((total, cartItem) => {
        return cartItem.productPrice + total;
    }, 0)
}

export const {addItemCart, removeItem} = cartSlice.actions;
export default cartSlice.reducer;
