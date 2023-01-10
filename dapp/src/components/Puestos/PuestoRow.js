
import {drizzleReactHooks} from '@drizzle/react-plugin'
import {Link} from "react-router-dom";

const {useDrizzle} = drizzleReactHooks;

const PuestoRow = ({puestoIndex}) => {
    const {useCacheCall} = useDrizzle();
    const datos = useCacheCall("ReslabEtsit", "puestosRegistrados", puestoIndex);


    

    return <tr key={"Puesto" + puestoIndex}>
                <th>Puesto<sub>{puestoIndex}</sub></th>
                <td>{datos?.nombre}</td>
                <td>{datos?.fecha}</td>
                <td>{datos?.entradaTurno}</td>
                <td>{datos?.salidaTurno}</td>
                <td>{datos?.estado}</td>
                <td><Link to={`/puestos/${puestoIndex}`}>Click para reservar</Link></td>
       

        
    </tr>;
};


export default PuestoRow;