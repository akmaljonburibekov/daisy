import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {FaSun, FaMoon} from 'react-icons/fa6'
// import { document } from 'postcss'

function getThemeFromLocalStoraga() {
  return localStorage.getItem('theme') || 'light'
}

function Navbar() {
  const [mode, setMode] = useState(getThemeFromLocalStoraga())

  useEffect(() => {
  document.documentElement.dataset.theme = mode
  localStorage.setItem('theme', mode);
  }, [mode])
  const changeMode = () => {
    setMode((prev) => {
     
      console.log(document.documentElement.dataset.theme);
      return prev == 'light' ? 'dark' : 'light'
    })
  }
  return (
    <nav className='py-6 shadow-md'>
      <div className="align-element flex justify-between items-center">
        <h1 className='text-3xl flex items-center gap-4'>Articles
        <span className='cursor-pointer' onClick={changeMode}>
          {mode == 'light' ? <FaMoon/> : <FaSun/>}
        </span>
        </h1>
        
        <div className='flex gap-5'>
          <NavLink className='text-xl hover:text-orange-500' to="/">Home</NavLink>
          <NavLink className='text-xl hover:text-orange-500' to="about">About</NavLink>
          <NavLink className='text-xl hover:text-orange-500' to="contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar