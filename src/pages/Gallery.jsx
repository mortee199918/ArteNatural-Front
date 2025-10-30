import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Title, ContainerDiv, GalleryCard, GalleryImage } from "../Styled/GalleryStyles";
import { getUserImages } from "../services/upload";
import {apiurl} from "../services/api"


const Gallery = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        getUserImages()
            .then((data) => setImages(data))
            .catch((err) => console.error("Error al cargar las imágenes:", err));
    }, []);

    return (
        <>
            <Title>Mi GALERíA</Title>
            <ContainerDiv>
                {images.length > 0 ? (
                    images.map((imgUrl, index) => (
                        <Link key={index}  style={{ textDecoration: 'none' }}>
                            <GalleryCard>
                                <GalleryImage
                                    src={apiurl + imgUrl}
                                    alt={`imagen-${index}`}
                                />
                            
                            </GalleryCard>
                        </Link>
                    ))
                ) : (
                    <p>No has subido imágenes todavía.</p>
                )}
            </ContainerDiv>
        </>
    );
};

export default Gallery;
