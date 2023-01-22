import { configureStore } from "@reduxjs/toolkit";
import products from "./slices/productsSlice"
import shoppingCart from "./slices/shoppingCartSlice"

export default configureStore({
    reducer: {
        products,
        shoppingCart
    }
})