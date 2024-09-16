import React, { useContext, useState , useEffect} from 'react'
import { useSelector } from 'react-redux'
import ProductItem from '../components/ProductItem'
import { ShopContext } from '../contextApi/ShopApi'
import { removeItem } from '../redux/Slices/ShopSlice'
import { NavLink } from 'react-router-dom'
import CartItem from '../components/CartItem'

const CartPage = () => {
  const cart = useSelector(state=>state.shopCart)
  const {navigate} = useContext(ShopContext);
  // console.log(cart.length);

  const [totalPrice , setTotalPrice] = useState(0);

  useEffect(()=>{ 
    setTotalPrice(cart.reduce((acc, curr)=> acc+curr.price , 0))
  },[cart])

  const {dispatch} = useContext(ShopContext);

  return (
    // Cart page
    <section className='w-full mx-auto flex mt-[100px]'>

      <div className='w-full max-w-[91%] mx-auto flex flex-col '>
        {/* Cart Heading */}
        <h2 className='pc:text-3xl phone:text-2xl font-bold phone:text-center pc:text-left pc:ml-36'>Your Shopping Items are Here</h2>

        <div className='w-full flex tab:flex-row phone:flex-col-reverse mb-6'>
          <div className='w-[66%] tab:max-w-[66%]  mx-auto '>
            {/* Displaying Carts or No Items Available */}
          {
            (cart.length > 0) 
            ? ( 
                  <div className=' flex gap-5 flex-wrap mx-auto pc:mt-2 justify-center'>
                {
                  cart.map((product)=>(
                    <CartItem key = {product.id} product = {product}/>
                ) )
                }
                </div>  
                )
                : 
                (
                  <div className='flex flex-col justify-center items-center gap-3'>
                  <h2 className='font-bold text-4xl phone:mt-10 tab:mt-[220px]'>No Items Added</h2>
                  
                  <button className='py-3 px-5 rounded-md text-slate-100 bg-blue-900 hover:bg-blue-950 hover:text-white transition-all duration-300 text-2xl font-bold'><NavLink to = "/">Click Me</NavLink></button>
                </div>
              )  
            }
            </div>

          <div className='tab:w-[33%] tab:max-h-[85vh] flex flex-col items-center phone:mt-2 pc:mt-6 border ml-4 py-4 tab:gap-28 bg-[#464956] rounded-md'>
            <h2 className='pc:text-3xl phone:text-xl tab:text-2xl font-bold text-slate-100 text-center'>Your Cart</h2>
            <div className='phone:mt-2 tab:mt-10 font-bold text-lg text-[#464956] max-w-[80%]'>
              <p className='phone:text-base tab:text-xl pc:text-2xl  text-blue-200'>Total Products : <span className='text-green-600'>{cart.length}</span></p>
              <p className='phone:text-base tab:text-xl pc:text-2xl text-blue-200'>Total Amount : <span className='text-green-600'>₹{Math.round(totalPrice*80)}</span></p>
            </div>

            <div className='phone:mt-4 tab:mt-12 flex gap-3 flex-col items-center max-w-[80%]'>
              <p className='font-bold pc:text-3xl phone:text-xl tab:text-2xl  text-slate-100 text-center'>Shop More</p>
              <button className='py-2 px-3 rounded-md text-slate-50 bg-blue-900 hover:bg-slate-950 hover:text-white transition-all duration-300 font-semibold tab:text-xl' onClick = {()=>navigate("/")}>Checkout Now</button>
            </div>
          </div>
        </div>
      </div> 
    </section>
  )
}

export default CartPage
