import { Granja, Titulo, Puntos, MinTitulo } from "../../Styled/Helps";

const Contactos = () => {
    return (
        <>
            <Titulo>Contactos</Titulo>
            <Granja>
                <Puntos>
                    <li>
                        <MinTitulo>Teléfono Atencíon al clinte:</MinTitulo>
                        <p>+34 934528669</p>
                        <p>Horarios: (Hora Española)</p>
                        <p>Mañana 09:00 am - 02:00 pm </p>
                        <p>Tarde: 03:00 pm - 10:00 pm </p>

                    </li>
                    <li>
                        <MinTitulo>Teléfono de Marqueting:</MinTitulo>
                        <p> +34 722643267</p>
                        <p>Horarios: (Hora Española)</p>
                        <p>Mañana 09:00 am - 02:00 pm </p>
                        <p>Tarde: 03:00 pm - 10:00 pm </p>
                    </li>
                    <li>
                        <MinTitulo>Correo Atención al cliente:</MinTitulo>
                        <p>atcliente.artenatural@fundacioesplai.com</p>
                    </li>
                </Puntos>
            </Granja>
            
        </>
    );
};

export default Contactos;