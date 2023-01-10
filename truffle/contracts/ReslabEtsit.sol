    
    
    
pragma solidity ^0.8.7;


contract ReslabEtsit {
    
   
    /**
     * address del profesor y owner
     * 
     */
    address public owner;
    address public profesor;
     
    
 

    
    
   
     /**
     * Datos de los puestos del laboratorio
     * 
     */
    
    struct DatosPuesto {


    
	string nombre;
	
	uint indexlab;

       
    }
    
    /**
     * Datos de los turnos del laboratorio
     * 
     */

    struct DatosTurno{
        string nombre;
        uint fecha;
      
    }
    
    
    /**
     * Datos del laboratorio
     * 
     */

    struct DatosLaboratorio {
        uint laboratorioindex;
        
        string nombreL;
        string asignaura;
        string info;
        
        
       
    }




    /**
     * Datos del alumno
     * 
     */
    struct DatosAlumno {
        string nombre;
        string email;
        string asignaturasMatriculadas;
        
    }
    
    /**
     * Datos del profesor
     * 
     */
    
    struct DatosProfesor{
        string nombreP;
        string emailP;
        string asignaturaP;
        string departamentoP;
        string LaboratorioP;
    }
    
    


    /**
     * Datos de la asignatura
     * 
     */


    
    struct DatosAsignatura{
        string nombre;
       
        uint indexLab;
        string info;
        
        
    }
    
     /**
     * Contador de un crédito diario
     * 
     */

    struct CreditoDiario {
        uint creditoDiario;
    }
    
    
    /**
     * 

     Datos de la reserva de un usuario
     * */
     
     struct DatosReserva{
         address dirAlumno;
      
     }
     

      

    
    /// Acceder a los datos de un alumno dada su direccion.
    mapping (address => DatosAlumno) public datosAlumno;

    
      /// Acceder a los datos de un profe dada su direccion.
    mapping (address => DatosProfesor) public datosProfesor;
    

    //array con las direcciones de los alumnos matriculados 
    address[] public matriculas;
    
    
    //array con las direcciones de los profes registrados 
    address[] public profesRegistrados;

    
    
    //array con la asignaturas registradas

    DatosAsignatura[] public asignaturasRegistradas;
    
    
    //array con los laboratorios registrados
    DatosLaboratorio[] public laboratoriosRegistrados;
   

    //array con los  puestos en la escuela
    DatosPuesto[] public puestosRegistrados;
    
 

    // array  turnos de los puestos

    DatosTurno[] public turnosRegistrados;
        
    mapping (address => DatosAsignatura)  datosAsignatura;
    
    
    mapping (address => DatosLaboratorio)  datosLaboratorio;

    mapping (address => DatosTurno)  datosTurno;


    




    
    // devuelve array con los indices de los puestos y la clave es un array de enteros laboratorio 
    mapping (uint=> uint[]) public puestos;




    
    //dado el numero puesto, turno (numero de milisegundos) ,  te devuelva la reserva
   mapping( uint =>mapping (uint=> DatosReserva )) public datosReserva;


   
    //dado el numero lab, de un puesto, fecha (numero de milisegundos) ,  y turno te devuelva la reserva

     mapping( uint =>mapping (uint=> mapping (uint=> mapping (uint=> DatosReserva )))) public datosReservaPorLabPuestoFechaTurno;

     //dado el numero lab, de un puesto,  y turno te devuelva la reserva

     mapping( uint =>mapping (uint=>  mapping (uint=> DatosReserva ))) public datosReservaPorLabPuestoTurno;



     // dado la direcion de un alumno , una asignatura y un dia  te da un contador de reservas que lleva

     mapping( address=>mapping (string=>mapping (uint => uint)))  public contadorCredito;



    //dado el indice de laboratorio un array de los indices de los puestos que estan en ese laboratorio 
    mapping(uint=> uint[]) public puestosDelLaboratorio;



    //dado el indice de una asignatura te devuelve el indice de un lab 
    mapping(uint => uint) public indiceLabPorAsignatura;

 


    //dado el index de un puesto registrado 
    //dada la fecha ( string en formaro YYYYYMMD??????
    // dado la hora del turno (de 0 a 23) 
    //devuelve el address del alumnos que ha reservado el turno
    mapping(uint => mapping(uint => mapping (uint=> address))) reservasDelAlumno;


    /// Dado el index de un puesto y una fecha te devuelve los turnos de un lab .
    mapping (uint => mapping (uint  => uint[] )) public turnosPorPuesto;

    
    
    
    
    /*
     * Constructor.
     * 
     * owner despligega el contrato
     * 
    
     */

    
    constructor()  {
        owner = msg.sender;
    } 

    
    
    
    
    


    //Devuelve la longitud de los puestos que hay en un laboratorio 

    function puestosDelLaboratorioLength(uint _indexlab) public view returns(uint) {
        return puestosDelLaboratorio[_indexlab].length;


    }



  /**
     * Te devuelve el numero de turnos
     *
     * @return El numero de turnos creadas.
     */

    function turnosLength() public view returns(uint) {
        return turnosRegistrados.length;
    }
    

    //devuelve la longitud del array de los puestos de un laboratorio 
    function puestosLaboratorioLength(uint _laboratorioindex) public view returns(uint) {
        return puestos[_laboratorioindex].length;
    }
    
    
     /**
     * El numero de labs  registrados
     *
     * @return El numero de labs creadas.
     */
    function laboratoriosLength() public view returns(uint) {
        return laboratoriosRegistrados.length;
    }
    
    






    //puestos que hay en un lab. Coger el array que te da el mapping de puestos y devolver su .length

    function puestosdeLaboratorio(uint _laboratorioindex) public view returns(uint) {

        return puestos[_laboratorioindex].length;
    }
    



 



    /** Función reservar - cualquier usuario que este registrado en la plataforma
    * Parametros: puesto, fecha, turno y asignatura
    */

    
    
    

        function guardarReserva(uint  _puestoId, uint  _fecha,  uint _turno, string memory _asignatura)  public {
        
	
       
            require(estaMatriculado(msg.sender) || estaRegistrado(msg.sender),"Solo permitido a alumnos no matriculados");
            require(_turno<24, "Turno invalido");
            require(!estaReservado(msg.sender),"Solo permitido a turnos que no esten reservados");
            require(contadorCredito[msg.sender][_asignatura][_fecha]<3, "se ha excedido el numero maximo de credito");

     
  

            DatosReserva memory reserva = DatosReserva(msg.sender);
            

            datosReservaPorLabPuestoTurno[_puestoId][_fecha][_turno]= reserva;
            contadorCredito[msg.sender][_asignatura][_fecha]++;
            


        }

        
    /** Funcion anular una reserva- cualquier usuario que este registrado en la plataforma
    *Parametros: puesto, fecha, turno y asignatura
    * El owner puede anular cualquier reserva
    */


       function quitarReserva(uint  _puestoId, uint  _fecha,  uint _turno,  string memory _asignatura)  public {
        
	
       

            
            require(estaMatriculado(msg.sender) || estaRegistrado(msg.sender) || msg.sender == owner,"Solo permitido a alumnos no matriculados");

            require(_turno<24, "Turno invalido");
           
            require(datosReservaPorLabPuestoTurno[_puestoId][_fecha][_turno].dirAlumno==msg.sender  ||  msg.sender == owner, "la reserva es de otro alumno");
            
            address direccionAlumno = datosReservaPorLabPuestoTurno[_puestoId][_fecha][_turno].dirAlumno;
            datosReservaPorLabPuestoTurno[_puestoId][_fecha][_turno]= DatosReserva(address(0x0));
            
            
            contadorCredito[direccionAlumno][_asignatura][_fecha]--;

        }
     
  
    













    
    

    
    
    
    
        
     //Crea un laboratorio 

    function creaLaboratorio( uint  _laboratorioindex,string memory _nombreL,string memory _asignaura,string memory _Info) soloOwner public returns (uint) {
        
        bytes memory bn = bytes(_nombreL);
        require(bn.length != 0, "El nombre del lab no puede ser vacio");
        
        laboratoriosRegistrados.push(DatosLaboratorio(_laboratorioindex,_nombreL,_asignaura,_Info));
        return laboratoriosRegistrados.length - 1;
    }
    
     // Crea una asignatura 

    function creaAsignatura( string memory _nombreAsig, uint _indexLab,string memory _Info)  soloOwner public returns (uint) {
        
        bytes memory bn = bytes(_nombreAsig);
        require(bn.length != 0, "El nombre de la asig no puede ser vacio");
        
       asignaturasRegistradas.push(DatosAsignatura(_nombreAsig,_indexLab,_Info));
        return asignaturasRegistradas.length - 1;
    }
    
    
    
    
    //Crea un puesto 

    function creaPuesto(string memory _NombreP,uint  _indexlab) soloOwner public returns (uint) {
        
        bytes memory bn = bytes(_NombreP);
        require(bn.length != 0, "El nombre del lab no puede ser vacio");
        
        puestosRegistrados.push(DatosPuesto(_NombreP,_indexlab));
        uint id = puestosRegistrados.length -1;

        puestosDelLaboratorio[_indexlab].push(id);

        return id;
    
    }   


    //Crea un turno de laboratorio 

    function creaTurno(string memory _nombre, uint _fecha) soloOwner public returns (uint) {
    
    bytes memory bn = bytes(_nombre);
    require(bn.length != 0, "El nombre de la turno no puede estar vacio");
    
    turnosRegistrados.push(DatosTurno(_nombre, _fecha));
    return turnosRegistrados.length - 1;
} 
    
 
     /**
     * El numero de alumnos matriculados.
     *
     * @return El numero de alumnos matriculados.
     */
    function matriculasLength() public view returns(uint) {
        return matriculas.length;
    }
    
    
    
      /**
     * El numero de profes registrados.
     *
     * .
     */
    function profesRegistradosLength() public view returns(uint) {
        return profesRegistrados.length;
    }
    
    
       /**
     * El numero de asignaturas registrados.
     *
     * .
     */
    function asignaturasRegistradasLength() public view returns(uint) {
        return asignaturasRegistradas.length;
    }
    
    

    /**
     * Los alumnos se matriculan con el metodo automatricula.
     * 
     * Impedir que se pueda meter un nombre vacio.
     *
     * @param _nombre El nombre del alumno. 
     * @param _email  El email del alumno.
     */
    function automatricula(string memory _nombre, string memory _email,string memory _asig) noMatriculados public {
        //revert("siempre falla");
        bytes memory b = bytes(_nombre);
        require(b.length != 0, "El nombre no puede ser vacio");
        
        DatosAlumno memory datos = DatosAlumno(_nombre, _email,_asig);
        
        datosAlumno[msg.sender] = datos;
        
        matriculas.push(msg.sender);
        
    }
    
    
    /**
     * Los profes se registran con el metodo autoRegistro.
     * 
     * Impedir que se pueda meter un nombre vacio.
     *
     * @param _nombreP El nombre del profe. 
     * @param _emailP  El email del profe.
    * @param _asignaturaP El nombre del profe. 
     * @param _departamentoP  El email del profe.
     *@param _laboratorioP  El email del profe.
     */

    
    
  
    function autoRegistro(string memory _nombreP, string memory _emailP,string memory _asignaturaP,string memory _departamentoP, string memory _laboratorioP ) noRegistrados public {
        
        bytes memory b = bytes(_nombreP);
        require(b.length != 0, "El nombre no puede ser vacio");
        
        DatosProfesor memory datosP = DatosProfesor(_nombreP, _emailP,_asignaturaP,_departamentoP,_laboratorioP);
        
        datosProfesor[msg.sender] = datosP;
        
       profesRegistrados.push(msg.sender);
        
    }
    



    
    
    
    
    
    
    
    
    
    
    /**
     * Permite a un alumno obtener sus propios datos.
     * 
     * @return _nombre El nombre del alumno que invoca el metodo.
     * @return _email  El email del alumno que invoca el metodo.
     */
    function quienSoy() soloMatriculados public view returns (string memory _nombre, string memory _email) {
        DatosAlumno memory datos = datosAlumno[msg.sender];
        _nombre = datos.nombre;
        _email = datos.email;
    }

   /**
     * Permite a un profe obtener sus propios datos.
     * 
     * @return _nombre El nombre del profe que invoca el metodo.
     * @return _email  El email del profe que invoca el metodo.
     */

    function quienSoyP() soloRegistrados public view returns (string memory _nombre, string memory _email) {
        DatosProfesor memory datos = datosProfesor[msg.sender];
        _nombre = datos.nombreP;
        _email = datos.emailP;
    }
    

   /**
     * Permite saber datos address.
     * 
   
     */
    function quienEs(address _dir) soloMatriculados public view returns (string memory _nombre, string memory _email) {
        DatosAlumno memory datos = datosAlumno[_dir];
        _nombre = datos.nombre;
        _email = datos.email;
    }
    
      
       /**
     * ddevuelve el lab reservado por el alumno, turno y puesto
     * 
    
     * 
     
     */ 

      function miReserva()  soloMatriculados public view returns (string memory lab) {
        
        DatosLaboratorio  memory nombrelab = datosLaboratorio[msg.sender];
        
       
        lab = nombrelab.nombreL;
       
        
    }
    

    
    
    /**
     * Consulta si una direccion pertenece a un alumno matriculado.
     * 
     * @param alumno La direccion de un alumno.
     * 
     * @return true si es una alumno matriculado.
     */
    function estaMatriculado(address alumno) private view returns (bool) {
      
        string memory _nombre = datosAlumno[alumno].nombre;
        
        bytes memory b = bytes(_nombre);
        
        return b.length != 0;
    } 

       /**
     * Consulta si un turno pertenece a un alumno matriculado.
     * 
     * @param alumno La direccion de un alumno.
     * 
     * @return true si es una alumno matriculado.
     */


       function estaReservado(address alumno) private view returns (bool) {
      
        string memory _nombre = datosTurno[alumno].nombre;
        
        bytes memory b = bytes(_nombre);
        
        return b.length != 0;
    }
    


     /**
     * Consulta si una direccion pertenece a un profe registrado.
     * 
     * 
     */
    
       function estaRegistrado(address _profesor) private view returns (bool) {
      
        string memory _nombreP = datosProfesor[_profesor].nombreP;
        
        bytes memory b = bytes(_nombreP);
        
        return b.length != 0;
    }


    

   




    /**
     * Modificador para que una funcion solo la pueda ejecutar el profesor.
     * 
     *
     */

    modifier soloOwner() {
        
        require(msg.sender == owner, "Solo permitido al owner");
        _;
    }
    
    
    /**
     * Modificador para que una funcion solo la pueda ejecutar el profesor.
     * 
     *
     */
    modifier soloProfesor() {
        
        require(msg.sender == profesor, "Solo permitido al profesor");
        _;
    }
    
    
    /**
     * Modificador para que una funcion solo la pueda ejecutar un alumno matriculado.
     */
    modifier soloMatriculados() {
        
        require(estaMatriculado(msg.sender), "Solo permitido a alumnos matriculados");
        _;
    }


        
    /**
     * Modificador para que una funcion solo la pueda ejecutar un alumno matriculado.
     */
    modifier soloMatriculadosyOwner() {
        
        require(estaMatriculado(msg.sender) || msg.sender == owner, "Solo permitido a alumnos owner matriculados");
        _;
    }
    
    /**
     * Modificador para que una funcion solo la pueda ejecutar el profesor.
     * 
     *
     */

    
      modifier soloRegistrados() {
        
        require(estaRegistrado(msg.sender), "Solo permitido a profes registrados");
        _;
    }
    
    
 
    /**
     * Modificador para que una funcion solo la pueda ejecutar un alumno no matriculado aun.
     */
    modifier noMatriculados() {
        
        require(!estaMatriculado(msg.sender), "Solo permitido a alumnos no matriculados");
        _;
    }
    
    /**
     * Modificador para que una funcion solo la pueda ejecutar un profe no matriculado aun.
     * 
     *
     */

    
      modifier noRegistrados() {
        
        require(!estaRegistrado(msg.sender), "Solo permitido a profes no registrados");
        _;
    }
    

    
       receive() external payable {
        revert("No se permite la recepcion de dinero.");
    }
}
