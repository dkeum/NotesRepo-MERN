import { Outlet } from 'react-router-dom'

import React from 'react'

const DashLayout = () => {
  return (
    <>
    <div className="dash-container">
        <Outlet/>
    </div>
    </>
  )
}

export default DashLayout