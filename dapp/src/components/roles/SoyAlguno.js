import {drizzleReactHooks} from '@drizzle/react-plugin'

const {useDrizzle, useDrizzleState} = drizzleReactHooks;

const SoyAlguno = ({owner, coordinador, profesor, alumno, noAlumno, children}) => {
    const {useCacheCall} = useDrizzle();
    const drizzleState = useDrizzleState(state => state);

    const myAddr = drizzleState.accounts[0];

    let show = false;

    const ownerAddr = useCacheCall("ReslabEtsit", "owner");
    if (owner && ownerAddr === myAddr) {
        show = true;
    }

   /* const coordAddr = useCacheCall("ReslabEtsit", "coordinador");
    if (coordinador && coordAddr === myAddr) {
        show = true;
    }
*/
    const np = useCacheCall("ReslabEtsit", "datosProfesor", myAddr);
    if (profesor && np?.nombreP) {
        show = true;
    }

    const da = useCacheCall("ReslabEtsit", "datosAlumno", myAddr);
    if (alumno && da?.nombre) {
        show = true;
    }
    if (noAlumno && da && !da?.nombre) {
        show = true;
    }

    return <>
        {show ? children : null}
    </>

};

export default SoyAlguno;
