import ReservarPuestosHead from "./ReservarPuestosHead";
import ReservarPuestosBody from "./ReservarPuestosBody";

import 'react-calendar/dist/Calendar.css';

import React, {} from 'react';



const ReservarPuestos = ({indexlab,fecha,NAsignatura}) => {
    

    
    
    

    return (
        <section className="AppReservaPuestosSection">
            <h2 className="ReservarPuestosTitulo">RESERVE AQUÍ SU PUESTO: </h2>
            <h2 className="ReservarPuestosNota">Nota: Sólo se podrá reservar un máximo de tres turnos por día. Cualquier duda consulte con el administrador de la dApp. Para ello pulse Contacto en la navegación de la parte izquierda.</h2>

            <div className="TablaReservar">
                <table className="TablaReservarPuestos">
                    <ReservarPuestosHead />
                    <ReservarPuestosBody indexlab={indexlab} fecha={fecha} NAsignatura={NAsignatura} />
                </table>
            </div>

           
            
        </section>

        //<p> este es el laboratorio : {indexlab} en la fecha : {fecha}</p>
    );
};


export default ReservarPuestos;


//<p> este es el laboratorio : {indexlab} en la fecha : {fecha}</p>