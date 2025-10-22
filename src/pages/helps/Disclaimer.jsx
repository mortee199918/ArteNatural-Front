import { Link } from "react-router-dom";
import { Titulo,Granja, SubTitulo, Warning, Center } from "../../Styled/Helps";

const Y = () => {
    return (
        <>
            <Titulo>Resposibilidad</Titulo>
            <Granja>
                <SubTitulo>1. Carácter de Sitio Web de Muestra</SubTitulo>
                <Center>El usuario debe tener en cuenta que www.artenatural.com es, en este momento, un sitio web de demostración, un portfolio o una prueba de concepto.</Center>

                <Center>
                    <b>Propósito:</b>
                     El objetivo de esta web es mostrar las capacidades de diseño, la presentación de obras de arte y la potencial interfaz para la gestión de encargos de Arte Natural.</Center>

                <Center>
                    <b>Contenido:</b> 
                    Las obras de arte mostradas, precios y descripciones se presentan a modo de ejemplo ficticio o como parte de un catálogo de referencia.</Center>
            <SubTitulo>2. Limitación y Exclusión de Venta</SubTitulo>
                <Warning> 
                    <strong> www.artenatural.con NO está realizando actualmente transacciones de venta reales de obras de arte ni de encargos personalizados a través de esta plataforma, salvo que se indique explícitamente lo contrario y se habilite un proceso de pago formal. </strong> </Warning>

                <Center> 
                    <b> Proceso de Compra: </b> 
                    Cualquier funcionalidad de "Añadir al Carrito", "Comprar Ahora" o "Solicitar Encargo" puede ser meramente ilustrativa o puede dirigir a un formulario de contacto para consultas informativas. No constituye una oferta de venta vinculante ni la formación de un contrato de compraventa. </Center>

                <Center>
                    <b> Precios y Disponibilidad: </b>
                    Los precios y la disponibilidad indicados son de carácter simulado y no reflejan necesariamente los precios finales o la disponibilidad real de las obras si el sitio pasara a ser operativo. </Center>

                <Center> 
                    <b> Responsabilidad: </b> 
                    Arte Natarul no asume ninguna responsabilidad por las expectativas de compra generadas, ni por cualquier daño o perjuicio derivado de la imposibilidad de adquirir los productos mostrados en este sitio web de muestra. </Center>

                <em> Si tienes interés en alguna obra o encargo, por favor, utiliza el 
                    <Link to={"/Contacto"}>formulario de contacto</Link> 
                    para consultar directamente la disponibilidad y los precios reales. </em>
            
            </Granja>
        </>
    );
};

export default Y;