import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Login from '../pages/Login';
import Layout from './Layout';
import Register from '../pages/Register';
import Artistas from '../pages/Artistas';
import Home from '../pages/Home'
import Users from '../pages/Users'
import ArtworkDetail from '../pages/ArtworkDetail'
const Router = ({auth}) => {
    return <BrowserRouter>
        <Routes>
            <Route path="/Login" element={<Login/>} />
            <Route path="/Register" element={<Register/>} />
            <Route path="" element={ <Layout />}> 
                <Route index element={<Home/>} />
                <Route path="/Artistas" element={auth ? <Artistas/> : <Login/>} />
                <Route path="/users" element={ <Users/>} />
                <Route path="/artwork/:id" element={<ArtworkDetail />} />

             </Route>
            <Route path="*" element={<div>404</div>} />
        </Routes>
        
</BrowserRouter>
};

export default Router;