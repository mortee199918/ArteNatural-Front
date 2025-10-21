import { Link } from "react-router-dom";
import { Boton, Comentarios, Granja, Lineup, Puntos, SubTitulo, Titulo } from "../../Styled/Helps";

const HelpPerfil = () => {
    return (
        <>
        <Titulo>¿Necesitas ayuda con tu perfil?</Titulo>
            <Granja>
                <Lineup>¿Necesitas ayuda? En Arte Natural nos importa mucho ayudar al cliente como el vendedor </Lineup>
                <SubTitulo>Ayuda en el perfil</SubTitulo>
                <Puntos>
                    <li><Link to={"./Perfil"}>Contraseña</Link></li>
                    <li><Link to={"./Perfil"}>Usuario</Link></li>
                    <li>
                        <a>Con este enlace puedes entrar a la página de ayuda en el perfil para si no te acurdas de la contraseña o cambiar alguna cosa.</a>
                    </li>
                </Puntos>
                <p> En nuestra app es super importante la valoracion de nuestros clientes, desde el 2023 con la creacion de nuestra empresa nos importa mucho la opionion de nuestros clientes</p>
                <p>Dejanos tu comentario:</p>
                <Comentarios type="textarea" placeholder="Deje su comentario:"/>
                <Boton>Enviar</Boton>
            </Granja>
        </>
    );
};

export default HelpPerfil;