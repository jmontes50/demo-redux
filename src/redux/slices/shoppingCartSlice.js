import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems:[]
}

export const shoppingCartSlice = createSlice({
    name:'shoppingCart',
    initialState,
    reducers: {
        addToCart:(state, action) => {
            state.cartItems = [...state.cartItems, action.payload]
        }
    }
})

export const { addToCart } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;