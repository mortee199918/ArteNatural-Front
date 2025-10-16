import styled from "@emotion/styled";

// Reutilizamos el mismo estilo del título (ya lo tenías)
export const Title = styled.h1`
  background-color: var(--primary-bg);
  color: var(--text-color);
  border-radius: 30px;
  width: fit-content;
  text-align: center;
  margin: 80px auto 2rem auto;
  font-size: 2.5em;
  text-shadow: 2px 2px 4px #000000;
  padding: 0.5rem 1.5rem;
`;

// 👇 Nueva tarjeta estilo "Home", pero solo para imagen
export const GalleryCard = styled.div`
  background-color: var(--primary-bg);
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-6px);
  }
`;

// 👇 Imagen con el mismo estilo que ArtImg de Home
export const GalleryImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
`;

// 👇 Contenedor de la galería (mejor que el grid fijo de 3 columnas)
export const ContainerDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 2rem;
`;