import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { ShopContext } from '../contextApi/ShopApi';
import LogoImgDark from '../assets/logoImgDark.svg'
import LogoImgLight from '../assets/logoImgLight.svg'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const location = useLocation();
  const { fetchProducts } = useContext(ShopContext);

  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    if (location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("%20", " ");
      console.log("category is : ", category);
      fetchProducts(category);
    }
  }, [location.pathname]);

  return (
    <header className='w-full top-0 fixed z-[1] bg-slate-500'>
      <nav className="w-full max-w-[91%] mx-auto py-1 px-3 flex justify-between text-gray-800 items-center">
        {/* Shown in PC */}
        <NavLink to="/"><img src={LogoImgDark} className='phone:h-[65px] tab:h-[78px] phone:ml-[-20px] tab:ml-0' /></NavLink>
        <div className='phone:hidden pc:flex gap-8'>
          <NavLink to="/categories/"><h2 className="font-bold text-3xl px-4">Category Page</h2></NavLink>
          <NavLink to="/cart"><h2 className='font-bold text-3xl px-4'>Cart Page</h2></NavLink>
          <NavLink to="/favourites"><h2 className='font-bold text-3xl px-4'>Favourites</h2></NavLink>
        </div>

        {/* Only Shown in Phone and Tablet */}
        <div className='pc:hidden phone:block'>
          <GiHamburgerMenu className='phone:h-[24px] phone:w-[24px] tab:h-[30px] tab:w-[30px] cursor-pointer'
            onClick={() => { setShowNavbar(!showNavbar); console.log(showNavbar); }}
          />
        </div>
      </nav>

      {/* Fullscreen Navbar for Mobile/Tablet */}
      <div
        className={`fixed inset-0 bg-slate-700 z-10 w-full flex flex-col items-center text-slate-50 transition-all duration-200 ease-in-out transform ${showNavbar ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}
      >
        {/* Navbar Header */}
        <div className='w-full max-w-[91%] mx-auto py-1 px-3 flex justify-between items-center'>
          <NavLink to="/"><img src={LogoImgLight} className='phone:h-[65px] tab:h-[78px] phone:ml-[-20px] tab:ml-0 text-white' /></NavLink>
          <AiOutlineClose className='text-white phone:h-[24px] phone:w-[26px] tab:h-[30px] tab:w-[32px] cursor-pointer'
            onClick={() => setShowNavbar(false)}
          />
        </div>

        {/* Menu Items */}
        <ul className='h-full items-center justify-center flex flex-col gap-4 font-semibold text-xl'>
          <li onClick={() => setShowNavbar(false)}>
            <NavLink to="/">Home Page</NavLink>
          </li>
          <li onClick={() => setShowNavbar(false)}>
            <NavLink to="/categories">Category Page</NavLink>
          </li>
          <li onClick={() => setShowNavbar(false)}>
            <NavLink to="/cart">Cart Page</NavLink>
          </li>
          <li onClick={() => setShowNavbar(false)}>
            <NavLink to="/favourites">Favourite Page</NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar;
