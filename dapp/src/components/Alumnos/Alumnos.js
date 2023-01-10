
   import {drizzleReactHooks} from '@drizzle/react-plugin'
   import {useParams, Link} from "react-router-dom";
   
   import AlumnosHead from "./AlumnosHead";
   import AlumnosBody from "./AlumnosBody";
 
  
   
   const {useDrizzle} = drizzleReactHooks;
   
   export const Alumnos = () => {
       const {useCacheCall} = useDrizzle();
   
       const ml = useCacheCall("ReslabEtsit", "matriculasLength") || 0;

     
   
       return (

          

        

           <section className='AppAsignaturas'>

                
             
               <h2>Alumnos</h2>
              

              

         

            <div className='tablausuariosdiv'>
               <table className='tablaAsignaturas'>
                   <AlumnosHead className = "cabezeraAsignaturas"/>
                   <AlumnosBody matriculasLength={ml || 0}/>
                   
               </table>
            </div> 
               

            <img className="covid" src="/covid free.png" alt='covid'/>
          
           </section>
       );
   };
   
   
   export const Alumno = () => {
       const {useCacheCall} = useDrizzle();
   
       let {addr} = useParams();
   
       const datos = useCacheCall("ReslabEtsit", "datosAlumno", addr);
   
       return <>

        <div className='AppAsignaturadiv'>

            <img className="fondoAzulAP" src="/fondoAzul.png" alt='fondo'/>

            <div className='SeccionInfo'>
           <header className="AppAlumno">
               <h2>INFORMACIÓN ALUMNO</h2>
           </header>
   
           <ul className='ListaAsignatura'>
               <li><b>NOMBRE:</b></li>
               <p >⇌ {datos?.nombre ?? "Desconocido"} </p>
               <li><b>EMAIL:</b></li>
               <p>⇌ {datos?.email ?? "Desconocido"}</p>
               <li><b>ASIGNATURAS MATRICULADAS:</b></li>
               <p>⇌ {datos?.asignaturasMatriculadas ?? "Desconocido"} </p>
               <li><b>ADDRESS:</b></li>
               <p>{addr}</p>
           </ul>
           </div>
           <Link className='volverasig' to="/alumnos"><img className="volver" src="/volver.png" alt='volver'/></Link>
        </div>
       </>
       
   };

//npx truffle migrate --reset --compile-all
//npx truffle exec scripts/rellenar.js