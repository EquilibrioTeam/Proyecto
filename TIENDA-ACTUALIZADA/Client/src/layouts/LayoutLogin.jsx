import React from "react";
import { Link } from "react-router-dom";

const LayoutLogin = () => {
  return (
    <div>
      <body className="Body_login">
        <section>
          <figure class="letras_logo"></figure>
        </section>
        <section className="Contenedor_form">
          <form action="" className="Formulario">
            <label for="usuario">
              <span id="titulo">Bienvenido</span>
              <br />
              <input
                type="email"
                id="nombre"
                name="usuario"
                required
                class="Input_Texto"
                placeholder="correo@xx.com "
              />
            </label>
            <label for="contrasena">
              <input
                type="password"
                id="contrasena"
                name="contrasena"
                required
                class="Input_Texto"
                placeholder="Contraseña"
              />
            </label>
            <br />
            <br />
            <span class="Lineas_Texto">Seleccione el Tipo de Rol</span>
            <br />
            <input
              list="roles"
              id="lista_roles"
              required
              placeholder="Seleccione el Rol"
            />
            <datalist id="roles">
              <option value="Administrador"></option>
              <option value="Vendedor"></option>
            </datalist>
            <br />
            <br />
            <Link to="/Usuarios">
              <input type="submit" value="Login" id="envio" />
            </Link>
          </form>
          <div className="inicio_google">
            <figure id="logo_google"></figure>
          </div>
          <Link to="/">
            <p id="registro">Registrarse</p>
          </Link>
        </section>
      </body>
    </div>
  );
};

export default LayoutLogin;
