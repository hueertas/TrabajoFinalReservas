
import {drizzleReactHooks} from '@drizzle/react-plugin'
import {useParams, Link} from "react-router-dom";
import LaboratoriosHead from "../Laboratorios/LaboratoriosHead";

import LaboratoriosReservaBody from "./LaboratoriosReservaBody";

import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import React, {useState} from 'react';
import moment from 'moment';

import TablaReservasLab from "./TablaReservasLab";




const {useDrizzle} = drizzleReactHooks;



   
   
   
export  const ReservasLabs = () => {

    
         
    


        return (
            <section className="AppLaboratorios">
             {/*<img className="laboratorios" src="/laboratorios.png"/>*/}
                <h2> Ver Reservas del laboratorio</h2>
                
                <div className='tablaAsignaturasdiv'>
                 <table className='tablaAsignaturas'>
                     <LaboratoriosHead/>
                     <LaboratoriosReservaBody />
                 </table>
                </div>
 
                <img className="covid" src="/covid free.png" alt='covid'/>
            </section>
        );
    };

    export const ReservasLab = () => {

        const {useCacheCall} = useDrizzle();
        
        let {index} = useParams();
        
        
       
        const datos = useCacheCall("ReslabEtsit", "laboratoriosRegistrados", index);
        /* const datos = useCacheCall("ReslabEtsit", "laboratoriosReservados", labindex,fechaindex);*/
        //const datospuesto = useCacheCall("ReslabEtsit", "puestosLaboratorioLength") || 0;
        const [dateState, setDateState] = useState(new Date(moment().startOf('day')));
        const changeDate = (e) => {
            setDateState(e)
          }
          
         
    
    
    
        var myDate =  new Date(dateState); ; // Your timezone!
        var myEpoch = myDate.getTime()/1000.0;
    
    
        
        return <>
    
    
            <div className='AppAsignaturadiv'>
            <img className="fondoAzulLab" src="/fondoAzul.png" alt='fondo'/>
                <header className="AppAlumno">
                    <h2>LABOARTORIO:
                    </h2>
                </header>
    
                
        
                <ul className='ListaAsignatura'>
                    
                    <li><b>Nombre:</b> {datos?.nombreL ?? "Desconocido"}</li>
                    <li><b>Asignatura</b> {datos?.asignaura ?? "Desconocido"}</li>
                    {/*<li><b>Puestos correspondientes:</b>{rows}</li>*/}
    
                    {/*<li><b>Info:</b> {index}</li>*/}
                </ul>
    
                <h1 className='SelectcalendarrlabS'>- Seleccione el día para reservar turno:</h1>
    
                <Calendar className='SelectcalendarLabs'
                value={dateState}
                onChange={changeDate}/>
    
                <div className='diaselec1'>
    
                <p>El día seleccionado es: <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>
                {/*<p>El día seleccionado en formato uint es : <b>{myEpoch}</b></p>*/}
                </div>
    
                
                <img className="leyenda" src="/leyenda.png" alt='leyend'/>
    
                <Link className='volverLab' to="/reservasLaboratorios"><img className="volver" src="/volver.png" alt='volver'/></Link>
    
            </div>
            <div className='AppReservaPuestos'> 
    
           
    
            <TablaReservasLab  indexlab={index} fecha={myEpoch} NAsignatura={datos?.asignaura}/>

    
             
    
            </div>
                
               {/*<Link to={`/reservarPuestos/${index}`}>Reservar el puesto </Link>*/}
    
    
          
               
        
               
    
            
           
            </>
        };
    
    
     


