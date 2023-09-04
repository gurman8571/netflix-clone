import React from 'react'
import Login from './Login'
import Browse from './Browse'

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  
 
const Body = () => {

    const router = createBrowserRouter([
        {
          path: "/",
          element: <div><Login/></div>,

        },
        {
            path: "/browse",
            element: <div><Browse/></div>,
            
          },
      ]);
  return (
    <> <RouterProvider router={router} /></>
  )
}

export default Body