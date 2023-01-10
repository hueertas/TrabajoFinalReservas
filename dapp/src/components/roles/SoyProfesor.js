


import {drizzleReactHooks} from '@drizzle/react-plugin'

const {useDrizzle, useDrizzleState} = drizzleReactHooks;

const SoyProfesor = ({children}) => {
    const {useCacheCall} = useDrizzle();
    const drizzleState = useDrizzleState(state => state);

    const nombre = useCacheCall("ReslabEtsit", "datosProfesor", drizzleState.accounts[0]);

    if (!nombre) {
        return null;
    }
    if (!nombre?.nombreP) {
        return null
    }
    return <>
        {children}
    </>

};

export default SoyProfesor;
