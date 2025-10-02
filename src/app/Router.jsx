import { BrowserRouter, Navigate, Route, Routes, useNavigate} from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Artistas from '../pages/Artistas';
import Home from '../pages/Home'
const Router = ({auth}) => {
    return <BrowserRouter>
        <Routes>
            <Route index element={<Login/>} />
            <Route path="/Register" element={<Register/>} />
             <Route path="/Artistas" element={auth ? <Artistas/> : <Navigate to="/"/>} />
             <Route path="/Home" element={auth ? <Home/> : <Navigate to="/"/>} />
            <Route path="*" element={<div>404</div>} />
        </Routes>
</BrowserRouter>
};

export default Router;