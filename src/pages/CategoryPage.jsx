import React, { useContext } from 'react'
import ProductItem from '../components/ProductItem'
import { useLocation, useNavigate, useNavigation } from 'react-router-dom'
import { ShopContext } from '../contextApi/ShopApi'
import Spinner from '../components/Spinner'

const CategoryPage = () => {
  const {productData , loading} = useContext(ShopContext)
  const location = useLocation();
  const category = location.pathname.split("/").at(-1).replaceAll("%20", " ");
  const categoryName = category.split(" ");
  const navigate = useNavigate()
  // console.log("category page reached");

  return (
    // CATEGORY SELECTED PAGE
    <section className='mt-28'>
      <div className='max-w-[91%] mx-auto'>

        {/* Category Selector with Dynamic Name Getting */}
        <p className='text-3xl font-bold text-center '>Category Page : <span className='text-blue-900 '>{categoryName[0].toUpperCase()}</span></p>

        {/* Navigating button */}
        <button onClick = {()=>navigate(-1)} className='bg-gray-800 text-slate-200 mb-4 py-2 px-4 rounded-lg text-xl font-semibold hover:opacity-90 transition-all duration-200'>Back</button>

        {/* Category Name */}
        <div className='w-full grid phone:grid-cols-1 tab:grid-cols-2 gap-5 flex-wrap mb-10 '>
        {
         loading ? (<Spinner/>) : (productData.map(
            (product) => (<ProductItem product = {product} key = {product.id}/>)
          ))
        }
        </div>
      </div>
    </section>
  )
}

export default CategoryPage
