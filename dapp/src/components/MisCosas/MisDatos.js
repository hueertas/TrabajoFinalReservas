import {drizzleReactHooks} from '@drizzle/react-plugin'
//import {newContextComponents} from "@drizzle/react-components";
import SoyAlguno from '../roles/SoyAlguno';


const {useDrizzle, useDrizzleState} = drizzleReactHooks;

const MisDatos = () => {
    const {useCacheCall} = useDrizzle();
    const drizzleState = useDrizzleState(state => state);

    
    const address = drizzleState.accounts[0];
    const balance = drizzleState.accountBalances[address];
    const datos = useCacheCall("ReslabEtsit", "quienSoy",{from: address});
    const datosProfesor = useCacheCall("ReslabEtsit", "quienSoyP",{from: address});
    return (
        <article className="AppMisDatos">
          
            <ul>
                <SoyAlguno owner alumno>
                <li>Nombre: <span style={{color: "blue"}}>{datos?._nombre || "No matriculado"}</span></li>
                <li>Email: <span style={{color: "blue"}}>{datos?._email || "No matriculado"}</span></li>
                </SoyAlguno>
                <SoyAlguno profesor>
                <li>Nombre: <span style={{color: "blue"}}>{datosProfesor?._nombre || "No Registrado"}</span></li>
                <li>Email: <span style={{color: "blue"}}>{datosProfesor?._email || "No Registrado"}</span></li>
               
                </SoyAlguno>

            
                        <li>Dirección: <span style={{color: "blue"}}>{address}</span></li>
                        <li>Balance: <span style={{color: "blue"}}>{balance}</span> weis</li>
                 
            </ul>
        </article>);
};

export default MisDatos;