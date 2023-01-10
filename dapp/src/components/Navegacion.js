import {Link} from "react-router-dom";
import SoyAlguno from './roles/SoyAlguno';


const Navegacion = () => (

  
    <nav>
         <ul>
          
            <li><Link to="/"><img className="Home" src="/home.jpg" alt='home'/></Link></li>
            <SoyAlguno owner profesor>
            <li><Link to="/alumnos/">Alumnos</Link></li>
            </SoyAlguno>
            <SoyAlguno owner>
            <li><Link to="/profesores/">Profesores</Link></li>
            </SoyAlguno>
            

            <li><Link to="/asignaturas/">Asignaturas</Link></li>
            
            <li><Link to="/laboratorios/">Laboratorios</Link></li>
            <li><Link to="/miscosas/">Mis Cosas</Link></li>
            <SoyAlguno owner>
            <li><Link to="/reservasLaboratorios/">Reservas</Link></li>
            </SoyAlguno>
            
            <li className = "Contacto"><Link to="/contacto/">Contacto</Link></li>
            

            
           
         
            
            
          </ul>
    </nav>


);

export default Navegacion;