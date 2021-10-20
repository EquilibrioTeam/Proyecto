import React, { useEffect, useState } from "react";
import Layoutadmin from "layouts/LayoutAdmin";
import axios from "axios";

function Usuarios() {
  const uri = "http://localhost:8080/Usuarios";
  const [data, setData] = useState({
    nombre_usuario: "",
    nombre: "",
    apellido: "",
    identificacion: "",
    telefono: "",
    direccion: "",
    correo: "",
    rol: "",
    estado: "",
  });
  const onChangeInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const [filas, setFilas] = useState([]);
  const onSubmitForm = async (e) => {
    e.preventDefault();
    await axios
      .post(uri, data)
      .then(({ data }) => setFilas(data))
      .finally(() => alert("Producto agregado exitosamente"))
      .catch((e) => console.error(e));
    setData({
      nombre_usuario: "",
      nombre: "",
      apellido: "",
      identificacion: "",
      telefono: "",
      direccion: "",
      correo: "",
      rol: "",
      estado: "",
    });
  };
  const handleEliminarFila = (referencia_producto) => {
    const copia = [...filas];
    const nuevasFilas = copia.filter(
      (fila) => fila.identificacion !== referencia_producto
    );
    setFilas(nuevasFilas);
  };
  const [buscar, setBuscar] = useState("");
  const fetchData = async () => {
    await axios.get(uri).then(({ data }) => setFilas(data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  //console.log(filas);
  return (
    <Layoutadmin>
      <form className="registro_usuarios" onSubmit={(e) => onSubmitForm(e)}>
        <h4> REGISTRO DE USUARIOS</h4>
        <input
          onChange={(e) => onChangeInput(e)}
          className="informacion"
          type="text"
          name="nombre_usuario"
          id="nombre_usuario"
          placeholder="Ingrese el nombre de usuario"
          value={data.nombre_usuario}
          required
        />
        <input
          onChange={(e) => onChangeInput(e)}
          className="informacion"
          type="text"
          name="nombre"
          id="nombre"
          placeholder="Ingrese el nombre"
          value={data.nombre}
          required
        />
        <input
          onChange={(e) => onChangeInput(e)}
          className="informacion"
          type="text"
          name="apellido"
          id="apellido"
          placeholder="Ingrese el apellido"
          value={data.apellido}
          required
        />
        <input
          onChange={(e) => onChangeInput(e)}
          className="informacion"
          type="text"
          name="identificacion"
          id="identificacion"
          placeholder="Ingrese el numero de identificacion"
          value={data.identificacion}
          required
        />
        <input
          onChange={(e) => onChangeInput(e)}
          className="informacion"
          type="text"
          name="telefono"
          id="telefono"
          placeholder="Ingrese el telefono"
          value={data.telefono}
          required
        />
        <input
          onChange={(e) => onChangeInput(e)}
          className="informacion"
          type="text"
          name="direccion"
          id="direccion"
          placeholder="Ingrese la direccion"
          value={data.direccion}
          required
        />
        <input
          onChange={(e) => onChangeInput(e)}
          className="informacion"
          type="text"
          name="correo"
          id="correo"
          placeholder="Ingrese el correo electronico"
          value={data.correo}
          required
        />
        <input
          onChange={(e) => onChangeInput(e)}
          className="informacion"
          type="text"
          name="rol"
          id="rol"
          placeholder="Ingrese el rol"
          value={data.rol}
          required
        />
        <input
          onChange={(e) => onChangeInput(e)}
          className="informacion"
          type="text"
          name="estado"
          id="estado"
          placeholder="Ingrese el estado"
          value={data.estado}
          required
        />
        <p>POR FAVOR INGRESE LA INFORMACION DEL USUARIO A REGISTRAR</p>
        <button type="submit"> Registrar usuario </button>
      </form>
      <section className="tabla_usuarios" id="tabla_usuarios">
        <table
          className="tabla_de_usuarios"
          id="id_tabla_usuarios"
          contenteditable="true"
        >
          <thead>
            <tr>
              <th>Nombre de usuario</th>
              <th>TNombre</th>
              <th>Apellido</th>
              <th>Identificación</th>
              <th>Telefono</th>
              <th>Direccion</th>
              <th>Correo electronico</th>
              <th>Rol</th>
              <th>Estado</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {filas
              .filter((fila) =>
                JSON.stringify(fila)
                  .toLowerCase()
                  .includes(buscar.toLowerCase())
              )
              .map((fila) => (
                <tr key={fila.id}>
                  <td>{fila.nombre_usuario}</td>
                  <td>{fila.nombre}</td>
                  <td>{fila.apellido}</td>
                  <td>{fila.identificacion}</td>
                  <td>{fila.telefono}</td>
                  <td>{fila.direccion}</td>
                  <td>{fila.correo}</td>
                  <td>{fila.rol}</td>
                  <td>{fila.estado}</td>
                  <td>
                    <button
                      className="borrar"
                      onClick={() => handleEliminarFila(fila.identificacion)}
                    >
                      <i className="fa fa-close"></i>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <form>
          <input
            onChange={(e) => setBuscar(e.target.value)}
            value={buscar}
            type="text"
            name="producto_buscar"
            id="producto_buscar"
            class="buscar"
            placeholder="Ingrese el nombre, telefono, direccion o correo a buscar"
          />
        </form>
      </section>
    </Layoutadmin>
  );
}

export default Usuarios;
