import React from 'react'
import Login from './Login'
import Browse from './Browse'
import SignUp from './SignUp';
import Form1  from './Form1';
import Payment from './Payment';
import Card from './Card';
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
          {
            path: "/SignUp",
            element: <div><SignUp/></div>,
            
          },
          {
            path: "/signup/regform",
            element: <div><Form1/></div>,
            
          },{
            path: "/signup/paymentPicker",
            element: <div><Payment/></div>,
            
          },
          {
            path: "/signup/card-payment",
            element: <div><Card/></div>,
            
          },

      ]);
  return (
    <> <RouterProvider router={router} /></>
  )
}

export default Body