import { Granja, Puntos, SubTitulo, Titulo, Boton, Comentarios, Lineup } from "../../Styled/Helps";
import { Link } from "react-router-dom";


const HelpPagos = () => {
    return (
        <>
          <Titulo></Titulo>
          <Granja>
            <Lineup>¿Necesitas ayuda? En Arte Natural nos importa mucho ayudar al cliente como el vendedor</Lineup>
                <SubTitulo>Ayuda al Artista</SubTitulo>
                    <Puntos>
                        <li>
                            <Link to={"./product"}>Encargos</Link>
                        </li>
                        <li>
                            <a>Con este enlace puedes entrar a la página mirar que el encargo sea como lo pidiste.</a>
                        </li>
                        <li>
                            <Link to={"./card"}>Compras</Link>
                        </li>
                        <li>
                            <a>Con este enlace puedes entrar a la página para mirar si los encargos o la arte que es comprado sea la deseada antes de comprarlo ¡Atentos mirar bien que es lo quereis!</a>
                        </li>
                        <li>
                            <a>Metedo de pago:</a>
                            
                        </li>
                        <li>
                            <a>Con este enlace puedes entrar a la páginas de ayuda en vuestros metodos de pago que podeis hacer en nuestra pàgina web</a>
                        </li>
                        <li>
                            <a href="https://www.mastercard.es/es-es/consumidores/formas-de-pago/click-to-pay.html" target="_blank" rel="noopener noreferrer">Masterdcard</a>

                        </li>
                        <li>
                            <a href="https://www.visa.es/paga-con-visa/seguridad-en-tus-pagos/retroceso-de-cargo.html"target="_blank" rel="noopener noreferrer">Visa </a>
                        </li>
                        <li>
                            <a  href="https://www.americanexpress.com/es/beneficios/centro-de-seguridad/proteccion-contra-fraude/?inav=es_menu_cards_compras_seguras" target="_blank" rel="noopener noreferrer">AmericanExpres</a>
                        </li>
                        <li>
                            <a href="https://www.paypal.com/es/home" target="_blank" rel="noopener noreferrer">Paypal</a>
                        </li>
                        
                    </Puntos> <br/>
                <p> En nuestra app es super importante la valoracion de nuestros clientes, desde el 2023 con la creacion de nuestra empresa nos importa mucho la opionion de nuestros clientes</p>
                <p>Dejanos tu comentario:</p>
                <Comentarios type="textarea" placeholder="Deje su comentario:"/>
                <Boton>Enviar</Boton>
            </Granja>  
        </>
    );
};

export default HelpPagos;