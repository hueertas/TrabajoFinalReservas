

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


/* version sin hooks



import {newContextComponents} from "@drizzle/react-components";

import AsignaturaRow from "./AsignaturaRow";

const {ContractData} = newContextComponents;

const AsignaturasBody = (props) => {
    const {drizzle, drizzleState,asignaturasRegistradasLength} = props;
    let rows = [];
    for (let i = 0; i < asignaturasRegistradasLength; i++) {
        rows.push(<ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract={"ReslabEtsit"}
            method={"asignaturasRegistradas"}
            methodArgs={[i]}
            render={addr => <AsignaturaRow drizzle={drizzle}
                                       drizzleState={drizzleState}
                                       asignaturaIndex={i}
                                       asignaturaAddr={addr}/>}
            
        />);
    }
    return <tbody>{rows}</tbody>;
};

export default AsignaturasBody;
*/
