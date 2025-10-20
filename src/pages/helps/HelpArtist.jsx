import { Granja, Puntos, SubTitulo, Titulo, Boton, Comentarios, Lineup } from "../../Styled/Helps";
import { Link } from "react-router-dom";

const HelpArtist = () => {
    return (
        <>
          <Titulo> Artista Info </Titulo>
          <Granja>
            <Lineup>¿Necesitas ayuda? En Arte Natural nos importa mucho ayudar al cliente como el vendedor</Lineup>
            <SubTitulo>Ayuda el Artista</SubTitulo>
                
                    <Puntos>
                        <li>
                            <Link to={'/Perfil'}>Usuario</Link>
                        </li>
                        <li>
                            <Link to={'/Perfil'}>Perfil</Link>
                        </li>
                        <li>
                            <Link to={'/HelpPagos'}>Pagos</Link>
                        </li>
                        <li>
                            <Link to={'/HelpEncargos'}>Encargos</Link>
                        </li>
                        {/* <li>
                            <Link></Link>
                        </li> */}
                    </Puntos>
                    <p> En nuestra app es super importante la valoracion de nuestros clientes, desde el 2023 con la creacion de nuestra empresa nos importa mucho la opionion de nuestros clientes</p>
                    <p>Dejanos tu comentario:</p>
                    <Comentarios type="textarea" placeholder="Deje su comentario:"/>
                    <Boton>Enviar</Boton> 
          </Granja>
 
        </>
    );
};

export default HelpArtist;