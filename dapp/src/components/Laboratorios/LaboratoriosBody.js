import {drizzleReactHooks} from '@drizzle/react-plugin';

import LaboratorioRow from "./LaboratorioRow";
const {useDrizzle} = drizzleReactHooks;

const LaboratoriosBody = () => {
    const {useCacheCall} = useDrizzle();
    const laboratoriosLength = useCacheCall("ReslabEtsit", "laboratoriosLength") || 0;

    let rows = [];
    for (let i = 0; i < laboratoriosLength ; i++) {
        rows.push(<LaboratorioRow key={"ab-"+i} laboratorioIndex={i}/>);
       //rows.push(<tr><td>{i}</td></tr>);

    }
    return <tbody>{rows}</tbody>;

};

export default LaboratoriosBody;