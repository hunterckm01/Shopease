import { configureStore } from "@reduxjs/toolkit";
import ShopReducer from "./Slices/ShopSlice";
import FavItemReducer from './Slices/FavItemSlice'

export const store = configureStore({
    reducer : {
        shopCart : ShopReducer,
        favItems : FavItemReducer ,
    },
})