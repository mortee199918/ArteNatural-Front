import  { useState } from 'react';
import '../Styled/Users.css'; 
import useAuth from '../hooks/useToken';
import foto1 from '../Styled/FotospruebaUsers/foto1.webp';
import foto2 from '../Styled/FotospruebaUsers/foto2.webp';
import foto3 from '../Styled/FotospruebaUsers/foto3.jpg';
import fota4 from '../Syled/FotospruebaUsers/foto4.jpg';
import { Link } from 'react-router-dom';



 

const Users = () => {
    const { userRole } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Simulación de autenticación (reemplaza con tu lógica real)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
            <div>
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
            <h1 className='Title'>ArtisticWall</h1>
            <div className='contorno-div'>
                <p className='contorno-imagen'><Link to={'/Artistas'}><img src={foto1} className='container-imagen' /></Link></p>
                 <p className='contorno-imagen'><Link to={'/Artistas'}><img src={foto2} className='container-imagen' /></Link></p>
                 <p  className='contorno-imagen'><Link to={'/Artistas'}><img src={foto3} className='container-imagen' /></Link></p>
                  <p> className='contorno-imagen'><Link to={'/Artistas'}><img src={foto4} className='container-imagen' /></Link></p>
            </div>

        </>
    );
};

export default Users;