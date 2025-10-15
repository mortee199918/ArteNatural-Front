import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useToken from '../hooks/useToken';
import { Link } from 'react-router-dom';
import { Navbar, Brand, Hamburguesa, Linked, GlobalStyles } from '../Styled/LayoutStyles';
import { getUserFromToken } from '../services/user';
import { useNavigate } from 'react-router-dom';




const Layout = () => {

    const { deleteToken, token } = useToken();
    const [user, setUser] = useState();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    useEffect(() => {
        getUserFromToken().then(setUser)
    }, [])
    return (

        <>
            <GlobalStyles />

            <div>

                {/* Barra de navegación */}
                <Navbar>
                    <Brand><img src="assets/logoArte.png" /></Brand>
                    <Hamburguesa onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </Hamburguesa>
                    <Linked className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                        <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Inicio</Link></li>
                        {user?.roles[0].roleName === "ARTIST" && <li><Link to="/Gallery" onClick={() => setIsMenuOpen(false)}>Mi Galería</Link></li>}
                        <li><Link to="/Perfil" onClick={() => setIsMenuOpen(false)}>Perfil</Link></li>
                        <li><Link to='/open-gallery' onClick={() => setIsMenuOpen(false)}> Galería General</Link></li>
                        <li>{token ? <a onClick={(e) => {
                            e.preventDefault();
                            deleteToken();
                            alert("sesion cerrada con exito");
                            setIsMenuOpen(false);
                            navigate("/Login");
                        }}
                        >Cerrar sesión</a> : <Link to={"/Login"}>Iniciar sesion</Link>}</li>

                    </Linked>
                </Navbar>
                <Outlet></Outlet>
            </div>
        </>
    );
};

export default Layout;