import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Login from '../pages/Login';
import Layout from './Layout';
import Register from '../pages/Register';
import Home from '../pages/Home'
import Perfil from '../pages/Perfil';
import Gallery from '../pages/Gallery';
import useToken from '../hooks/useToken';
import { validateToken, unsetToken, setAuth } from '../services/auth';
import { useState, useEffect } from 'react';
import OpenGallery from '../pages/OpenGallery';
import ProductDetail from '../pages/ProductDetail';
import CheckoutPage from '../pages/CheckoutPage';
import CartPage from '../pages/CartPage';
import HelpPerfil from '../pages/helps/HelpPerfil';
import HelpArtist from '../pages/helps/HelpArtist';
import HelpCompras from '../pages/helps/HelpCompras';
import HelpEncargos from '../pages/helps/HelpEncargos';
import HelpPagos from '../pages/helps/HelpPagos';
import X from '../pages/helps/X';
import Y from '../pages/helps/Y';
import Contactos from '../pages/helps/Contactos';



const Router = () => {
  const [isAuthenticated, setAuthenticated] = useState()
  const { token, deleteToken } = useToken();

  useEffect(() => {
    if (token) {


      setAuth();
      validateToken().then((valid) => {
        if (!valid) {
          unsetToken()
          deleteToken()
        }
        setAuthenticated(valid)
      });
    }
  }
    , [token]);


  return <BrowserRouter basename='/ArteNatural-Front'>
    <Routes>
      
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Perfil" element={isAuthenticated ? <Perfil /> : <Login />} />
        <Route path="open-gallery" element={<OpenGallery />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="Gallery" element={<Gallery />} />
        <Route path='HelpPerfil' element={<HelpPerfil />} />
        <Route path='HelpArtist' element={<HelpArtist/>} />
        <Route path='HelpCompras' element={<HelpCompras/>} />
        <Route path='HelpEncargos' element={<HelpEncargos/>} />
        <Route path='HelpPagos' element={<HelpPagos/>} />
        <Route path='Contacto' element={<Contactos/>} />
        <Route path='X' element={<X/>} />
        <Route path='Y' element={<Y/>} />
       

      </Route>
      <Route path="*" element={<div>404</div>} />
    </Routes>

  </BrowserRouter>
};

export default Router;