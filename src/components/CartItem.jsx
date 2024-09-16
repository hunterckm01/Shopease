import React, { useContext } from 'react'
import { ShopContext } from '../contextApi/ShopApi'
import { useSelector } from 'react-redux';
import { removeItem } from '../redux/Slices/ShopSlice';
import { addFavItem, remFavItem } from '../redux/Slices/FavItemSlice';

const CartItem = ({product}) => {
    const {dispatch} = useContext(ShopContext);
    const cart = useSelector(state=>state.shopCart);
    const favItems = useSelector(state=>state.favItems.favourites)
    const categoryName = product.category.split(" ");
    const category = categoryName[0];

  return (
    <article className='flex flex-col items-center justify-between hover:scale-[1.005] transition-all duration-200 mb-4 mt-4'>
      <div className='w-full flex justify-center border-2 border-gray-800 py-2 rounded-t-lg'>
       <img src = {product.image} className='pc:min-h-[300px] pc:max-h-[300px] tab:min-h-[250px] tab:max-h-[250px] phone:min-h-[200px] phone:max-h-[200px] max-w-[80%] self-center'/>
      </div>

        <div className='gap-2 flex flex-col  text-slate-100 bg-[#464956] pb-4 pt-3 px-6'>
            <h2 className='font-bold pc:text-3xl tab:text-2xl phone:text-xl text-center text-blue-200'>{product.title}</h2>
            <p className='font-semibold text-lg mt-2 phone:text-sm tab:text-base'>{product.description}</p>
            <p className='text-2xl font-bold text-green-600 mt-4'>₹{Math.round(product.price*80)}</p>
            <p className='-mt-1 font-semibold'>{category.toUpperCase()}</p>

            <div className='mt-4 flex phone:flex-col tab:flex-row gap-4 text-xl font-semibold justify-around'>
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

export default CartItem
