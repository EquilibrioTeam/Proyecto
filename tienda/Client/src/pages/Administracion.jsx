import React, { useEffect, useState } from "react";
import Layoutadmin from "layouts/LayoutAdmin";
import axios from "axios";

function Administracion() {
  const uri = "http://localhost:8080/Administrador";
  const [data, setData] = useState({
    nombre_producto: "",
    tipo_producto: "",
    referencia_producto: "",
    talla_producto: "",
    marca_producto: "",
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
      nombre_producto: "",
      tipo_producto: "",
      referencia_producto: "",
      talla_producto: "",
      marca_producto: "",
    });
  };
  const handleEliminarFila = (referencia_producto) => {
    const copia = [...filas];
    const nuevasFilas = copia.filter(
      (fila) => fila.referencia_producto !== referencia_producto
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
      <form className="registro_productos" onSubmit={(e) => onSubmitForm(e)}>
        <h4> REGISTRO DE PRODUCTOS</h4>
        <input
          onChange={(e) => onChangeInput(e)}
          className="informacion"
          type="text"
          name="nombre_producto"
          id="nombre_producto"
          placeholder="Ingrese el nombre del producto"
          value={data.nombre_producto}
          required
        />
        <input
          onChange={(e) => onChangeInput(e)}
          className="informacion"
          type="text"
          name="tipo_producto"
          id="tipo_producto"
          placeholder="Ingrese el tipo de producto"
          value={data.tipo_producto}
          required
        />
        <input
          onChange={(e) => onChangeInput(e)}
          className="informacion"
          type="text"
          name="referencia_producto"
          id="referencia_producto"
          placeholder="Ingrese la referencia del producto"
          value={data.referencia_producto}
          required
        />
        <input
          onChange={(e) => onChangeInput(e)}
          className="informacion"
          type="text"
          name="talla_producto"
          id="talla_producto"
          placeholder="Ingrese la talla del producto"
          value={data.talla_producto}
          required
        />
        <input
          onChange={(e) => onChangeInput(e)}
          className="informacion"
          type="text"
          name="marca_producto"
          id="marca_producto"
          placeholder="Ingrese la marca del producto"
          value={data.marca_producto}
          required
        />
        <p>POR FAVOR INGRESE LA INFORMACION DEL PRODUCTO A REGISTRAR</p>
        <button type="submit"> Registrar producto </button>
      </form>
      <section className="tabla_productos" id="pr">
        <table
          className="tabla_de_productos"
          id="id_tabla_productos"
          contenteditable="true"
        >
          <thead>
            <tr>
              <th>Nombre del producto</th>
              <th>Tipo de producto</th>
              <th>Referencia del producto</th>
              <th>Talla del producto</th>
              <th>Marca del producto</th>
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
                  <td>{fila.nombre_producto}</td>
                  <td>{fila.tipo_producto}</td>
                  <td>{fila.referencia_producto}</td>
                  <td>{fila.talla_producto}</td>
                  <td>{fila.marca_producto}</td>
                  <td>
                    <button
                      className="borrar"
                      onClick={() =>
                        handleEliminarFila(fila.referencia_producto)
                      }
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
            placeholder="Ingrese nombre, marca, talla o referencia del producto"
          />
        </form>
      </section>
    </Layoutadmin>
  );
}

export default Administracion;
