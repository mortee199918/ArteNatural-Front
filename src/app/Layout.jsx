import { Outlet } from 'react-router-dom';
import  { useEffect, useState } from 'react';
import useToken from '../hooks/useToken';
import { Link } from 'react-router-dom';




const Layout = () => {

const [userRole, setUserRole] = useState();
const {deleteToken, token} = useToken();
const [isMenuOpen, setIsMenuOpen] = useState(false);
 const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(()=>{
    

  },[])
    return (

        <>
        
            <div>

                {/* Barra de navegación */}
                <nav className="navbar">
                    <div className="nav-brand">ArteNatural</div>
                    <div className="hamburger" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
                    <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <li><a href="/">Inicio</a></li>
                    {userRole === "artist" && (
                        <li><a href="/upload-work">Subir Obra</a></li>
                    )}
                    <li><a href="/Users">Galería</a></li>
                    {userRole === 'artist' && <li><a href="/my-works">Mis obras</a></li>}
                    <li><a href="/profile">Perfil</a></li>
                    <li>{token ? <a onClick={(e)=>{e.preventDefault(); deleteToken(); alert("sesion cerrada con exito") } }
          >Cerrar sesión</a>: <Link to={"/Login"}>Iniciar sesion</Link>}</li>
                    </ul>
                </nav>
                <Outlet></Outlet>
            </div>
        </>
    );
};

export default Layout;