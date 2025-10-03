import { BrowserRouter, Navigate, Route, Routes, useNavigate} from 'react-router-dom';
import Login from '../pages/Login';
import Layout from './Layout';
import Register from '../pages/Register';
import Artistas from '../pages/Artistas';
import Home from '../pages/Home'
import Users from '../pages/Users'
const Router = ({auth}) => {
    return <BrowserRouter>
        <Routes>
            <Route index element={<Login/>} />
            <Route path="/Register" element={<Register/>} />
             
             <Route path="/Artistas" element={auth ? <Artistas/> : <Navigate to="/"/>} />
             {/* <Route path="" element={auth ? <Layout /> : <Login/>}> */}

             <Route path="/Home" element={auth ? <Home/> : <Navigate to="/"/>} />

             {/* <Route path="/home" element={<Home/>} /> */}
             <Route path="/users" element={<Users/>} />
             {/* </Route> */}
            <Route path="*" element={<div>404</div>} />
        </Routes>
        
</BrowserRouter>
};

export default Router;