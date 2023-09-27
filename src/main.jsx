import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  

} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Donation from './components/Donation/Donation';
import Statistics from './components/Statistics/Statistics';
import DonationDetails from './components/DonationDetails/DonationDetails';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        loader: () => fetch('../public/donationdata.json'),
        element:<Home></Home>
      },
      {
        path:'/donate',
        element:<Donation></Donation>
      },
      {
        path:'/statistics',
        loader: () => fetch('../public/donationdata.json'),
        element:<Statistics></Statistics>
        
      },
      {
        path:'/donatedata/:id',
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch('../public/donationdata.json')
      }
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
