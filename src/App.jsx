import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MasterLayout from './MasterLayout/MasterLayout'
import NotFound from './NotFound/NotFound'
import Home from './Home/Home'
import Popular from './Popular/Popular'
import Work from './Work/Work'
import ChooseUs from './ChooseUs/ChooseUs'
import Testimonials from './Testimonials/Testimonials'
import Contacts from './Contacts/Contacts'
import MostPopular from './MostPopular/MostPopular'
import Details from './Details/Details'
import Images from './assets/imges/Images'

function App() {
  let routers=createBrowserRouter([
    {
      path:'/',
      element:<MasterLayout/>,
      errorElement:<NotFound/>,
      children:[
        {index:true,element:<Home/>,
          
        },
        {path:'home',element:<Home/>
        //   ,
        //   children:[
        // {path:'popular',element:<Popular/>},
        // {path:'details',element:<Details/>}
        //   ]
        },
        {path:'work',element:<Work/>},
        {path:'choosus',element:<ChooseUs/>},
        {path:'testimonials',element:<Testimonials/>},
        {path:'contacts',element:<Contacts/>},
        {path:'mostPopular',element:<MostPopular/>},
        {path:'popular',element:<Popular/>},
        {path:'details',element:<Details/>}
          
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
      
    </>
  )
}

export default App
