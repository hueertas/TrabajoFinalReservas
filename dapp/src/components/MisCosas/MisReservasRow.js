import {drizzleReactHooks} from '@drizzle/react-plugin'
import {Link} from "react-router-dom";

const {useDrizzle} = drizzleReactHooks;

const MisReservasRow = ({laboratorioIndex}) => {
    const {useCacheCall} = useDrizzle();


    const datos = useCacheCall("ReslabEtsit", "laboratoriosRegistrados", laboratorioIndex);

    return <tr key={"LAb" + laboratorioIndex}>
                {/*<th>Lab<sub>{laboratorioIndex}</sub></th>*/}
                {/*<td>{datos?.laboratorioindex}</td>*/}
                <td>{datos?.nombreL}</td>
            
                 <td><Link to={`/miscosas/${laboratorioIndex}`}><img className="clicar" src="/clicar.png" alt='click2'/></Link></td>
               

             
                
       

        
    </tr>;
};

export default MisReservasRow;