import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import DashboardLayout from './MainLayout/Dashboard'
import Home from './Viewsaga/Home'
import Inventory from './Viewsaga/MenuView/InventoryView'

export default function Route() {
  return useRoutes([
    {
        path: '/',
        element: <DashboardLayout />,
        children: [
            { path: 'Home', element: <Home /> },
            { path: 'Inventory', element: <Inventory /> }
        ]
    },
    { path: '*', element: <Navigate to='/404' replace /> }
])
}