import ReservarPuestosHead from "../ReservarPuestos/ReservarPuestosHead";


import 'react-calendar/dist/Calendar.css';

import React from 'react';
import TablaReservasLabBody from "./TablaReservasLabBody";


const TablaReservasLab = ({indexlab,fecha,NAsignatura}) => {
    

    
    
    

    return (
        <section className="AppReservaPuestosSection">
            <h2 className="ReservarPuestosTitulo">Ver Reservas Laboratorio </h2>


            <div className="TablaReservarPuestos">
                <table>
                    <ReservarPuestosHead />
                    <TablaReservasLabBody indexlab={indexlab} fecha={fecha} NAsignatura={NAsignatura} />
                </table>
            </div>

           
            
        </section>

        //<p> este es el laboratorio : {indexlab} en la fecha : {fecha}</p>
    );
};


export default TablaReservasLab;


//<p> este es el laboratorio : {indexlab} en la fecha : {fecha}</p>*/