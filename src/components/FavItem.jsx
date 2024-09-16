import React, { useContext } from 'react'
import { ShopContext } from '../contextApi/ShopApi';
import { useSelector } from 'react-redux';
import { addFavItem, remFavItem } from '../redux/Slices/FavItemSlice';
import { addItem , removeItem } from '../redux/Slices/ShopSlice';
import { NavLink } from 'react-router-dom';

const FavItem = ({product}) => {
    console.log(product);
    const cart = useSelector(state=>state.shopCart);
    const favItems = useSelector((state)=>state.favItems.favourites);
    const {dispatch} = useContext(ShopContext);
    const desc = product.description.length > 200 ? product.description.substr(0,200)+"..." : product.description 
    const category = product.category.split(" ")[0];
    console.log(category);
  return (
    <article className='hover:scale-[1.01] gap-2 transition-all duration-200  flex flex-col justify-between border border-blue-900 rounded-md'>
      <div className='w-full flex justify-center  py-2 rounded-t-lg'>
       <img src = {product.image} loading = "lazy" className='max-w-[80%] min-h-[200px] max-h-[200px] self-center mt-2'/>
      </div>

        <div className='flex flex-col gap-4 px-4 text-slate-100 bg-[#464956]  pb-4'>
            <h2 className='text-2xl font-semibold self-center mt-2'>{product.title}</h2>
            <p className='font-semibold text-lg mt-2'>{desc}</p>
            <p className='text-2xl font-bold text-green-600 mt-4'>₹{Math.round(product.price*80)} <span className='font-bold text-base text-[#0d7c66]'> {product.rating.count} orders </span></p>
            <NavLink to = {`/categories/${product.category}`}><p className= '-mt-1 font-semibold'>{category.toUpperCase()}</p></NavLink>


            <div className='mt-4 flex gap-4 tab:text-xl font-semibold justify-around'>
              {
                favItems.some((fav)=>fav.id === product.id) ? 
                (<button className='py-2 px-3 rounded-md  text-slate-50 bg-blue-900 hover:bg-slate-950 hover:text-white transition-all duration-300' onClick = {()=>{dispatch(remFavItem(product.id))}}>Remove Favourites</button>) : 
                (<button className='py-2 px-3 rounded-md  text-slate-50 bg-blue-900 hover:bg-slate-950 hover:text-white transition-all duration-300'onClick = {()=>{dispatch(addFavItem(product))}}>Add to Favourites</button>)
              }

              {
              cart.some((item)=>item.id === product.id) ? 
              (<button className = "py-2 px-3 rounded-md text-slate-50 bg-blue-900 hover:bg-slate-950 hover:text-white transition-all duration-300" onClick = {()=>{dispatch(removeItem(product.id))}}>Remove From Cart</button>) : 
              ( <button className = "py-2 px-3   rounded-md text-slate-50 bg-blue-900 hover:bg-slate-950 hover:text-white transition-all duration-300" onClick = {()=>{dispatch(addItem(product))}}>Add to Cart</button>)
              }

            </div>
        </div>
    </article>
  )
}

export default FavItem
