import React from 'react'
import { Outlet } from 'react-router-dom'
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from '../Home/Home'
import Work from '../Work/Work'
import MostPopular from '../MostPopular/MostPopular'
import ChooseUs from '../ChooseUs/ChooseUs';
import Testimonials from '../Testimonials/Testimonials';
import Contacts from '../Contacts/Contacts';
import Footer from '../Footer/Footer';

export default function MasterLayout() {
  return (
    <>
    <Outlet/>
    </>
  )
}
