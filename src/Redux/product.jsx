import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    "cart": [],
}

const CartSlice = createSlice({
    "name": "Cart",
    "initialState": initialState,
    "reducers": {
        AddToCart: (state, action) => {
            state.cart.push(action.payload);
        },
        RemoveFromCart: (state, action) => {
            state.cart = state.cart.filter((cart,index)=>
               index !== action.payload
            );
        }
    }
})

export const { AddToCart,RemoveFromCart } = CartSlice.actions;

export default CartSlice;