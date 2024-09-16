import { useContext, useEffect, useState } from 'react'
import { Routes, Route, NavLink, useLocation } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import CartPage from './pages/CartPage';
import { ShopContext } from './contextApi/ShopApi';
// import reqImg from './assets/req.svg'
import CategorySelector from './pages/CategorySelector';
import FavPage from './pages/FavPage';
import Navbar from './components/Navbar';

// IMPLEMENT LOGIN DASHBOARD AT END
function App() {
  
  return (
    <>
    {/* Header */}
       <Navbar/>
    {/* Routes Created */}
       <Routes>
        <Route path = "/" element = {<HomePage/>}/>
        <Route path = "/categories" element = {<CategorySelector/>}/>
        <Route path = "/categories/:category" element = {<CategoryPage/>}/>
        <Route path = "/cart" element = {<CartPage/>}/>
        <Route path = "/favourites" element = {<FavPage/>}/>
        <Route path = "/*" element = {<h2 className='font-bold text-3xl h-screen text-center w-screen flex justify-center items-center'>No Page Found</h2>}/>
       </Routes>
    </>
  )
}

export default App ;
