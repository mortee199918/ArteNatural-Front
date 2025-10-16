// src/pages/OpenGallery.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Title, ContainerDiv, GalleryCard, GalleryImage } from "../Styled/GalleryStyles";
import { getAllPublicProducts } from "../services/product"; // ✅ nuevo servicio

const OpenGallery = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllPublicProducts()
      .then(setProducts)
      .catch((err) => console.error("Error al cargar productos:", err));
  }, []);

  return (
    <>
      <Title>Galería de Artistas</Title>
      <ContainerDiv>
        {products.length > 0 ? (
          products.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
              <GalleryCard>
                <GalleryImage
                  src={`http://localhost:8082${product.image}`}
                  alt={product.title}
                />
              </GalleryCard>
            </Link>
          ))
        ) : (
          <p>No hay productos disponibles.</p>
        )}
      </ContainerDiv>
    </>
  );
};

export default OpenGallery;