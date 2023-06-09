import React from 'react'
import ReactDOM from 'react-dom/client'

import Home from './pages/Home'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Register from './pages/Register';
import Login from './pages/Login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
