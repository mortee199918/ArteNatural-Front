import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../Styled/ArtworkDetail.css';

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
  {
    id: 3,
    artistName: "María López",
    title: "Flores silvestres",
    description: "Acuarela sobre papel, técnica húmeda sobre seco.",
    imageUrl: "https://www.floristeriamorris.com/wp-content/uploads/tipos-de-flores-silvestres.jpg",
    price: 95,
  },
];

const ArtworkDetail = () => {
  const { id } = useParams();
  const [artwork, setArtwork] = useState(null);
  const [artistWorks, setArtistWorks] = useState([]);

  useEffect(() => {
    // Buscar la obra por ID
    const found = mockArtworks.find(work => work.id === parseInt(id));
    if (found) {
      setArtwork(found);
      // Buscar otras obras del mismo artista (excluyendo la actual)
      const others = mockArtworks.filter(
        work => work.artistName === found.artistName && work.id !== found.id
      );
      setArtistWorks(others);
    }
  }, [id]);

  if (!artwork) {
    return (
      <div className="detail-container">
        <p className="not-found">Obra no encontrada</p>
        <Link to="/" className="btn-back">Volver al inicio</Link>
      </div>
    );
  }

  const handleBuy = () => {
    alert(`Comprando: ${artwork.title} por $${artwork.price}`);
    // Aquí iría tu lógica de compra
  };

  return (
    <div className="detail-container">
      <button className="btn-back" onClick={() => window.history.back()}>
        ← Volver
      </button>

      {/* Detalles de la obra */}
      <div className="artwork-detail">
        <img
          src={artwork.imageUrl.trim()}
          alt={artwork.title}
          className="detail-image"
        />
        <div className="detail-info">
          <h1 className="detail-title">{artwork.title}</h1>
          <p className="detail-artist">por <strong>{artwork.artistName}</strong></p>
          <p className="detail-description">{artwork.description}</p>
          <div className="detail-price">
            <span>Precio: </span>
            <strong>${artwork.price}</strong>
          </div>
          <button className="btn-buy-detail" onClick={handleBuy}>
            Comprar ahora
          </button>
        </div>
      </div>

      {/* Otras obras del artista */}
      {artistWorks.length > 0 && (
        <div className="artist-works">
          <h2>Otras obras de {artwork.artistName}</h2>
          <div className="works-grid">
            {artistWorks.map(work => (
              <Link key={work.id} to={`/artwork/${work.id}`} className="work-card">
                <img
                  src={work.imageUrl.trim()}
                  alt={work.title}
                  className="work-image"
                />
                <div className="work-info">
                  <h3>{work.title}</h3>
                  <p>${work.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtworkDetail;