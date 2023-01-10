import {drizzleReactHooks} from '@drizzle/react-plugin'

const {useDrizzle, useDrizzleState} = drizzleReactHooks;

const SoyAlumno = ({children}) => {
    const {useCacheCall} = useDrizzle();
    const drizzleState = useDrizzleState(state => state);

    const datos = useCacheCall("ReslabEtsit", "datosAlumno", drizzleState.accounts[0]);

    if (!datos) {
        return null;
    }
    if (!datos?.nombre) {
        return null
    }
    return <>
        {children}
    </>

};

export default SoyAlumno;
