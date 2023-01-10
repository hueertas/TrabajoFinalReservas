



const ReservarPuestosHead = () => {



    

    let thead = [];
    
    thead.push(<th key={"chn"}>Nombre Puestos</th>);
    thead.push(<th key={"chn"}>10:00-11:00</th>);
    thead.push(<th key={"chn"}>11:00-12:00</th>);
    thead.push(<th key={"chn"}>12:00-13:00</th>);
    thead.push(<th key={"chn"}>13:00-14:00</th>);
    thead.push(<th key={"chn"}>16:00-17:00</th>);
    thead.push(<th key={"chn"}>17:00-18:00</th>);
    thead.push(<th key={"chn"}>18:00-19:00</th>);
    thead.push(<th key={"chn"}>19:00-20:00</th>);
    
    

    /*const el = useCacheCall("ReslabEtsit", "turnosLength") || 0;
    //thead.push(<th key={"xxx"}>{el}{el}</th>);
    for (let i = 0; i < el; i++) {
        thead.push(<th key={"chev-" + i}>Turno<sub>{i}</sub></th>);
        //thead.push(<th key={"chn"}>Nombre Puestos</th>);
    }
*/
    return <thead><tr>{thead}</tr></thead>;
};

export default ReservarPuestosHead;
