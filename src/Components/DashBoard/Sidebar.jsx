import React from 'react'
import  {BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill,BsFillXCircleFill , BsFillGearFill, BsFileLock } from 'react-icons/bs'
import { GiMoneyStack } from "react-icons/gi";
import {Link} from 'react-router-dom'
function Sidebar({openSidebarToggle, OpenSidebar}) {


  

  
  return (
    <aside id="sidebar" className="All">
        
        <div className='sidebar-title'>
            <div className='sidebar-brand'>

                <BsCart3  className='icon_header'/> Retail Pro
               
            </div>
           
            <span className='close-icon' onClick={OpenSidebar}><p>aa</p><BsFillXCircleFill /></span>
        </div>

        <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
                
                <Link to='/Home/Selling'>  <GiMoneyStack className='Sellingicon'/> Selling </Link>
               
           </li>
            <li className='sidebar-list-item'>
                
                 <Link to='/Home'>   <BsGrid1X2Fill className='icon'/> Dashboard </Link>
                
            </li>
            <li className='sidebar-list-item'>
                
            <Link to='/Home/Products'>  <BsFillArchiveFill className='icon'/> Products  </Link>
                
            </li>
            <li className='sidebar-list-item'>
            <Link to='/Home/Categories'>  <BsFillGrid3X3GapFill className='icon'/> Categories </Link>
                
            </li>
            <li className='sidebar-list-item'>
                
                <Link to='/Home/Customer'>  <BsPeopleFill className='icon'/> Customers </Link>
                
            </li>
            
            
            <li className='sidebar-list-item'>
                
            <Link to='/Home/Settings'> <BsFillGearFill className='icon'/> Settings </Link>
                
            </li>
            <li className='sidebar-list-item'>
                
            <Link>    <BsFileLock className='icon'/> Logout </Link>
                
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar