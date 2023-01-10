import {drizzleReactHooks} from '@drizzle/react-plugin'

const {useDrizzle, useDrizzleState} = drizzleReactHooks;

export default ({children}) => {
    const {useCacheCall} = useDrizzle();
    const drizzleState = useDrizzleState(state => state);

    const ownerAddr = useCacheCall("ReslabEtsit", "owner");
    const myAddr = drizzleState.accounts[0];

    if (ownerAddr !== myAddr) {
        return null;
    }
    return <>
        {children}
    </>

};
