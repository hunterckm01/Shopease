import React, { useContext } from 'react'
import { ShopContext } from '../contextApi/ShopApi'
import ProductItem from '../components/ProductItem';
import Spinner from '../components/Spinner';

const HomePage = () => {

  const {productData , loading} = useContext(ShopContext);
  // console.log(productData);
    
  return (
    // HomePage Section
    <section className='w-full mt-[100px]'>
      <div className='w-full max-w-[92%] mx-auto flex flex-col'>

        {/* Heading of Products */}
        <h2 className='font-bold text-3xl text-center mb-[20px]'>Our Products</h2>
        
        {/* Loader or Show All Items */}
        <div className='w-full grid pc:grid-cols-3 tab:grid-cols-2 phone:grid-cols-1 gap-5 flex-wrap mb-10 product-container'>
        {
          loading ? (<Spinner className = ""/>) : ( productData.map((product) => 
            (<ProductItem product = {product} key = {product.id}/>) )
          )
        }
        </div>
      </div>
    </section>
  )
}

export default HomePage
