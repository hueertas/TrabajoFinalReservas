import {drizzleReactHooks} from '@drizzle/react-plugin'
import {Link} from "react-router-dom";

const {useDrizzle} = drizzleReactHooks;

const ProfesorRow = ({profesorIndex}) => {
    const {useCacheCall} = useDrizzle();

    let {addr, datos} = useCacheCall(['ReslabEtsit'],
        call => {
            const addr = call("ReslabEtsit", "profesRegistrados", profesorIndex);
            const datos = addr && call("ReslabEtsit", "datosProfesor", addr);
            return {addr, datos};
        }
    );

    return <tr key={"ALU-" + profesorIndex}>
       {/* <th>A<sub>{alumnoIndex}</sub></th>*/}

        <td>{datos?.nombreP}</td>
        <td>{datos?.emailP}</td>

     <td><Link to={`/profesores/${addr}`}>Info</Link></td>
    </tr>;
};


export default ProfesorRow;