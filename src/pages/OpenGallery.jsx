import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Title, ContainerDiv, Imagen } from "../Styled/GalleryStyles";
import { getAllImages } from "../services/upload";

const OpenGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getAllImages()
      .then((data) => setImages(data))
      .catch((err) => console.error("Error al cargar las imágenes:", err));
  }, []);

  return (
    <>
      <Title>Galería de Artistas</Title>
      <ContainerDiv>
        {images.length > 0 ? (
          images.map((imgUrl, index) => (
            <Link key={index} to={"/ArtistGallery"}>
              <Imagen
                src={`http://localhost:8082${imgUrl}`}
                alt={`imagen-${index}`}
              />
            </Link>
          ))
        ) : (
          <p>No hay imágenes subidas todavía.</p>
        )}
      </ContainerDiv>
    </>
  );
};

export default OpenGallery;
