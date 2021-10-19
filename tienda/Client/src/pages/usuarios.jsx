import Layoutadmin from "layouts/LayoutAdmin"
import { Link } from "react-router-dom";

function Usuarios(){
    return(
        <Layoutadmin>
            <section>
                <div class="menu-usuarios">
                    <nav>
                        <ul>
                            <li><i class="icon-user-plus"></i><a href="#">Agregar Usuario</a></li>
                            <li><i class="icon-user-minus"></i><a href="#">Eliminar Usuario</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="contenido-usuarios">
                    <h1>Usuarios de la tienda</h1>           
                    <table>
                        <tbody>
                            <tr>
                                <th>Usuario</th>
                                <th>Nombres</th>
                                <th>Apellidos</th>
                                <th>Identificación</th>                
                                <th>Teléfono</th>
                                <th>Dirección</th>
                                <th>Correo Electrónico</th>
                                <th>Rol</th>
                                <th>Estado</th>                     
                                <th rowspan="2" class="act-btn">
                                    <Link to="/actualizacion" className="boton"> 
                                    Editar</Link>
                                </th>
                            </tr>    
                            <tr>
                                <td>leonk</td>
                                <td>Leon</td>
                                <td>Scott Kennedy</td>
                                <td>12345678</td>                
                                <td>3205555555 </td>
                                <td>Raccoon City</td>
                                <td>leonskennedy@gmail.com</td>
                                <td>Administrador</td>
                                <td>Activo</td>
                            </tr>
                        </tbody>
                    </table>   
                    <br/>    
                </div>
            </section>
        </Layoutadmin>
    );
}

export default  Usuarios;


