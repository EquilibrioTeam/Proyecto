import Layoutadmin from "layouts/LayoutAdmin";
import Emergente from "components/emergente";
import { Link } from "react-router-dom";

function Ventas() {
  return (
    <Layoutadmin>
      <Emergente />
      <div className="contenedor_header">
        <div className="contendor_info_header">
          {/* BOTON REGISTRO DE VENTAS
                    Trigger/Open The Modal */}
          <Link to="/agregar_venta">
            <button id="myBtn">Agregar Venta</button>
          </Link>
        </div>
        <div className="buscar_barra">
          <input
            type="text"
            placeholder="ID de Venta / ID Cliente / Nombre Cliente"
            className="barra_input"
          />
          <button id="myBtn">Buscar</button>
        </div>
      </div>

      {/* FORMULARIO DE VENTAS */}
      <div id="table">
        <div className="col">
          <div className={"head"}>ID Venta</div>
          <div className={"head"}>Fecha de Compra</div>
          <div className={"head"}>Cantidad de elementos</div>
          <div className={"head"}>Valor de la compra</div>
          <div className={"head"}>Artículo comprado</div>
          <div className={"head"}>Vendedor</div>
          <div className={"head"}>Comprador</div>
          <div className={"head"}>ID Comprador</div>
          <div className={"head"}></div>
        </div>
        <div className="col">
          <div className={"cel"}>V_001</div>
          <div className={"cel"}>03/10/2021 - 09:50 AM</div>
          <div className={"cel"}>1</div>
          <div className={"cel"}>$ 41.650</div>
          <div className={"cel"}>Zapatos Gamuza</div>
          <div className={"cel"}>David Duarte</div>
          <div className={"cel"}>Hugo Vega</div>
          <div className={"cel"}>C_001</div>
          <div className={"cel"}>
            <div>
              <button className="Btn_eliminar">
                <i className="fa fa-close"></i>{" "}
              </button>
            </div>

            <div>
              <button className="Btn_editar">
                <i className="fa fa-edit"></i>{" "}
              </button>
            </div>
          </div>
        </div>

        <div className="col">
          <div className={"cel"}>V_002</div>
          <div className={"cel"}>04/10/2021 - 12:50 PM</div>
          <div className={"cel"}>1</div>
          <div className={"cel"}>$ 65.000</div>
          <div className={"cel"}>Zapatillas Derportivas</div>
          <div className={"cel"}>Edwin Chica</div>
          <div className={"cel"}>Julián Vanegas</div>
          <div className={"cel"}>C_002</div>
          <div className={"cel"}></div>
        </div>

        <div className="col">
          <div className={"foot"}></div>
          <div className={"foot"}></div>
          <div className={"foot"}></div>
          <div className={"foot"}></div>
          <div className={"foot"}></div>
          <div className={"foot"}></div>
          <div className={"foot"}></div>
          <div className={"foot"}></div>
          <div className={"foot"}></div>
        </div>
      </div>

      {/* VENTANA MODAL */}
    </Layoutadmin>
  );
}

export default Ventas;
