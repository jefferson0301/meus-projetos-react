import React from 'react'
import { Outlet } from 'react-router-dom'

const ComponentePadrao = () => {
  return (
    <div>
        {/* ComponentePadrao */}
        <Outlet/>
    </div>

    
  )
}

export default ComponentePadrao