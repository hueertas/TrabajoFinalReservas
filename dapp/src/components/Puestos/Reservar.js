import {useState} from "react";

import {drizzleReactHooks} from '@drizzle/react-plugin'

const {useDrizzle, useDrizzleState} = drizzleReactHooks;

const SoloOwner = ({children}) => {
    const {useCacheCall} = useDrizzle();
    const drizzleState = useDrizzleState(state => state);

    const OwnerAddr = useCacheCall("ReslabEtsit", "owner");

    if (OwnerAddr !== drizzleState.accounts[0]) {
        return <p>NO SOY EL ADMIN</p>
    }
    return <>
        {children}
    </>

};


/*
PENDIENTE DE INVESTIGAR:
Si se usa useCacheSend, se envian varias transacciones cada vez que se hace un submit del formulario.
El problema esta relacionado con actualizar el estado del stackIds dentro de la implementacion de ese hook.
 */

const Reservar = () => {
    const {drizzle} = useDrizzle();

    // Obtener el status de la ultima transaccion enviada:
    const { transactionStack, transactions } = useDrizzleState(drizzleState => ({
        transactionStack: drizzleState.transactionStack,
        transactions: drizzleState.transactions
    }));
    const [lastStackID, setLastStackID] = useState(undefined)
    const txObject = transactions[transactionStack[lastStackID] || 'undefined'];
    const status = txObject?.status;

    // Conservar los valores metidos en el formulario
   /* let [alumnoAddr, setAlumnoAddr] = useState("")
    let [indexEval, setEvalIndex] = useState("")
    let [tipo, setTipo] = useState("")
    let [calificacion, setCalificacion] = useState("")*/

    return (<article className="AppResevar">
        <h3>Reservar el puesto</h3>
        
            <form>
                
                <button key="submit" className="pure-button" type="button"
                        onClick={ev => {
                            ev.preventDefault();
                            {/* const stackId = drizzle.contracts.ReslabEtsit.methods.califica.cacheSend(alumnoAddr, indexEval, tipo, calificacion);*/}
                            {/*setLastStackID(stackId);*/}
                        }}>
                    Click para reservar
                </button>

               
            </form>
        
    </article>);
};

export default Reservar;