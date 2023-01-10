




import {drizzleReactHooks} from '@drizzle/react-plugin';

import PuestoRow from "./PuestoRow";
const {useDrizzle} = drizzleReactHooks;

const PuestosBody = () => {
    const {useCacheCall} = useDrizzle();
    const puestosLength = useCacheCall("ReslabEtsit", "puestosLength") || 0;

    let rows = [];
    for (let i = 0; i < puestosLength; i++) {
        rows.push(<PuestoRow key={"ab-"+i} puestoIndex={i}/>);
       //rows.push(<tr><td>{i}</td></tr>);

    }
    return <tbody>{rows}</tbody>;

};

export default PuestosBody;