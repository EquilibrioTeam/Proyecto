import LayoutSecundarias from "layouts/LayoutSecundarias";
import React from "react";

const actualizacion = () => {
  return (
    <LayoutSecundarias>
      <section id="actualizar">
        <div className="actualizacion">
          <h2>Datos del usuario</h2>
          <form id="formulario" className="actualizacion_usuarios">
            <h4> Actualizar Usuario</h4>

            <input
              className="controls"
              type="text"
              name="nombres_usuario"
              id="nombres_usuario"
              placeholder="Ingrese los nombres del usuario"
            />
            <input
              className="controls"
              type="text"
              name="apellidos_usuario"
              id="tipo_producto"
              placeholder="Ingrese los apellidos del usuario"
            />
            <input
              className="controls"
              type="number"
              name="identificación"
              id="identificacion"
              placeholder="Ingrese la identificación del usuario"
            />
            <input
              className="controls"
              type="tel"
              name="tel"
              id="tel"
              placeholder="Ingrese el teléfono del usuario"
            />
            <input
              className="controls"
              type="text"
              name="direccion"
              id="direccion"
              placeholder="Ingrese la dirección del usuario"
            />
            <input
              className="controls"
              type="email"
              name="email"
              id="email"
              placeholder="Ingrese el correo electrónico del usuario"
            />

            <select className="controls" name="rol">
              <option selected="selected">Elija un rol</option>
              <option>Vendedor</option>
              <option>Administrador</option>
            </select>

            <select className="controls" name="estado">
              <option selected="selected">Estado</option>
              <option>Pendiente</option>
              <option>Activo</option>
              <option>Inactivo</option>
            </select>
            <div className="btn_guardar">
              <button>Guardar</button>
            </div>
          </form>
        </div>
      </section>
    </LayoutSecundarias>
  );
};

export default actualizacion;
