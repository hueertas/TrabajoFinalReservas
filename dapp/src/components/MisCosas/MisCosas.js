import {drizzleReactHooks} from '@drizzle/react-plugin'
import MisDatos from "./MisDatos";
import {useParams, Link} from "react-router-dom";
import MisReservasBody from "./MisReservasBody";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import React, {useState} from 'react';
import moment from 'moment';
import MisReservasHead from "./MisReservasHead";
import TablaMisCosas from "./TablaMisCosas";


const {useDrizzle} = drizzleReactHooks;

export const MisCosas = () => {

    return <section className="AppMisCosas">
        <h2>MIS DATOS</h2>
        <MisDatos/>
        
    <div className="AppMisReservas">
    <h3>VER RESERVAS</h3>
    <div className="AppMisReservas1">
    <table className="TablaAppMisReservas">
        <MisReservasHead/>
        <MisReservasBody  />
       
    </table>
    </div>
    </div>
    </section>;
};

export const MiReserva = () => {

    const {useCacheCall} = useDrizzle();
    
    let {index} = useParams();
    const datos = useCacheCall("ReslabEtsit", "laboratoriosRegistrados", index);
 
    const [dateState, setDateState] = useState(new Date(moment().startOf('day')));
    const changeDate = (e) => {
        setDateState(e)
      }


    var myDate =  new Date(dateState); ; // Your timezone!
    var myEpoch = myDate.getTime()/1000.0;

    
    return <>


        <div className='AppMisCosasdiv'>

        <img className="fondoAzulMisCosas" src="/fondoAzul.png" alt='fondo'/>

            <h1 className='Selectcalendar'>Seleccione el día para reservar turno:</h1>

            <Calendar className='Selectcalendar'
            value={dateState}
            onChange={changeDate}/>

            <div className='diaselec'>

            <p>El día seleccionado es: <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>
           {/* <p>El día seleccionado en formato uint es : <b>{myEpoch}</b></p>*/}
            </div>
            <img className="leyenda1" src="/leyenda.png" alt='leyenda'/>

            <Link className='volverLab1' to="/miscosas"><img className="volver" src="/volver.png" alt='volver'/></Link>

            

        </div>
        <div className='AppMisCosasdiv1'> 
        <TablaMisCosas indexlab={index} fecha={myEpoch} NAsignatura={datos?.asignaura}></TablaMisCosas>

        </div>

        </>
    };


 





 


