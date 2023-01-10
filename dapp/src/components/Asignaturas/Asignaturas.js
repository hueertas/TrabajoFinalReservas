import {drizzleReactHooks} from '@drizzle/react-plugin'
import {useParams, Link} from "react-router-dom";
import AsignaturasHead from "./AsignaturasHead";
import AsignaturasBody from "./AsignaturasBody";

const {useDrizzle} = drizzleReactHooks;

export const Asignaturas = () => {
    
   
       
   
       return (


        
           <section className="AppAsignaturas">
            {/*<img className="asignaturas" src="/asignaturas.png"/>*/}

               <h2>Listado de asignaturas</h2>
               
               <div className='tablaAsignaturasdiv'>
                <table className ="tablaAsignaturas">
                    <AsignaturasHead className = "cabezeraAsignaturas"/>
                    <AsignaturasBody />
                </table>
               </div>

               <img className="covid" src="/covid free.png" alt='covid'/>
               

               
           </section>
       );
   };
   
    
export const Asignatura = () => {
const {useCacheCall} = useDrizzle();

let {index} = useParams();

const datos = useCacheCall("ReslabEtsit", "asignaturasRegistradas", index);



return <>



    <div className='AppAsignaturadiv'>
        <img className="fondoAzulAsig" src="/fondoAzul.png" alt='fondo'/>
        <div className='SeccionInfoAsig'>
       <header className="AppAlumno">
            <h2>INFORMACIÓN DE LA ASIGNATURA</h2>
       </header>

        <ul className='ListaAsignatura'>
            <li><b>NOMBRE:</b> </li>
            <p>⇌ {datos?.nombre ?? "Desconocido"}</p>
            <li><b>LABORATORIO CORRESPONDIENTE:</b> </li>
            <p>⇌ {datos?.indexLab ?? "Desconocido"}</p>

           {/*<p> el numero de turnos es {el}</p>*/}

           

             <Link className='linkasig' to={`/laboratorios/${datos?.indexLab}`}><img className="AccederLab"src="/AccederLab.png" alt='accederlab'/></Link>
            

        </ul>
        </div> 

        <Link  className='volverasig' to="/asignaturas"><img className="volver" src="/volver.png" alt='volver'/></Link>


    </div>
    </>
};







   /*
   import {drizzleReactHooks} from '@drizzle/react-plugin';

import AsignaturaRow from "./AsignaturaRow";
const {useDrizzle} = drizzleReactHooks;
   const AsignaturasBody = () => {
    const {useCacheCall} = useDrizzle();
    const asignaturasRegistradasLength = useCacheCall("ReslabEtsit", "asignaturasRegistradasLength") || 0;

    let rows = [];
    for (let i = 0; i < asignaturasRegistradasLength; i++) {
        rows.push(<AsignaturaRow key={"ab-"+i} asignaturaIndex={i}/>);
       //rows.push(<tr><td>{i}</td></tr>);

    }
    return <tbody>{rows}</tbody>;

};

export default AsignaturasBody;
   
   
   -------------------------------------------------------------------------
 export const Asignatura = () => {
       const {useCacheCall} = useDrizzle();
   
       let {addr} = useParams();
   
       const datos = useCacheCall("ReslabEtsit", "datosAsignatura", addr);
   
       return <>
           <header className="AppAsignatura">
               <h2>Asignatura</h2>
           </header>
   
           <ul>
               <li><b>Nombre:</b> {addr}</li>
               <li><b>Email:</b> {datos?.laboratorio ?? "Desconocido"}</li>
               <li><b>Info:</b> {datos?.info ?? "Desconocido"}</li>
               
           </ul>
   
           <Link to="/asinaturas">Volver</Link>
       </>
   };*/ 

/* <ContractData
            drizzle={props.drizzle}
            drizzleState={props.drizzleState}
            contract={"ReslabEtsit"}
            method={"asignaturasRegistradasLength"}
            render={ml => <ContractData
                drizzle={props.drizzle}
                drizzleState={props.drizzleState}
                contract={"ReslabEtsit"}
                method={"laboratoriosLength"}
            
                render={el => 
                    <table>
                        <AsignaturasHead laboratoriosLength={el}/>
                        <tr> <td>  ml = { ml} </td>  <td> el = {el}</td></tr> 
                        <AsignaturasBody drizzle={props.drizzle}
                                        drizzleState={props.drizzleState}
                                        asignaturasLength={ml}
                                        laboratoriosLength={el}/>
                    </table>}
            />}
        />

      
    </section>

);

export default Asignaturas;


--------------------


import {newContextComponents} from "@drizzle/react-components";

import AsignaturasHead from "./AsignaturasHead";
import AsignaturasBody from "./AsignaturasBody";


const {ContractData} = newContextComponents;

const Asignaturas = (props) => (
    <section className="AppAsignaturas">
        <h2>Asignaturas</h2>

        <ContractData
            drizzle={props.drizzle}
            drizzleState={props.drizzleState}
            contract={"ReslabEtsit"}
            method={"asignaturasRegistradasLength"}
            render={ml => <ContractData
                drizzle={props.drizzle}
                drizzleState={props.drizzleState}
                contract={"ReslabEtsit"}
                method={"laboratoriosLength"}
            
                render={el => 
                    <table>
                        <AsignaturasHead laboratoriosLength={el}/>
                         
                        <AsignaturasBody drizzle={props.drizzle}
                                        drizzleState={props.drizzleState}
                                        asignaturasLength={ml}
                                        laboratoriosLength={el}/>
                    </table>}
            />}
        />

      
    </section>

);



-----------------------------3 version sin hooks
import {newContextComponents} from "@drizzle/react-components";


import AsignaturasHead from "./AsignaturasHead";
import AsignaturasBody from "./AsignaturasBody";
import {useParams, Link} from "react-router-dom";


const {ContractData} = newContextComponents;

const Asignaturas = (props) => (
    <section className="AppAsignaturas">
        <h2>Asignaturas</h2>

        <ContractData
            drizzle={props.drizzle}
            drizzleState={props.drizzleState}
            contract={"ReslabEtsit"}
            method={"asignaturasRegistradasLength"}
            render={ml => (
               
                    <table>
                        <AsignaturasHead />
                         
                        <AsignaturasBody drizzle={props.drizzle}
                                        drizzleState={props.drizzleState}
                                        asignaturasRegistradasLength={ml}/>
                                       
                    </table>

            

                    
            )}

            

            
        />
        

      
    </section>

);

export default Asignaturas;


-----------------------------------con mapping intento1
export const Asignatura = () => {
const {useCacheCall} = useDrizzle();

let {index} = useParams();

const datos = useCacheCall("ReslabEtsit", "asignaturasRegistradas", index);

return <>
        <header className="AppAlumno">
            <h2>Alumno</h2>
        </header>

        <ul>
            <li><b>Nombre:</b> {datos?.nombre ?? "Desconocido"}</li>
            <li><b>Lab:</b> {datos?.laboratorio ?? "Desconocido"}</li>
            <li><b>Info:</b> {index}</li>
            <li><b>Lista de laboratorios registrados en esta asignatura:</b> {datos?.laboratorio ?? "Desconocido"}</li>


        </ul>

        <Link to="/asignaturas">Volver</Link>
    </>
};



*/