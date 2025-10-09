import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useToken from '../hooks/useToken';
import { Link } from 'react-router-dom';
import { Navbar, Brand,  Hamburguesa, Linked } from '../Styled/LayoutStyles';




const Layout = () => {

    const { deleteToken, token } = useToken();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    useEffect(() => {


    }, [])
    return (

        <>

            <div>

                {/* Barra de navegación */}
                <Navbar>
                    <Brand><img src="assets/logoArte.png"/></Brand>
                    <Hamburguesa onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </Hamburguesa>
                    <Linked className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/Gallery">Galería</Link></li>
                        <li><Link to="/Perfil">Perfil</Link></li>
                        <li>{token ? <a onClick={(e) => { e.preventDefault(); deleteToken(); alert("sesion cerrada con exito") }}
                        >Cerrar sesión</a> : <Link to={"/Login"}>Iniciar sesion</Link>}</li>


                    </Linked>
                </Navbar>
                <Outlet></Outlet>
            </div>
        </>
    );
};

export default Layout;