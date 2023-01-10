import {useState} from "react";

import {drizzleReactHooks} from '@drizzle/react-plugin'

const {useDrizzle, useDrizzleState} = drizzleReactHooks;
/*const SoloProfesor = ({children}) => {
    const {useCacheCall} = useDrizzle();
    const drizzleState = useDrizzleState(state => state);

    const profesorAddr = useCacheCall("ReslabEtsit", "profesorP");

    if (profesorAddr !== drizzleState.accounts[0]) {
        return <p>NO SOY EL PROFESOR</p>
    }
    return <>
        {children}
    </>

};
*/


   
    

/*
PENDIENTE DE INVESTIGAR:
Si se usa useCacheSend, se envian varias transacciones cada vez que se hace un submit del formulario.
El problema esta relacionado con actualizar el estado del stackIds dentro de la implementacion de ese hook.
 */

const BotonReservar = ({puestoIndice,fecha,turnoIndex,NAsignatura}) => {
    const {drizzle} = useDrizzle();

    // Obtener el status de la ultima transaccion enviada:
    const { transactionStack, transactions } = useDrizzleState(drizzleState => ({
        transactionStack: drizzleState.transactionStack,
        transactions: drizzleState.transactions
    }));
    const [lastStackID, setLastStackID] = useState(undefined)
    const txObject = transactions[transactionStack[lastStackID] || 'undefined'];
    
    
     
     
    const puestoxIndice= Number(puestoIndice);
    const fechax= Number(fecha);
    const turnoxIndex= Number(turnoIndex);
    
  
    
     

    return (<article className="AppMisDatos">
       
      
       {/*{typeof puestoxIndice}*/}


                <button key="submit" className="pure-button" type="button"
                        onClick={ev => {
                            ev.preventDefault();
                           
                            //const stackId = drizzle.contracts.ReslabEtsit.methods.guardarReserva.cacheSend(puestoxIndice,1655416800,4);
                            const stackId = drizzle.contracts.ReslabEtsit.methods.guardarReserva.cacheSend(puestoxIndice,fechax,turnoxIndex,NAsignatura);
                            setLastStackID(stackId);
                            //console.log(puestoIndice,fecha,turnoIndex,"eaaaaaaaa")
                            console.log(typeof puestoxIndice,typeof fechax,typeof turnoxIndex,"reseervando")
                            console.log(puestoxIndice, fechax, turnoxIndex,"probar")
                            console.log(puestoIndice, fecha, turnoIndex,"probar2")
                            console.log(typeof puestoIndice,typeof fecha,typeof turnoIndex,"reseervando2")
                            
                        }}>
                   
                  <img className="reservaLibre" src="/reservaLibre.png" alt='reserva'/>
                </button>

                {/*<p> Último estado = {status} </p>*/}
                
              
               

              
         
    </article>);


    
};


//meter un turno de parametro !!!!!!!!!!!!!!!!!!!!
export default BotonReservar;