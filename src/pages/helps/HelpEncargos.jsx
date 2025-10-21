import { Granja, Puntos, SubTitulo, Titulo, Boton, Comentarios, Lineup } from "../../Styled/Helps";
import { Link } from "react-router-dom";

const HelpEncargos = () => {
    return (
        <>
            <Titulo> Ayuda con los Encargos</Titulo>
            <Granja>
                <Lineup>¿Necesitas ayuda? En Arte Natural nos importa mucho ayudar al cliente como el vendedor</Lineup>
                <SubTitulo>Ayuda al Artista</SubTitulo>
                    <Puntos>
                        <li>
                            <Link to={"/HelpCompras"}>Compras</Link>
                        </li>
                        <li>
                            <a>Con este enlace puedes entrar a la página de ayuda de compras para ayudarte en lo necesites.</a>
                        </li>
                        <li>
                            <Link to={"/HelpPagos"}> Pagos </Link>
                        </li>
                        <li>
                            <a>Con este enlace puedes entrar a la página de ayuda en los pagos para ayudarte en lo necesites.</a>
                        </li>
                        <li>
                            <a href="https://www.dhl.com/es-es/home.html" target="_blank" rel="noopener noreferrer">Envios</a>
                        </li>
                        <li>
                            <a>Con este enlace puedes entrar a la página de ayuda en los pedidos y envios para ayudarte en lo necesites aqui teneis la pagina web de DHL para que mireis si vuestro pedido se enviado o no.</a>
                        </li>
                    </Puntos><br/>
                <p> En nuestra app es super importante la valoracion de nuestros clientes, desde el 2023 con la creacion de nuestra empresa nos importa mucho la opionion de nuestros clientes</p>
                <p>Dejanos tu comentario:</p>
                <Comentarios type="textarea" placeholder="Deje su comentario:"/>
                <Boton>Enviar</Boton>
            </Granja>
        </>
    );
};

export default HelpEncargos;