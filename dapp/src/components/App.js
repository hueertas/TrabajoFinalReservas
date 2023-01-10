

import { BrowserRouter, Routes, Route } from "react-router-dom";

import '../css/App.css';









import {Alumnos, Alumno} from "./Alumnos/Alumnos";

import {Profesores, Profesor} from "./Profesores/Profesores";
//import Laboratorios from "./Laboratorios/Laboratorios";

import {Laboratorios, Laboratorio} from "./Laboratorios/Laboratorios";
//import Puestos from "./Puestos/Puestos";
import {Asignaturas, Asignatura} from "./Asignaturas/Asignaturas";
//import {Puestos, Puesto} from "./Puestos/Puestos";
import Loading from './Loading';
import Layout from './Layout';
import Home from './Home';
import ReservarPuestos from "./ReservarPuestos/ReservarPuestos";

import Contacto from "./Contacto/Contacto";
import {ReservasLabs,ReservasLab} from "./ReservasLaboratorios/ReservasLabs";
import {MisCosas,MiReserva} from "./MisCosas/MisCosas";







function App() {
  return (
    
  
            <div className="App">
              <Loading>
                <BrowserRouter>
                    <Routes>

                      
                 
                      <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="/asignaturas/" element={<Asignaturas/>}/>
                            
                        <Route path="asignaturas/:index" element={<Asignatura/>}/>
                       
                      
                      
                        <Route path="/alumnos/" element={<Alumnos/>}/>
                        <Route path="alumnos/:addr" element={<Alumno/>}/>
                        <Route path="/profesores/" element={<Profesores/>}/>
                        <Route path="profesores/:addr" element={<Profesor/>}/>

                     
                            
                        <Route path="/laboratorios/" element={<Laboratorios/>}/>
                        <Route path="laboratorios/:index" element={<Laboratorio/>}/>
                        
                        <Route path="reservarPuestos/" element={<ReservarPuestos/>}/>
                        <Route path="miscosas" element={<MisCosas/>}/>
                        <Route path="miscosas/:index" element={<MiReserva/>}/>
                        
                        <Route path="contacto" element={<Contacto/>}/>
                        <Route path="reservasLaboratorios" element={<ReservasLabs/>}/>
                        <Route path="reservasLaboratorios/:index" element={<ReservasLab/>}/>
                       
                      
                        
                        
                            
                     
                      </Route>
                    </Routes>
                </BrowserRouter>
            </Loading>

            
        </div>

        
    );
}



export default App;









