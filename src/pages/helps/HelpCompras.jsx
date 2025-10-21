import { Granja, Lineup, Titulo, SubTitulo, Boton, Comentarios, Puntos } from "../../Styled/Helps";
import { Link } from "react-router-dom";

const HelpCompras = () => {
    return (
        <>
            <Titulo>Ayuda al Cliente con las compras</Titulo>
            <Granja>
                <Lineup>¿Necesitas ayuda? En Arte Natural nos importa mucho ayudar al cliente </Lineup>
                <SubTitulo>Ayuda al Comprador</SubTitulo>
                        <Puntos>
                            <li>
                                <Link to={"/Perfil"}>Perfil</Link>
                            </li>
                            <li>
                            <a>Con este enlace puedes entrar a la página de ayuda en el perfil para si no te acurdas de la contraseña o cambiar alguna cosa.</a>
                            </li>
                            <li>
                                <Link to={"/Register"}>Registro</Link>
                            </li>
                            <li>
                            <a>Con este enlace puedes entrar a la página de ayuda para si cuenta a sido bloqueada o quieres hacer una nueva cuenta te lleva el registro. </a>
                            </li>
                            <li>
                                <Link to={"/card"}>Carrito</Link>
                            </li>
                            <li>
                            <a>Con este enlace puedes entrar a la página de ayuda del carrito para comprovar que las compras que quieres funcione bien.</a>
                            </li>
                            <li>
                                <Link to={"/HelpPagos"}>Pagos</Link>
                            </li>
                            <li>
                            <a>Con este enlace puedes entrar a la página de ayuda para ayudar con la compra o venda de articulos en nuestra pàgina.</a>
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

export default HelpCompras;