


import 'react-calendar/dist/Calendar.css';

import React, {} from 'react';
import TablaMisCosasHead from "./TablaMisCosasHead"
import TablaMisCosasBody from "./TablaMisCosasBody"





const TablaMisCosas = ({indexlab,fecha,NAsignatura}) => {
    



    return (
        <section className="AppMisCosasSection">
            <h2 className="ReservarPuestosTitulo">Ver mis reservas</h2>

            


            <div className="TablaReservarPuestos">
                <table>
                <TablaMisCosasHead />
                <TablaMisCosasBody indexlab={indexlab} fecha={fecha} NAsignatura={NAsignatura} />
                </table>
            </div>

           
            
        </section>

        
    );
};


export default TablaMisCosas;