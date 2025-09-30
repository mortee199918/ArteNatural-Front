import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route index element={<Login/>} />
            <Route path="/Register" element={<Register/>} />
            <Route path="*" element={<div>404</div>} />
        </Routes>
</BrowserRouter>
);

export default Router;