

import {drizzleReactHooks} from '@drizzle/react-plugin'
import { Link} from "react-router-dom";





const {useDrizzle} = drizzleReactHooks;



const AsignaturaRow = ({asignaturaIndex}) => {
    const {useCacheCall} = useDrizzle();
  
    const datos = useCacheCall("ReslabEtsit", "asignaturasRegistradas", asignaturaIndex);


    

    return <tr key={"Asig" + asignaturaIndex}>
                {/*<th>Asignatura<sub>{asignaturaIndex}</sub></th>*/}
                <td>{datos?.nombre}</td>
                <td>{datos?.indexLab}</td>
                <td><Link to={`/asignaturas/${asignaturaIndex}`}><img className="clicar" src="/clicar.png" alt='click3'/></Link></td>
                

        
    </tr>;
};


export default AsignaturaRow;



/*

 export const Asignatura = () => {
       const {useCacheCall} = useDrizzle();
   
       let {addr} = useParams();
   
       const datos = useCacheCall("ReslabEtsit", "datosAsignatura", addr);
   
       return <>
           <header className="AppAsignatura">
               <h2>Asignatura</h2>
           </header>
   
           <ul>
               <li><b>:</b> {addr}</li>
               <li><b>Email:</b> {datos?.laboratorio ?? "Desconocido"}</li>
               <li><b>Info:</b> {datos?.info ?? "Desconocido"}</li>
               
           </ul>
   
           <Link to="/asinaturas">Volver</Link>
       </>
   };






*/ 






//AYUDA LINEA 49 !!! COMO METER LOS PUESTOS !
/*
        cells.push(
            <ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract={"ReslabEtsit"}
                method={"labPuestos"} // metodo de laboratorios mapping ( adrress=> DatosLaboratorio) public datoslaboratorios
                methodArgs={[asignaturaAddr, ei]}// rellenar con las asignatura coo los alumnos
                render={lab =>
                    <td key={"p2-" + asignaturaIndex + "-" + ei}>
                        {lab.maxPuestos }
                        
                    </td>
                }
            />)
    }  */


/*import {newContextComponents} from "@drizzle/react-components";

const {ContractData} = newContextComponents;

const AsignaturaRow = (props) => {
    const {drizzle, drizzleState, asignaturaIndex, asignaturaAddr, laboratoriosLength} = props;

    let cells = [];

    for (let ei = 0; ei < laboratoriosLength; ei++) {

        cells.push(
            <ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract={"ReslabEtsit"}
                method={"laboratorios"} // array asignaturas
                methodArgs={[asignaturaAddr, ei]}// rellenar con las asignatura coo los alumnos
                render={lab =>
                    <td key={"p2-" + asignaturaIndex + "-" + ei}>
                        
                        
                    </td>
                }
            />)
    }

    return (
        <tr key={"d" + asignaturaIndex}>
            <th>A<sub>{asignaturaIndex}</sub></th>

            <td><ContractData drizzle={drizzle}
                              drizzleState={drizzleState}
                              contract={"ReslabEtsit"}
                              method={"DatosAsignatura"}
                              methodArgs={[asignaturaAddr]}
                              render={datos => <>
                                  {datos.nombre}
                              </>}
            /></td>

            {cells}
        </tr>
    );
};


export default AsignaturaRow;

------------------------------- sin hooks

import {newContextComponents} from "@drizzle/react-components";

const {ContractData} = newContextComponents;


const AsignaturaRow = (props) => {
    const {drizzle, drizzleState, asignaturaIndex, asignaturaAddr} = props;
    return <tr key={"ALU-" + asignaturaIndex}>
        <th>A<sub>{asignaturaIndex}</sub></th>

        <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract={"ReslabEtsit"}
            method={"datosAsignatura"}
            methodArgs={[asignaturaAddr]}
            render={datos => <>
                <td>{datos.nombre}</td>
                <td>{datos.laboratorio}</td>
                <td>{datos.info}</td>
            </>}
        />

        <td>{asignaturaAddr}</td>
    </tr>;
};

export default AsignaturaRow;






*/