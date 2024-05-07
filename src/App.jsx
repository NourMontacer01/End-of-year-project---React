import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './Components/Login/LoginPage'
import Accueil from './Components/Accueil/Accueil.jsx'
import Register from './Components/Register/Register'
import Header from './Components/DashBoard/Header'
import Sidebar from './Components/DashBoard/Sidebar'
import Home from './Components/DashBoard/Home'
import Products from './Components/Products/Products'
import ProductDetails from './Components/Products/ProductDetails'
import AddPoduct from './Components/Products/AddPoduct'
import ModifyProduct from './Components/Products/ModifyProduct'
import Customers from './Components/Customers/Customers'
import AddCustomer from './Components/Customers/AddCustomer'
import ModifyCustomer from './Components/Customers/ModifyCustomer'
import SingleProduct from './Components/Products/SingleProduct'
import Left from './Components/Login/Left'
import Settingitem from './Components/Settings/Settingitem'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Application from './Components/Application'
import Settings from './Components/Settings/Settings'
import Categories from './Components/Categories/Categories'
import SellingPage from './Components/SellingPage/SellingPage'
function App() {
  const Accounts =[ 
    { 
      email : "nourmontacer10@gmail.com",
      password:"abc123."
    }
  ]
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (  
    
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Accueil/>}/>
          <Route path='/Home' element={<Application/>}>
            <Route index element={<Home/>}/>
              <Route path='/Home/Customer' element={<Customers/>}/>
              <Route path='/Home/Products' element={<Products/>}/>
              <Route path='/Home/Settings' element={<Settings/>}/>
              <Route path='/Home/Categories' element={<Categories/>}/>
              <Route path='/Home/Selling' element={<SellingPage/>}/>


              
            
          </Route>
        </Route>
        
      </Routes>
      </BrowserRouter>
    </div>
  
    //<LoginPage props={Accounts}/>
  )
}

export default App
