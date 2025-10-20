import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useToken from '../hooks/useToken';
import { Link } from 'react-router-dom';
import { Navbar, Brand, Hamburguesa, Linked, GlobalStyles, Footer, DisabledCart } from '../Styled/LayoutStyles';
import { getUserFromToken } from '../services/user';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../pages/CartContext';




const Layout = () => {

    const { deleteToken, token } = useToken();
    const [user, setUser] = useState();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const { getItemCount } = useCart();
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
                    <Linked className={`nav-links ${isMenuOpen ? 'active' : ''}`} isCartDisabled={getItemCount() === 0}>
                        <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Inicio</Link></li>
                        {user?.roles[0].roleName === "ARTIST" &&
                            <li><Link to="/Gallery" onClick={() => setIsMenuOpen(false)}>Mi Galería</Link></li>}
                        <li><Link to="/Perfil" onClick={() => setIsMenuOpen(false)}>Perfil</Link></li>
                        <li><Link to='/open-gallery' onClick={() => setIsMenuOpen(false)}> Galería General</Link></li>
                        {/* {getItemCount() > 0 && ( */
                            <li>
                                {getItemCount() > 0 ? (
                                    <Link to="/cart" onClick={() => setIsMenuOpen(false)}>
                                        🛒 Carrito ({getItemCount()})
                                    </Link>
                                ) : (
                                    <DisabledCart>
                                        🛒 Carrito (0)
                                    </DisabledCart>
                                )}
                            </li>
                        /* )} */}
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
                <Footer>
                    <div><div>
                        <h2>Contacto</h2>
                        <ul>
                            <li>Whatsapp</li>
                            <li>+34 722643267</li>
                            <li> Carrer Berlin, 67 </li>
                            <li>artenatural@fundacioesplai.com</li>

                        </ul>
                    </div></div>
                    <div><div>
                        <h2>Ayuda</h2>
                        <ul>
                            <li><Link to={"/HelpPerfil"}>Perfil</Link></li>
                            <li><Link to={"/HelpArtist"}>Artistas</Link></li>
                            <li><Link to={"/HelpCompras"}>Compras</Link></li>
                            <li><Link to={"/HelpEncargos"}>Encargos</Link></li>
                            <li><Link to={"/HelpPagos"}>Pagos</Link></li>

                        </ul>
                    </div>
                        <div>
                            <h2>About</h2>
                            <ul>
                                <li>x</li>
                                <li>y</li>
                            </ul>
                        </div></div>
                </Footer>
            </div>
        </>
    );
};

export default Layout;