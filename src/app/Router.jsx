import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from '../pages/Login';
;
const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route index element={<Login/>} />
            {/* <Route path="/page2" element={<Page2/>} /> */}
            <Route path="*" element={<div>404</div>} />
        </Routes>
</BrowserRouter>
);

export default Router;