import React from 'react'
import './Navbar.css'
import {Routes,Route,BrowserRouter,Link} from 'react-router-dom'
import Home from '../../pages/Home/Home'
import Search from '../../pages/Search/Search'
import MyRecipes from '../../pages/MyRecipes/MyRecipes'
import logo from '../../assets/foody.png';

function Navbar() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/myrecipes" element={<MyRecipes />} />
    </Routes>
    <header className='navbar'>
        <img src={logo} alt="Logo" />
        <div className='icon'><logo size={35}/></div>
        <div className='links'>
        <div className='item'><Link  className='i' to='/' >Home</Link></div>
        <div className='item'><Link  className='i' to='/search' >Search</Link></div>
        <div className='item'><Link  className='i' to='/myrecipes' >My Recipes</Link></div>
        </div>
    </header>
    </BrowserRouter>
  );
}

export default Navbar;
