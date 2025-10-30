
import { Link } from 'react-router-dom';
import { GlobalStyles, Title, Main, ArtWorks, ArtCard, ArtImg, CardBody, ArtTitle, ArtName, Descripcion, CardFooter, Prince, CardBoton  } from '../Styled/HomeStyled';
import { useEffect, useState } from 'react';
import { getAllPublicProducts } from '../services/product';
import { apiurl } from '../services/api';






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
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllPublicProducts()
      .then(setProducts)
      .catch((err) => console.error("Error al cargar productos:", err));
  }, []);
  


  return (
    <div className="home-container">
    
      
      <Main>
        <Title>Obras destacadas</Title>
        <ArtWorks>
          {products.slice(0, 3).map((product) => (  
          <Link to={`/product/${product.id}`}>
            <ArtCard key={product.id} >
              <ArtImg src={apiurl +product.image}alt={product.title}/>
              <CardBody>
                <ArtTitle>{product.title}</ArtTitle>
                <Descripcion>{product.description}</Descripcion>
                <CardFooter>
                  <Prince>${product.price}</Prince>
                </CardFooter>
              </CardBody>
            </ArtCard>
          </Link>
          ))}
        </ArtWorks>
      </Main>
    </div>
  );
};

export default Home;