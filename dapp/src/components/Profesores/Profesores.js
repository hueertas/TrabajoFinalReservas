
import {drizzleReactHooks} from '@drizzle/react-plugin'
 import {useParams, Link} from "react-router-dom";
import ProfesoresHead from "./ProfesoresHead";
import ProfesoresBody from "./ProfesoresBody";

const {useDrizzle} = drizzleReactHooks;

export const Profesores = () => {
    const {useCacheCall} = useDrizzle();

    const ml = useCacheCall("ReslabEtsit", "profesRegistradosLength") || 0;

  

    return (

       

     

        <div className="AppLaboratorios">

             
          
            <h2>Profesores</h2>
           

           

      

         <div className="tablausuariosdiv">
            <table className='tablaAsignaturas'>
                <ProfesoresHead/>
                <ProfesoresBody profesRegistradosLength={ml || 0}/>
                
            </table>
         </div> 
            

         <img className="covid" src="/covid free.png" alt='covid'/>
         
        </div>
    );
};


export const Profesor = () => {
    const {useCacheCall} = useDrizzle();

    let {addr} = useParams();

    const datos = useCacheCall("ReslabEtsit", "datosProfesor", addr);

    return <>

     <div className='AppAsignaturadiv'>
        <img className="fondoAzulAP" src="/fondoAzul.png" alt='fondo'/>
        <div className='SeccionInfo'>
        <header className="AppAlumno">
            <h2>INFORMACIÓN PROFESOR</h2>
        </header>

        <ul className='ListaAsignatura'>
            <li><b>NOMBRE:</b> </li>
            <b>⇌ {datos?.nombreP ?? "Desconocido"}</b>
            <li><b>EMAIL:</b> </li>
            <b>⇌ {datos?.emailP ?? "Desconocido"}</b>
            <li><b>ASIGNATURAS IMPARTIDAS:</b> </li>
            <b>⇌ {datos?.asignaturaP ?? "Desconocido"}</b>
            <li><b>DEPARTAMENTO:</b> </li>
            <b>⇌ {datos?.departamentoP ?? "Desconocido"}</b>
            <li><b>LABORATORIO ASIGNADO:</b> </li>
            <b>⇌ {datos?.LaboratorioP ?? "Desconocido"}</b>
            <li><b>ADDRESS:</b></li>
            <b>{addr}</b>
        </ul>
        </div>
        <Link className='volverasig' to="/profesores"><img className="volver" src="/volver.png" alt='volver'/></Link>
     </div>
    </>
    
};

//npx truffle migrate --reset --compile-all
//npx truffle exec scripts/rellenar.js

