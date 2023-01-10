import {drizzleReactHooks} from '@drizzle/react-plugin';
import LaboratorioReservaRow from "./LaboratorioReservaRow";


const {useDrizzle} = drizzleReactHooks;

const LaboratoriosReservaBody = () => {
    const {useCacheCall} = useDrizzle();
    const laboratoriosLength = useCacheCall("ReslabEtsit", "laboratoriosLength") || 0;

    let rows = [];
    for (let i = 0; i < laboratoriosLength ; i++) {
        rows.push(<LaboratorioReservaRow key={"ab-"+i} laboratorioIndex={i}/>);
       

    }
    return <tbody>{rows}</tbody>;

};

export default LaboratoriosReservaBody;