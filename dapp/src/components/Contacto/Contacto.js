



const Contacto = () => {
        return (
        <article className="AppContacto">
         
                
                       
                            <li><span className="icon-map text-primary">Dirección: </span>Av. Complutense, 30, 28040 Madrid Madrid(España)  </li>
                            <li><a href="mailto:p.huertass@alumnos.upm.es"><span className="icon-phone text-primary">e-mail: </span>p.huertass@alumnos.upm.es</a></li>
                            <li><span className="icon-mail text-primary">Tlfn: </span>672 00 02 80</li>
                            <li><span className="icon-printer text-primary">Fax: </span>222-555-666</li>
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item"><a href="/" onClick={e => {if(e) e.preventDefault();}}>Policy Privacy</a></li>
                                <li className="list-inline-item"><a href="/" onClick={e => {if(e) e.preventDefault();}}>Terms of Use</a></li>
                                
                            </ul>

                            <p className="mb-0">© 2023 Company: Madrid</p>
                         
                        

               
        </article>);
    

}
export default Contacto;



