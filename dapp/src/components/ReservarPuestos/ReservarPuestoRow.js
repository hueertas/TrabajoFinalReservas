import {drizzleReactHooks} from '@drizzle/react-plugin';

import BotonReservar from './BotonReservar';

import BotonQuitarReserva from "./BotonQuitarReserva";


const {useDrizzle,useDrizzleState} = drizzleReactHooks;

const ReservarPuestoRow =  ({indexlab,puestoIndice, fecha,NAsignatura}) =>  {
    const {useCacheCall} = useDrizzle();

    const drizzleState = useDrizzleState(state=>state);
    let miaddress = drizzleState.accounts[0];

 
  
    let puestoName = useCacheCall("ReslabEtsit", "puestosRegistrados", puestoIndice)?.nombre;


    

    
   
    let rows = useCacheCall(['ReslabEtsit'], call => {
        if (!puestoName) { return []; }

    const el = call("ReslabEtsit", "turnosLength") || 0;
    let rows=[];
    
    for (let i = 0; i < el; i++) {

        const reserva = call("ReslabEtsit","datosReservaPorLabPuestoTurno",puestoIndice,fecha,i);
       
       

            rows.push(
               <td key={"p2-" + puestoIndice + "-" + el}>

                 
            
                  
                        
                    
                        {typeof reserva === "undefined" ?   <img className="reloj" src="/reloj.png" alt='reloj'/> 
                            :     reserva === miaddress ? <BotonQuitarReserva  puestoIndice={puestoIndice} fecha={fecha} turnoIndex={i} NAsignatura={NAsignatura}/> 
                            :     reserva === "0x0000000000000000000000000000000000000000" ?  <BotonReservar  puestoIndice={puestoIndice} fecha={fecha} turnoIndex={i} NAsignatura={NAsignatura}/>
                            :    <BotonQuitarReserva  puestoIndice={puestoIndice} fecha={fecha} turnoIndex={i} NAsignatura={NAsignatura}/> 
                            }

                       
                  
                      
                       
                        
                       
                 
                    
                    
                </td>
               
               
                
            );
            
        }
        return rows;
    });

 
  
    return <>

        <tr key={"d" + puestoIndice}>
                
                {/*<th>P<sub>{puestoIndice}</sub></th>*/}
                <td>{puestoName}</td>
                {rows}
                
        </tr>
         
       
        { /*<p>El día seleccionado es: <b>{moment(fecha).format('MMMM Do YYYY')} y el puesto es : {puestoName}</b></p>*/}

       

         </>
        
};

export default ReservarPuestoRow;



/*                    {reserva === miaddress ? <BotonQuitarReserva  puestoIndice={puestoIndice} fecha={fecha} turnoIndex={i}/> : <BotonReservar  puestoIndice={puestoIndice} fecha={fecha} turnoIndex={i}/>}
                    adress {miaddress} {typeof miaddress}
                    reserva
                    {reserva ? reserva : "xxx"} {typeof reserva} {typeof reserva?.dirAlumno}
                    fecha {fecha}*/