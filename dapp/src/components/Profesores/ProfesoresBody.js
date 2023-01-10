

import ProfesorRow from "./ProfesorRow";



const ProfesoresBody = ({profesRegistradosLength}) => {

    let rows = [];
    for (let i = 0; i < profesRegistradosLength; i++) {
        rows.push(<ProfesorRow key={"ab-"+i} profesorIndex={i}/>);
    }

    return <tbody>{rows}</tbody>;
};

export default ProfesoresBody;