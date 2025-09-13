import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
import Adhkar from './pages/Adhkar'
import Prayers from './pages/Prayers'
import { RouterProvider } from 'react-router-dom'

const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:'',
          element:<Prayers/>
        },
        {
          path:'adhkar',
          element:<Adhkar/>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App