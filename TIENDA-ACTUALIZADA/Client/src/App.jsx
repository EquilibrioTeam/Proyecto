import "styles/App.css";
import "styles/estilos.css";
import "styles/Login.css";
import "styles/administracion.css";
import "styles/usuarios.css";
import "media/icomoon/style.css";
import "styles/actualizacion.css";
import "styles/agregar_venta.css";

import VentaAdmin from "./pages/Ventas";
import Index1 from "./pages/Index";
import Usuarios from "pages/Usuarios";
import Login from "pages/Login";
import Administracion from "pages/Administracion";
import AgregarVenta from "pages/agregar_venta";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Actualizacion from "pages/actualizacion";

function App() {
  return (
    <div classNamee="App">
      <Router>
        <Switch>
          <Route path="/actualizacion" component={Actualizacion}>
            <Actualizacion />
          </Route>
          <Route path="/Usuarios" component={Usuarios}>
            <Usuarios />
          </Route>
          <Route path="/agregar_venta" component={AgregarVenta}>
            <AgregarVenta />
          </Route>
          <Route path="/Ventas" component={VentaAdmin}>
            <VentaAdmin />
          </Route>
          <Route path="/producto" component={Administracion}>
            <Administracion />
          </Route>
          <Route path="/login" component={Login}>
            <Login />
          </Route>
          <Route path="/">
            <Index1 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
