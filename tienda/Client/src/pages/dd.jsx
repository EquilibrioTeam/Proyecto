<div>
<header>
    <div className="contenedor_header">
        <Header />
        <div className="contendor_info_header">
            {/* BOTON REGISTRO DE VENTAS
            Trigger/Open The Modal */}
            <button id="myBtn">
                Agregar Venta
            </button>

        </div>
        <div className="buscar">
            <input type="text" placeholder="ID de Venta / ID Cliente / Nombre Cliente" />
            <button id="myBtn">
                Buscar
            </button>
        </div>
    </div>
</header>

<body>
     <main>
        {/* Cuerpo menu lateral  */}
        
        <MenuLateral />

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
                        <button className="Btn_eliminar"><i className="fa fa-close"></i>  </button>
                    </div>
                    
                    <div>
                        <button className="Btn_editar"><i className="fa fa-edit"></i>  </button>
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
    
    <div>
        <div id="myModal" className="modal">
        {/* Contenido Ventana */}
        <div className="modal-content">
            <div class="modal-header">
                <span className="close">&times;</span>
                <h2>Registro de Venta</h2>
            </div>

            <div className="modal-body">
                {/* DIV GENERAL DE LOS DATOS */}
                <div className="seccion_datos">
                <form action="">
                        {/* <!-- DIV CONTENEDOR DE REGISTRO VENTA --> */}
                        <div className="Cont_Datos">
                            <span className="form_text">Identificador de Producto</span>
                            <label for="Id_producto">
                                <input type="text" name="Id_producto" className="input_producto" required placeholder="ID Producto" readonly value="P_001" />
                            </label>
                            <br/>
                            <br/>
                            <span className="form_text">Identificador de la Venta</span>
                            <label for="Id_venta">
                                <input type="text" name="Id_venta" className="input_producto" required placeholder="ID Venta" readonly value="V_001"/>
                            </label>

                            <div className="valor_producto">
                                <span className="form_text">Precio del Producto</span>
                                <label for="precio_siniva">
                                    <input type="text" name="precio_siniva" className="input_producto" required placeholder="Precio Sin IVA" readonly value="$ 35.000" />
                                </label>
                                <br/>
                                <label for="precio_coniva">
                                    <span className="form_text">Precio con IVA</span>
                                    <input type="text" name="precio_coniva" className="input_producto" required placeholder="Precio + IVA" readonly value="$41.650" />
                                </label>
                                <br/>
                                <label for="fecha_compra">
                                    <span className="form_text">Fecha y Hora de la Compra</span>
                                    <input type="datetime-local" name="fecha_compra" className="input_producto" required />
                                </label>
                            </div>
                        </div>
                        {/* <!-- DIV CONTENEDOR DE LAS CARACTERÍSTICAS DEL PRODUCTO IMAGEN Y DECRIPCIÓN --> */}
                        <div className="info_producto">
                            <br/>
                            <span className="txt_division">Descripción del Producto</span> 
                            <br/>
                            <div className="img_producto">
                                
                            </div>
                            <br/>
                            <div className="desc_producto">
                                <p> Color: Negro </p>
                                <p>Suela: Blanca</p>
                                <p>Material: Cuero</p>
                                <p>Cordones: Sí</p>
                            </div>
                        </div>
                    </form>
                </div>

                <hr/>
                {/* <!-- DIV DE REGISTRO DE COMPRADOR --> */}
                <div className="datos_comprador">
                    <form action="">
                        <br/>
                        <span className="txt_division">Registro de Comprador</span>
                        <br/>
                        <div className="nb_cliente">
                            <label for="nom_cliente">
                                <span>Nombre del comprador</span>
                                <input type="text" name="nom_cliente" className="input_cliente" id="nombre_cliente" required />
                            </label>
                        </div>
                        <div className="apll_cliente">
                            <label for="apel_cliente">
                                <span>Apellido del comprador</span>
                                <input type="text" className="input_cliente" id="apellido_cliente" required />
                            </label>    
                        </div>
                        <div className="id_cliente">
                            <label for="ID_cliente">
                                <span>Identificación del comprador</span>
                                <input type="number" className="input_cliente" id="idc_cliente" required />                                </label>
                        </div>
                        <div>
                            <label for="registrar_venta">
                                <input type="button" name="registrar_Venta" id="btn_registro" value="Registrar"/>
                            </label>
                            
                        </div>
                    </form>
                </div>
            </div>
            <div class="modal-footer">
            </div>
        </div>
        </div>
    </div>
    </main>
</body>
</div>