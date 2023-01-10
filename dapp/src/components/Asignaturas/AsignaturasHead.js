


// dentro de laboratrio un enlace con los puestos y sus caracteristicas


  
const AsignaturasHead = () =>
    <thead>
    <tr>
        {/*<th>#</th>*/}
        <th>Nombre</th>
        <th>Laboratorio</th>
        <th>Información</th>
      
    </tr>
    </thead>;



export default AsignaturasHead;


/*const AsignaturasHead = () =>
    <thead>
    <tr>
        <th>#</th>
        <th>Laboratorio</th> 
        
    </tr>
    </thead>;

export default AsignaturasHead;
-------------------------------------

  
const AsignaturasHead= ({laboratoriosLength}) => {

    let thead = [];

    thead.push(<th key={"chae"}>A-L</th>);

    thead.push(<th key={"chn"}>Nombre Asignatura</th>);

    for (let i = 0; i < laboratoriosLength; i++) {
        thead.push(<th key={"chev-" + i}>L<sub>{i}</sub></th>);
    }

    return <thead>{thead}</thead>;
};

export default AsignaturasHead;


*/