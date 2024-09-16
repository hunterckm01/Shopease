import React, { act, useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { addItem, removeItem } from '../redux/Slices/ShopSlice';
import { ShopContext } from '../contextApi/ShopApi';
import { addFavItem , remFavItem } from '../redux/Slices/FavItemSlice';

const ProductItem = ({product}) => {

  const {dispatch} = useContext(ShopContext);
  const cart = useSelector(state=>state.shopCart);
  const favItems = useSelector(state=>state.favItems.favourites)
  const productTitle = product.title.length > 30 ? product.title.substr(0,30)+"..." : product.title;
  const description = product.description.length > 100 ?  product.description.substr(0,90)+"..." : product.description;
  const categoryName = product.category.split(" ");
  const category = categoryName[0];
  const actualPrice = Math.round(product.price*145);
  const discountPrice = Math.round(product.price*80);
  const discount = Math.floor((actualPrice-discountPrice)/actualPrice*100);

  const check = () =>{
    if(cart.length > 0){
      console.log("cart length is : ",cart.length)
      for(let i = 0 ; i < cart.length ; i++){
        console.log(product.id , "  " , cart[i].id)
        if(product.id == cart[i].id){
          return true ;
        }
      }
      return false ;
    }
    return false ;
  }

  const productAvailable = check();

  // console.log(productAvailable)

  return (
    <article key = {product.id} className='hover:scale-[1.02] gap-2 transition-all duration-200  flex flex-col justify-between border border-blue-900 rounded-md'>
       
        <img src = {product.image} loading = "lazy" alt = {product.category} className='max-w-[80%] min-h-[270px] max-h-[270px] self-center mt-2'/>
        
        <div className='flex flex-col gap-4 px-4 text-slate-100 bg-[#464956]  pb-4 '>

          <h3 className='text-2xl font-semibold self-center mt-2'>{productTitle}</h3>

          <p>{description}</p>

          <h4 className='text-lg font-bold'>₹{discountPrice}<span className='ml-2 mt-2 text-slate-100 font-normal text-base line-through '>₹{actualPrice}</span><span className='ml-3 text-sm font-normal text-green-400'>({discount}% off)</span></h4>

          <NavLink to = {`/categories/${product.category}`}>
              <p className='text-lg font-bold cursor-pointer pl-1 mt-[-8px] hover:underline'>{category.toUpperCase()}</p>
          </NavLink>
          
          <div className='flex justify-between gap-2 pc:px-3 phone:px-2 tab:px-0 mt-2'>
              {
                favItems.some((fav)=>fav.id === product.id) ? 
                (<button className='py-2 px-3 tab:py-3 tab:px-4 rounded-md  text-slate-50 bg-blue-900 hover:bg-slate-950 hover:text-white transition-all duration-300 ' onClick = {()=>{dispatch(remFavItem(product.id))}}>Remove Favourites</button>) : 
                (<button className='py-2 px-3 tab:py-3 tab:px-4 rounded-md  text-slate-50 bg-blue-900 hover:bg-slate-950 hover:text-white transition-all duration-300'onClick = {()=>{dispatch(addFavItem(product))}}>Add to Favourites</button>)
              }
              {
                cart.some((item)=>item.id === product.id) ? 
                (<button className = "py-2 px-3 tab:py-3 tab:px-4 rounded-md text-slate-50 bg-blue-900 hover:bg-slate-950 hover:text-white transition-all duration-300" onClick = {()=>{dispatch(removeItem(product.id))}}>Remove From Cart</button>) : 
                ( <button className = "py-2 px-3 tab:py-3 tab:px-4 rounded-md text-slate-50 bg-blue-900 hover:bg-slate-950 hover:text-white transition-all duration-300" onClick = {()=>{dispatch(addItem(product))}}>Add to Cart</button>)
              }
          </div>
        </div>
    </article>
  )
}

export default ProductItem
