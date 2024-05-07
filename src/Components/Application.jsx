import React from 'react'
import Outlet from './Layout/Layout'
import Sidebar from './DashBoard/Sidebar'
const Application = () => {
  return (
    <div style={{display:'flex'}}>
        <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default Application
