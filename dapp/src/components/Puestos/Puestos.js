import {drizzleReactHooks} from '@drizzle/react-plugin'
import {useParams, Link} from "react-router-dom";
import PuestosHead from "./PuestosHead";
import PuestosBody from "./PuestosBody";
import Reservar from "./Reservar";

const {useDrizzle} = drizzleReactHooks;

export const Puestos = () => {
    
   
       
   
       return (
           <section className="AppPuestos">
               <h2>Puestos</h2>
               <table>
                   <PuestosHead/>
                   <PuestosBody />
               </table>
           </section>
       );
   };
   
    
export const Puesto = () => {
const {useCacheCall} = useDrizzle();

let {index} = useParams();

const datos = useCacheCall("ReslabEtsit", "puestosRegistrados", index);

return <>
        <header className="AppAlumno">
            <h2>Puestos</h2>
        </header>

        

        <ul>
            <li><b>Nombre:</b> {datos?.nombre ?? "Desconocido"}</li>
            <li><b>Lab:</b> {datos?.laboratorio ?? "Desconocido"}</li>
            <li><b>fecha:</b> {datos?.fecha ?? "Desconocido"}</li>
            <li><b>entradaTurno:</b> {datos?.entradaTurno ?? "Desconocido"}</li>
            <li><b>salidaTurno:</b> {datos?.salidaTurno ?? "Desconocido"}</li>
            <li><b>estado:</b> {datos?.estado ?? "Desconocido"}</li>
            <li><b>Reservas</b> {index}</li>
        </ul>

        

        <Link to="/puestos">Volver</Link>


        <Reservar/>
    </>
};
