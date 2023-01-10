import {drizzleReactHooks} from '@drizzle/react-plugin'
import {Link} from "react-router-dom";

const {useDrizzle} = drizzleReactHooks;

const LaboratorioReservaRow = ({laboratorioIndex}) => {
    const {useCacheCall} = useDrizzle();


    const datos = useCacheCall("ReslabEtsit", "laboratoriosRegistrados", laboratorioIndex);

    return <tr key={"LAb" + laboratorioIndex}>
                {/*<th>Lab<sub>{laboratorioIndex}</sub></th>*/}
                {/*<td>{datos?.laboratorioindex}</td>*/}
                <td>{datos?.nombreL}</td>
                <td>{datos?.asignaura}</td>
                {/*<td>{datos?.info}</td>*/}
                <td><Link to={`/reservasLaboratorios/${laboratorioIndex}`}><img className="clicar" src="/clicar.png" alt='click'/></Link></td>
               
                
       

        
    </tr>;
};

export default LaboratorioReservaRow;