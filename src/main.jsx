import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Home';
import Read from './Read';
import Update from './Update';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Root></Root> ,
    children: [
      {
        path: "/",
        element: <Home></Home>  ,
      },
      {
        path: "/reads",
        element:  <Read></Read>   ,
    
      },
      {
        path: "/update/:id",
        element:   <Update></Update> ,
        loader: ({params})=> fetch(`http://localhost:5000/users/${params.id}`)
    
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
