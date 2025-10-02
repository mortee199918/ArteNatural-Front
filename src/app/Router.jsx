import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Artistas from '../pages/Artistas';
import Home from '../pages/Home';
const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route index element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Artistas" element={<Artistas />} />
            <Route path="/Home" element={<Home />} />
            <Route path="*" element={<div>404</div>} />
        </Routes>
    </BrowserRouter>
);

export default Router;