let ReslabEtsit = artifacts.require("ReslabEtsit");


contract('ReslabEtsit:', accounts => {

    let reslabEtsit;

    before(async () => {
        reslabEtsit = await ReslabEtsit.deployed();
        // console.log("ReslabEtsit =", reslabEtsit.address);
    });


    it("El owner es el que despliego el contrato",  async () => {

        let owner = await reslabEtsit.owner();
        
        let desplegador = accounts[0];

        assert.equal(owner, desplegador,"El owner debe ser quien despliega en contrato.");
    })






    it("Inicialmente la dapp esta vacia",  async () => {

        
        let numMatriculas = await reslabEtsit.matriculasLength();
        let numLaboratorios = await reslabEtsit.laboratoriosLength();
        let numturnos = await reslabEtsit.turnosLength();
        let numMasignaturas = await reslabEtsit.asignaturasRegistradasLength();
       
       

        
        assert.equal(numMatriculas, 0, "La reslabEtsit no tiene ningun alumno matriculado inicialmente");
        assert.equal(numLaboratorios, 0, "La reslabEtsit no tiene ninguna lab inicialmente.");
        assert.equal(numturnos, 0, "La reslabEtsit no tiene ninguna turno inicialmente.");
        assert.equal(numMasignaturas, 0, "La reslabEtsit no tiene ninguna asignatura inicialmente.");

    })



    it("Crear dos labs correctamente",  async () => {

        // la nota va de 0 a 100.
        await reslabEtsit.creaLaboratorio(0,"lab0", "core,programcion1,programcion2,diseñoweb", "info");
       await reslabEtsit.creaLaboratorio(1,"lab1", "einb,celt,", "info");

        let numlabs = await reslabEtsit.laboratoriosLength();

        let lab0 = await reslabEtsit.laboratoriosRegistrados(0);
        let lab1 = await reslabEtsit.laboratoriosRegistrados(1);

        assert.equal(numlabs, 2, "La reslabEtsit debe tener dos labs.");

        assert.equal(lab0.laboratorioindex, 0, " El indice del lab es 0");
        assert.equal(lab0.nombreL, "lab0", " corresponde al laboratorio 0");
        assert.equal(lab0.asignaura, "core,programcion1,programcion2,diseñoweb", "asignaturas  deben ser : core prog y diseño web ");
        assert.equal(lab0.info, "info", "la info es info0");

       assert.equal(lab1.laboratorioindex, 1, " El indice del lab es 1");
        assert.equal(lab1.nombreL, "lab1", " corresponde al laboratorio 1");
        assert.equal(lab1.asignaura, "einb,celt,", "asignaturas  deben ser : einb y celt");
        assert.equal(lab1.info, "info", "la info es info1");
    })

    it("Crear dos asignaturas correctamente",  async () => {

        // la nota va de 0 a 100.
        await reslabEtsit.creaAsignatura("core",0, "info");
       await reslabEtsit.creaAsignatura("einb",1, "info");

        let numasignaturas = await reslabEtsit.asignaturasRegistradasLength();

        let asignatura0 = await reslabEtsit.asignaturasRegistradas(0);
        let asignatura1 = await reslabEtsit.asignaturasRegistradas(1);

        assert.equal(numasignaturas, 2, "La reslabEtsit debe tener dos asignaturas.");

        assert.equal(asignatura0.nombre, "core", " Corresponde a la asignatura core");
        assert.equal(asignatura0.indexLab, 0, " corresponde al laboratorio 0");
        assert.equal(asignatura0.info, "info", "la info es info0");

        assert.equal(asignatura1.nombre, "einb", " Corresponde a la asignatura einb");
        assert.equal(asignatura1.indexLab, 1, " corresponde al laboratorio 1");
        assert.equal(asignatura1.info, "info", "la info es info1");
    })

    it("Crear dos turnos correctamente",  async () => {

        // la nota va de 0 a 100.
        await reslabEtsit.creaTurno("10:00-11:00", 12345678);
       await reslabEtsit.creaTurno("11:00-12:00",12345679);

        let numturnos = await reslabEtsit.turnosLength();

        let turno0 = await reslabEtsit.turnosRegistrados(0);
        let turno1 = await reslabEtsit.turnosRegistrados(1);

        assert.equal(numturnos, 2, "La reslabEtsit debe tener dos turnos.");

        assert.equal(turno0.nombre, "10:00-11:00", " Corresponde al turno de 10 a 11");
        assert.equal(turno0.fecha, 12345678, " corresponde a la fecha 12345678 ");
       

        assert.equal(turno1.nombre, "11:00-12:00", " Corresponde al turno de 11 a 12");
        assert.equal(turno1.fecha, 12345679, " corresponde a la fecha 12345679 ");
        
    })


    it("Crear dos puestos correctamente",  async () => {

        // la nota va de 0 a 100.
        await reslabEtsit.creaPuesto("C01", 0);
       //await reslabEtsit.creaPuesto("C02", 1);

        let numpuestos = await reslabEtsit.puestosDelLaboratorioLength(0);

        let puesto0 = await reslabEtsit.puestosDelLaboratorio(0,0);
        //let puesto1 = await reslabEtsit.puestosDelLaboratorio(1,1);

       assert.equal(numpuestos, 1, "La reslabEtsit debe tener dos puestos.");

      // assert.equal(puesto0.nombre,"C01", " Corresponde al puesto C01");
       // assert.equal(puesto0.indexlab, 0, " corresponde al puesto 1 ");
       

        /*assert.equal(puesto1.nombre, "C02", " Corresponde al puesto C02");
        assert.equal(puesto1.indexlab, 1, " corresponde al lab 1 ");*/
        
    })

        
 
    

    it("Matricular a dos alumnos correctamente",  async () => {

        let evaAccount = accounts[1];
        let pepeAccount = accounts[2];

        await reslabEtsit.automatricula("Eva Gomez", "eva_gomez_00@gmail.com","core", {from: evaAccount});
        await reslabEtsit.automatricula("Jose Ortega", "josore_99@gmail.com","core", {from: pepeAccount});

        let numMatriculas = await reslabEtsit.matriculasLength();
        assert.equal(numMatriculas, 2, "Tiene que haber dos alumnos matriculados.");

        let direccion0 = await reslabEtsit.matriculas(0);
        let direccion1 = await reslabEtsit.matriculas(1);

        assert.equal(direccion0, evaAccount, "La direccion del primer alumno matriculado esta mal.");
        assert.equal(direccion1, pepeAccount, "La direccion del segundo alumno matriculado esta mal.");

        let matricula0 = await reslabEtsit.datosAlumno(direccion0);
        let matricula1 = await reslabEtsit.datosAlumno(direccion1);

        assert.equal(matricula0.nombre, "Eva Gomez", "El nombre del primer alumno matriculado esta mal.");
        assert.equal(matricula0.email, "eva_gomez_00@gmail.com", "El email del primer alumno matriculado esta mal.");
        assert.equal(matricula0.asignaturasMatriculadas, "core", "El email del primer alumno matriculado esta mal.");
     
        assert.equal(matricula1.nombre, "Jose Ortega", "El nombre del segundo alumno matriculado esta mal.");
        assert.equal(matricula1.email, "josore_99@gmail.com", "El email del segundo alumno matriculado esta mal.");
        assert.equal(matricula1.asignaturasMatriculadas, "core", "El email del primer alumno matriculado esta mal.");
    })

    it("Matricular a un profe correctamente",  async () => {

        
        let SantiagoAccount = accounts[3];

        await reslabEtsit.autoRegistro("Santiago", "Santiago@gmail.com","core","telematica","1", {from: SantiagoAccount});
        

        let numMatriculas = await reslabEtsit.profesRegistradosLength();
        assert.equal(numMatriculas, 1, "Tiene que haber dos alumnos matriculados.");

        let direccion0 = await reslabEtsit.profesRegistrados(0);
   

        assert.equal(direccion0, SantiagoAccount, "La direccion del primer alumno matriculado esta mal.");
       

        let matricula0 = await reslabEtsit.datosProfesor(direccion0);
      

        assert.equal(matricula0.nombreP, "Santiago", "El nombre del primer alumno matriculado esta mal.");
        assert.equal(matricula0.emailP, "Santiago@gmail.com", "El email del primer alumno matriculado esta mal.");
     

    })

    


it("Reservar correctamente",  async () => {

    let pepeAccount = accounts[2];


    await reslabEtsit.guardarReserva( 1, 1655416801, 1,"core",{from: pepeAccount}); 

})

it("Quitar reserva correctamente",  async () => {

    let pepeAccount = accounts[2];


    await reslabEtsit.quitarReserva( 1, 1655416801, 1,"core",{from: pepeAccount}); 

})



it("Un alumno pregunta quien es el",  async () => {

    let pepeAccount = accounts[2];

    let datos = await reslabEtsit.quienSoy({from: pepeAccount});

    assert.equal(datos._nombre, "Jose Ortega", "El nombre de un  alumno matriculado se recupera mal.");
    assert.equal(datos._email, "josore_99@gmail.com", "El email de un alumno matriculado se recupera mal.");
})

it("Un profe pregunta quien es el",  async () => {

    let SantiagoAccount = accounts[3];

    let datos = await reslabEtsit.quienSoyP({from: SantiagoAccount});

    assert.equal(datos._nombre, "Santiago", "El nombre de un  profe matriculado se recupera mal.");
    assert.equal(datos._email, "Santiago@gmail.com", "El email de un profe matriculado se recupera mal.");
})


});