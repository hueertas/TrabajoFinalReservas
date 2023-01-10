import {drizzleReactHooks} from '@drizzle/react-plugin'
import {useParams, Link} from "react-router-dom";
import LaboratoriosHead from "./LaboratoriosHead";
import LaboratoriosBody from "./LaboratoriosBody";

import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import React, {useState} from 'react';
import moment from 'moment';
import ReservarPuestos from '../ReservarPuestos/ReservarPuestos';


const {useDrizzle} = drizzleReactHooks;

export const Laboratorios = () => {
    
   
       
   
       return (
           <section className="AppLaboratorios">
            {/*<img className="laboratorios" src="/laboratorios.png"/>*/}
               <h2> Listado de Laboratorios</h2>
               
               <div className='tablaAsignaturasdiv'>
                <table className='tablaAsignaturas'>
                    <LaboratoriosHead/>
                    <LaboratoriosBody />
                </table>
               </div>

               <img className="covid" src="/covid free.png" alt='covid'/>
           </section>
       );
   };
   
   
   
   export const Laboratorio = () => {
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

    /*let rows = [];
    for (let i = 0; i < datospuesto; i++) {
        rows.push(<Laboratorio key={"ab-"+i} laboratorioIndex={i}/>);
       //rows.push(<tr><td>{i}</td></tr>);

    }*/
   
    
    return <>

        
        <div className='AppAsignaturadiv'>
        <img className="fondoAzulLab" src="/fondoAzul.png" alt='fondo'/>
            <header className="AppAlumno">
                <h2>LABORATORIO: {index}
                </h2>
            </header>

            
    
            <ul className='ListaAsignatura'>
                
                {/*<li><b>Nombre:</b> {datos?.nombreL ?? "Desconocido"}</li>*/}
                <li><b>Listado de asignaturas del {datos?.nombreL}:</b> </li>
                <p>{datos?.asignaura ?? "Desconocido"}</p>

                {/*<li><b>Info:</b> {index}</li>*/}
            </ul>
           
            <h1 className='Selectcalendar1'> Seleccione el día para reservar su turno:</h1>

         
            <Calendar className='Selectcalendar'
            value={dateState}
            onChange={changeDate}/>
         

            <div className='diaselec'>

            <p>El día seleccionado es: <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>
            {/*<p>El día seleccionado en formato uint es : <b>{myEpoch}</b></p>*/}
            </div>

            
            <img className="leyenda" src="/leyenda.png" alt='leyenda'/>

            <Link className='volverLab' to="/laboratorios"><img className="volver" src="/volver.png" alt='volver'/></Link>

        </div>
        <div className='AppReservaPuestos'> 

       

        <ReservarPuestos  indexlab={index} fecha={myEpoch} NAsignatura={datos?.asignaura}/>
     

         

        </div>
            
           {/*<Link to={`/reservarPuestos/${index}`}>Reservar el puesto </Link>*/}


      
           
    
           

        
       
        </>
    };


