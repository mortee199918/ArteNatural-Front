
import { Link } from 'react-router-dom';
import {Title, ContainerDiv, Imagen} from '../Styled/GalleryStyles';
import foto1 from '../Styled/FotospruebaUsers/foto1.webp';
import foto2 from '../Styled/FotospruebaUsers/foto2.webp';
import foto3 from '../Styled/FotospruebaUsers/foto3.jpg';
import foto4 from '../Styled/FotospruebaUsers/foto4.jpg';





const Gallery = () => {





    return (
        <>

            <Title>ArtisticWall</Title>
            <ContainerDiv>
                <Link to={'/Artistas'}><Imagen src={foto1}  /></Link>
                <Link to={'/Artistas'}><Imagen src={foto2}  /></Link>
                <Link to={'/Artistas'}><Imagen src={foto3}  /></Link>
                <Link to={'/Artistas'}><Imagen src={foto4}  /></Link>
            </ContainerDiv>




        </>
    );
};

export default Gallery;