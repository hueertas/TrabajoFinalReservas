import {drizzleReactHooks} from '@drizzle/react-plugin'

const {useDrizzle, useDrizzleState} = drizzleReactHooks;

const SoyCoordinador = ({children}) => {
    const {useCacheCall} = useDrizzle();
    const drizzleState = useDrizzleState(state => state);

    const coordAddr = useCacheCall("ReslabEtsit", "coordinador");
    const myAddr = drizzleState.accounts[0];

    if (coordAddr !== myAddr) {
        return null
    }
    return <>
        {children}
    </>
};

export default SoyCoordinador;
