import React from 'react'
import { useSelector } from 'react-redux';
import FavItem from '../components/FavItem';

const FavPage = () => {
    const favItems = useSelector(state=>state.favItems.favourites);
    // console.log(favItems);
  return (
    <section className='mt-[100px] w-full '>
      {/* Heading of Favourite Page */}
      <h2 className='w-full text-center font-bold text-3xl mb-4'>Welcome to the Favourite Page</h2>
      <div className='w-full max-w-[91%] mx-auto grid tab:grid-cols-2 gap-5 flex-wrap mb-6'>

        {/* Favourite Items or No Items Available */}
        {  
          favItems.length > 0 ? (
            favItems.map((item)=>(<FavItem key = {item.id} product = {item}/>))
          ) : 
            (<div className='w-full text-center relative top-48 font-bold text-2xl text-gray-600 col-span-2'>No Favourite Items</div>)
        }
      </div>
    </section>
  )
}

export default FavPage
