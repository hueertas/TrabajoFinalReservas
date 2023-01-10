import {drizzleReactHooks} from "@drizzle/react-plugin";

import ReservaPuestoRow from "./ReservarPuestoRow";


const {useDrizzle} = drizzleReactHooks;

const ReservarPuestosBody = ({indexlab,fecha,NAsignatura}) => {
    const {useCacheCall} = useDrizzle();

    const ml = useCacheCall("ReslabEtsit", "puestosDelLaboratorioLength",indexlab) || 0;

    //preguntar antes cual es el valor de puestos para esa posición delaboratorio . Si ml no lo tenemos devuelvo un array vacio 
    //
    let puestosIndices = useCacheCall(['ReslabEtsit'], call => {
        

        let puestosIndices = [];
        
        for (let pi = 0; pi < ml; pi++) {
            const puestoIndice = call("ReslabEtsit", "puestosDelLaboratorio",indexlab,pi) ;   
                if (typeof puestoIndice !== "undefined")
                puestosIndices.push(Number(puestoIndice));
         
            
        }
        return puestosIndices;
    });

    let rows = [];
    for (let i = 0; i < puestosIndices.length; i++) {

      
            rows.push(<ReservaPuestoRow key={"cb-"+i} puestoIndice={puestosIndices[i]} fecha={fecha} indexlab={indexlab} NAsignatura={NAsignatura}/>);
    }

    return  <tbody>{rows} </tbody>
   
    ;
};

export default ReservarPuestosBody;


/*import {drizzleReactHooks} from "@drizzle/react-plugin";

import ReservaPuestoRow from "./ReservarPuestoRow";

const {useDrizzle} = drizzleReactHooks;

const ReservarPuestosBody = ({indexlab,fecha}) => {
    const {useCacheCall} = useDrizzle();

    const ml = useCacheCall("ReslabEtsit", "puestosDelLaboratorioLength",indexlab) || 0;

    //preguntar antes cual es el valor de puestos para esa posición delaboratorio . Si ml no lo tenemos devuelvo un array vacio 
    //
    let puestosIndices = useCacheCall(['ReslabEtsit'], call => {
        

        let puestosIndices = [];
        
        for (let pi = 0; pi < ml; pi++) {
            const puestoIndice = call("ReslabEtsit", "puestosDelLaboratorio",indexlab,pi) ;   
          
                puestosIndices.push(puestoIndice);
         
            
        }
        return puestosIndices;
    });

    let rows = [];
    for (let i = 0; i < puestosIndices.length; i++) {

        if (typeof puestosIndices[i] !== "undefined")
            rows.push(<ReservaPuestoRow key={"cb-"+i} puestoIndice={puestosIndices[i]} fecha={fecha} />);
    }

    return <tbody>{rows}</tbody>;
};

export default ReservarPuestosBody;*/