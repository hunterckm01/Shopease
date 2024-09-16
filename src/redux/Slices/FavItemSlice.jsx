import { createSlice } from "@reduxjs/toolkit";

export const FavItemSlice = createSlice(
    {
    name : "favItems",
    initialState : {
        favourites : [],
    },
    reducers : {
        addFavItem : (state , action)=>{
            console.log(state.favourites);
            console.log(action.payload);
            state.favourites.push(action.payload);
        },
        remFavItem : (state , action)=>{
           state.favourites =  state.favourites.filter((item)=>item.id !== action.payload)
        }
    }
})

export const {addFavItem , remFavItem} = FavItemSlice.actions ;
export default FavItemSlice.reducer ;