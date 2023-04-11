import React from 'react'
import "./App.css";
import App from './App';
import Shirts from './container/Shirts';
import Mobile from './container/Mobile';
import Pants from './container/Pants';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
const Home = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App/>}>
            
        </Route>
        <Route path="/Mobile/:id/:desc" element={<Mobile/>}>
            Mobile
        </Route>
        <Route path="/Shirt/:id/:desc" element={<Shirts/>}>
            shirts
        </Route>
        <Route path="/Pant/:id/:desc" element={<Pants/>}>
            Pants
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Home