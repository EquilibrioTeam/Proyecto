import React from "react";
import { Link } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router-dom";

const LayoutLogin = () => {
  let history = useHistory();
  const responseGoogle = (response) => {
    console.log(response.profileObj.email);
    history.push("/Usuarios");
  };
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
        <GoogleLogin
          clientId="808256838062-lrn2slb1qcc4f33h08aqmbk0gol7bsi9.apps.googleusercontent.com"
          buttonText="Iniciar Sesión"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          redirectUri="http://localhost:3000/Usuarios"
          cookiePolicy={"single_host_origin"}
        />
      </body>
    </div>
  );
};

export default LayoutLogin;
