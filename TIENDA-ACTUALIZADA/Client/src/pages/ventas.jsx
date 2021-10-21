import React, { useEffect, useState } from "react";
import Layoutadmin from "layouts/LayoutAdmin";
import axios from "axios";

function Ventas() {
  const uri = "http://localhost:8080/Ventas";
  const [data, setData] = useState({
    id_venta: "",
    fecha_compra: "",
    cantidad: "",
    valor_compra: "",
    articulo: "",
    vendedor: "",
    comprador: "",
    id_comprador: "",
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
      .finally(() => alert("Venta agregada exitosamente"))
      .catch((e) => console.error(e));
    setData({
      id_venta: "",
      fecha_compra: "",
      cantidad: "",
      valor_compra: "",
      articulo: "",
      vendedor: "",
      comprador: "",
      id_comprador: "",
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
        <h4> REGISTRO DE VENTAS</h4>
        <input
          onChange={(e) => onChangeInput(e)}
          className="informacion"
          type="text"
          name="id_venta"
          id="id_venta"
          placeholder="Ingrese el ID de la venta"
          value={data.id_venta}
          required
        />
        <input
          onChange={(e) => onChangeInput(e)}
          className="informacion"
          type="text"
          name="fecha_compra"
          id="fecha_compra"
          placeholder="Ingrese la fecha de la compra"
          value={data.fecha_compra}
          required
        />
        <input
          onChange={(e) => onChangeInput(e)}
          className="informacion"
          type="text"
          name="cantidad"
          id="cantidad"
          placeholder="Ingrese la cantidad de producto a vender"
          value={data.cantidad}
          required
        />
        <input
          onChange={(e) => onChangeInput(e)}
          className="informacion"
          type="text"
          name="valor_compra"
          id="valor_compra"
          placeholder="Ingrese el valor de la compta"
          value={data.valor_compra}
          required
        />
        <input
          onChange={(e) => onChangeInput(e)}
          className="informacion"
          type="text"
          name="articulo"
          id="articulo"
          placeholder="Ingrese el articulo a vender"
          value={data.articulo}
          required
        />
        <input
          onChange={(e) => onChangeInput(e)}
          className="informacion"
          type="text"
          name="vendedor"
          id="vendedor"
          placeholder="Ingrese el nombre del vendedor"
          value={data.vendedor}
          required
        />
        <input
          onChange={(e) => onChangeInput(e)}
          className="informacion"
          type="text"
          name="comprador"
          id="comprador"
          placeholder="Ingrese el nombre del comprador"
          value={data.comprador}
          required
        />
        <input
          onChange={(e) => onChangeInput(e)}
          className="informacion"
          type="text"
          name="id_comprador"
          id="id_comprador"
          placeholder="Ingrese el ID del comprador"
          value={data.id_comprador}
          required
        />
        <p>POR FAVOR INGRESE LA INFORMACION DE LA VENTA</p>
        <button type="submit"> Registrar venta </button>
      </form>
      <section className="tabla_productos" id="pr">
        <table
          className="tabla_de_productos"
          id="id_tabla_productos"
          contenteditable="true"
        >
          <thead>
            <tr>
              <th>ID venta</th>
              <th>Fecha de compra</th>
              <th>Cantidad de elementos</th>
              <th>Valor de la compra</th>
              <th>Articulo comprado</th>
              <th>Vendedor</th>
              <th>Comprador</th>
              <th>ID comprador</th>
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
                  <td>{fila.id_venta}</td>
                  <td>{fila.fecha_compra}</td>
                  <td>{fila.cantidad}</td>
                  <td>$-{fila.valor_compra}</td>
                  <td>{fila.articulo}</td>
                  <td>{fila.vendedor}</td>
                  <td>{fila.comprador}</td>
                  <td>{fila.id_comprador}</td>
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
            placeholder="Ingrese el ID de Venta, el nombre del cliente o el ID del cliente"
          />
        </form>
      </section>
    </Layoutadmin>
  );
}

export default Ventas;
