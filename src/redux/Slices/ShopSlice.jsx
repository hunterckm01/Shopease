import { createSlice, nanoid } from "@reduxjs/toolkit";

export const ShopSlice = createSlice({
    name : "shopCart",
    initialState : [],
    reducers : {
        addItem: (state , action)=>{
            // console.log(action.payload.id)
            state.push(action.payload); 
            // console.log(action)
        },
        removeItem: (state, action)=>{
            return (state.filter((product)=>product.id !== action.payload))
        }
    }
})

export const {addItem , removeItem} = ShopSlice.actions ;
export default ShopSlice.reducer ;