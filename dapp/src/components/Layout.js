import { Outlet } from "react-router-dom";

import Header from "./Header";
import Navegacion from "./Navegacion";


function Layout() {
    return (
        <>

            
            <Header />
            <Navegacion />
            <img className="imgfondo" src="/fondodApp.jpg" alt='fonditoazul'/>
            <Outlet />
            {/*<Fondo/>*/}
         
           	
           
         
           
            
           
        </>
    );
}

export default Layout;