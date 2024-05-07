import React from 'react'
import './Style.css'
import {BsFillBellFill , BsFillEnvelopeFill ,BsPersonCircle,BsSearch,BsJustify} from 'react-icons/bs'
function Header() {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon'/>
        </div>
        <div className='header-left'>
            <BsSearch className='icon'/>
        </div>
        <div className='header-right'>
            <BsPersonCircle className='icon'/>
            Account Name
        </div>
        
    </header>
  )
}

export default Header

