import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styled/Home.css';



// Datos de ejemplo (más adelante vendrán de la API)
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
];

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  return (
    <div className="home-container">
    
      {/* Contenido principal */}
      <main className="main-content">
        <h1 className="page-title">Obras destacadas</h1>
        <div className="artworks-grid">
          {mockArtworks.map((artwork) => (
            <div key={artwork.id} className="artwork-card">
              <img
                src={artwork.imageUrl.trim()}
                alt={artwork.title}
                className="artwork-image"
              />
              <div className="card-body">
                <h3 className="artwork-title">{artwork.title}</h3>
                <p className="artist-name">por {artwork.artistName}</p>
                <p className="artwork-description">{artwork.description}</p>
                <div className="card-footer">
                  <span className="price">${artwork.price}</span>
                  <div className="card-buttons">
                    {/* Botón "Ver detalles" */}
                    <Link to={`/artwork/${artwork.id}`} className="btn-buy">
                      Ver detalles
                    </Link>
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