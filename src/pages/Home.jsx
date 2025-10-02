import React, { useState, useEffect } from 'react';
import '../Styled/Home.css'; // Importamos el CSS personalizado
import useAuth from "../hooks/useAuth";

// Datos de ejemplo (en tu app real vendrían de una API o contexto)
const mockArtworks = [
  {
    id: 1,
    artistName: "María López",
    title: "Atardecer en la playa",
    description: "Óleo sobre lienzo, inspirado en mis vacaciones en la costa.",
    imageUrl: "https://content.arquitecturaydiseno.es/medio/2023/05/30/el-nacimiento-de-venus-sandro-botticelli-1482-1485_5a513a30_230530120556_1720x1080.jpg",
    price: 120,
  },
  {
    id: 2,
    artistName: "Carlos Ruiz",
    title: "Retrato en carboncillo",
    description: "Dibujo realista hecho a mano con carboncillo premium.",
    imageUrl: "https://content.arquitecturaydiseno.es/medio/2023/05/31/creacion-de-adan-en-la-capilla-sixtina-miguel-angel-buonarroti-1508-1512_5a516deb_230531142003_2000x1141.jpg",
    price: 80,
  },
  // Agrega más obras si quieres
];

const Home = () => {
  const { userRole } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Simulación de autenticación (reemplaza con tu lógica real)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleBuy = (artwork) => {
    alert(`Comprando: ${artwork.title} por $${artwork.price}`);
    // Aquí iría tu lógica de compra (API, carrito, etc.)
  };

  const handleMessage = (artistName) => {
    alert(`Enviando mensaje a ${artistName} para un encargo personalizado.`);
    // Aquí iría tu lógica de mensajes (WebSocket, API, etc.)
  };

  return (
    <div className="home-container">
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

      {/* Contenido principal */}
      <main className="main-content">
        <h1 className="page-title">Obras destacadas</h1>
        <div className="artworks-grid">
          {mockArtworks.map((artwork) => (
            <div key={artwork.id} className="artwork-card">
              <img src={artwork.imageUrl} alt={artwork.title} className="artwork-image" />
              <div className="card-body">
                <h3 className="artwork-title">{artwork.title}</h3>
                <p className="artist-name">por {artwork.artistName}</p>
                <p className="artwork-description">{artwork.description}</p>
                <div className="card-footer">
                  <span className="price">${artwork.price}</span>
                  <div className="card-buttons">
                    <button
                      className="btn-buy"
                      onClick={() => handleBuy(artwork)}
                    >
                      Comprar
                    </button>
                    <button
                      className="btn-message"
                      onClick={() => handleMessage(artwork.artistName)}
                    >
                      Mensaje
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;