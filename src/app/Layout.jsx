import useAuth from '../hooks/useToken';
import  { useState } from 'react';




const Layout = () => {

const { userRole } = useAuth();
const [isMenuOpen, setIsMenuOpen] = useState(false);
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
                    <li><a href="/gallery">Galería</a></li>
                    {userRole === 'artist' && <li><a href="/my-works">Mis obras</a></li>}
                    <li><a href="/profile">Perfil</a></li>
                    <li><a href="/logout">Cerrar sesión</a></li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Layout;