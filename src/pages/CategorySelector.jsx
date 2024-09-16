import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { ShopContext } from '../contextApi/ShopApi';

const CategorySelector = () => {
   
  const {navigate , categories , setCategory} = useContext(ShopContext);

   const handleClick = (category) => {
    setCategory(category);
    // console.log("navigating to " , category);
    navigate(`/categories/${category}`);
   }


  return (
    // CATEGORIES PAGE
    <section className='mt-[100px] w-screen text-center flex flex-col gap-6'>
      {/* Heading of Category Selector Page */}
      <h2 className='text-3xl font-bold '>Welcome to Category Selector page</h2>
      <div className='w-full max-w-[91%] mx-auto pc:flex phone:grid tab:grid-cols-2 justify-center gap-6 '>
        {/* Categories Selector Boxes */}
        {
            categories.map((category, index)=>
              (<div key = {index} onClick = {()=>handleClick(category)} className='cursor-pointer text-slate-200 px-3 py-2 bg-[#464956] rounded-md text-xl font-semibold hover:opacity-90 transition-all duration-200 tab:max-w-[75%]'>{category.toUpperCase()}</div>))
        }
      </div>
    </section>
  )
}

export default CategorySelector
