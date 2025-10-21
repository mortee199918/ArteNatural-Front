
import { Link } from 'react-router-dom';
import { Title, Main, ArtWorks, ArtCard, ArtImg, CardBody, ArtTitle, ArtName, Descripcion, CardFooter, Prince, CardBoton  } from '../Styled/HomeStyled';




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
  


  return (
    <div className="home-container">
    
      
      <Main>
        <Title>Obras destacadas</Title>
        <ArtWorks>
          {mockArtworks.map((artwork) => (
            <ArtCard key={artwork.id} >
              <ArtImg src={artwork.imageUrl.trim()}alt={artwork.title}/>
              <CardBody>
                <ArtTitle>{artwork.title}</ArtTitle>
                <ArtName>por {artwork.artistName}</ArtName>
                <Descripcion>{artwork.description}</Descripcion>
                <CardFooter>
                  <Prince>${artwork.price}</Prince>
                  <CardBoton>
                    
                    <Link to={`/artwork/${artwork.id}`} className="btn-buy">
                      Ver detalles
                    </Link>
                  </CardBoton>
                </CardFooter>
              </CardBody>
            </ArtCard>
          ))}
        </ArtWorks>
      </Main>
    </div>
  );
};

export default Home;