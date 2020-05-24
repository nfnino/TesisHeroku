import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addTask } from "../../actions/taskActions";
import classnames from "classnames";
import AsyncSelect from 'react-select/async';

import { getAssets } from "../../actions/assetActions";
import { getUsers } from "../../actions/userActions";

class TaskForm extends Component {
  constructor() {
    super();
    this.state = {
      activo: "",
      tipo_mant: "",
      fecha_inicial_tent: "",
      fecha_final_tent: "",
      imagen1_antes_mant: "",
      imagen2_antes_mant: "",
      imagen3_antes_mant: "",
      imagen4_antes_mant: "",
      imagen5_antes_mant: "",
      desc_falla:"",
      email_compras:"",
      desc_materiales_compras: "",
      ejecutor_interno:"",
      supervisor:"",
      nit_empresa_externa: "",
      doc_orden_compra: "",
      valor_externo: "",
      fecha_inicial_real: "",
      fecha_final_real: "",
      estado:"Creada",
      errors: {}
    };
  }

  componentDidMount() {
    this.props.getAssets();
    this.props.getUsers();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  activoChange = activo => {
    this.setState({
      activo: activo.value
    });
  }

  tipoChange = tipo => {
    this.setState({
      tipo_mant: tipo.value
    })
  }

  ejecutorChange = ejecutor => {
    this.setState({
      ejecutor_interno: ejecutor.value
    })
  }

  supervisorChange = supervisor => {
    this.setState({
      supervisor: supervisor.value
    })
  }

  onSubmit = e => {
      e.preventDefault();

  const newTask = {
      activo: this.state.activo,
      tipo_mant: this.state.tipo_mant,
      fecha_inicial_tent: this.state.fecha_inicial_tent,
      fecha_final_tent: this.state.fecha_final_tent,
      imagen1_antes_mant: this.state.imagen1_antes_mant,
      imagen2_antes_mant: this.state.imagen2_antes_mant,
      imagen3_antes_mant: this.state.imagen3_antes_mant,
      imagen4_antes_mant: this.state.imagen4_antes_mant,
      imagen5_antes_mant: this.state.imagen5_antes_mant,
      desc_falla: this.state.desc_falla,
      email_compras: this.state.email_compras,
      desc_materiales_compras: this.state.desc_materiales_compras,
      ejecutor_interno: this.state.ejecutor_interno,
      supervisor: this.state.supervisor,
      nit_empresa_externa: this.state.nit_empresa_externa,
      doc_orden_compra: this.state.doc_orden_compra,
      valor_externo: this.state.valor_externo,
      fecha_inicial_real: this.state.fecha_inicial_real,
      fecha_final_real: this.state.fecha_final_real,
      estado: this.state.estado
      };
      this.props.addTask(newTask, this.props.history); 
  };
  
render() {
  const { assets } = this.props.assets;
  const { users } = this.props.users;
  const { errors } = this.state;

//------------------------------ Activos dropdown ---------------------------------------
let options = []

if( assets.length !== 0) {

  let activos = Object.values(assets.data)

  options = activos.map(asset => ({
    value: asset.nombre,
    label: asset.nombre
  }))
}
//------------------------------------------------------------------------------------------//

//------------------------------ Ejecutor y supervisor dropdown ---------------------------------------
let options_ejecutor = []
let options_supervisor = []

if( users.length !== 0) {

  let usuarios = Object.values(users.data)

  let nuevo = usuarios.map(user => ({
        value: user.name,
        label: user.name,
        type: user.role
  }))

  for (let i = 0; i < nuevo.length; i++) {
    let temp = nuevo[i]
    if (temp.type === "Operario") {
      options_ejecutor.push(temp)
    }
    if (temp.type === "Jefe de área") {
      options_supervisor.push(temp)
    }
  }
}
//------------------------------------------------------------------------------------------//

//------------------------------ Tipo activo dropdown ---------------------------------------
let options_t = [
  {value: "Predictivo", label: "Predictivo"},
  {value: "Correctivo", label: "Correctivo"}
]
//------------------------------------------------------------------------------------------//

return (
      <div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
            <Link to="/tasks" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              tasks
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Nueva </b> Actividad de Mantenimiento :
              </h4>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                {/* <Select
                  onChange={this.onChange}
                  value={this.state.activo} 
                  error={errors.activo}
                  id="activo"
                  type="text"
                  className={classnames("", {
                    invalid: errors.activo
                  })}>
                    {options.map(option => (
                      <option value={option.value}>
                        {option.label}
                      </option>
                    ))}
                </Select> */}
                    <pre>Activo: "{this.state.activo}"</pre>
                    <AsyncSelect
                      value={this.state.activo}
                      defaultOptions={options}
                      onChange={this.activoChange}/>
               {/*  <label htmlFor="activo">Activo</label>
                <span className="red-text">{errors.activo}</span> */}
              </div>
              <div className="input-field col s12">
               {/*  <input
                  onChange={this.onChange}
                  value={this.state.tipo_mant}
                  error={errors.tipo_mant}
                  id="tipo_mant"
                  type="text"
                  className={classnames("", {
                    invalid: errors.tipo_mant
                  })}
                />
                <label htmlFor="tipo_mant">Tipo de mantenimiento</label>
                <span className="red-text">{errors.tipo_mant}</span> */}
                <pre>Tipo de mantenimiento: "{this.state.tipo_mant}"</pre>
                    <AsyncSelect
                      value={this.state.tipo_mant}
                      defaultOptions={options_t}
                      onChange={this.tipoChange}/>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.fecha_inicial_tent}
                  error={errors.fecha_inicial_tent}
                  id="fecha_inicial_tent"
                  type="date"
                  className={classnames("", {
                    invalid: errors.fecha_inicial_tent
                  })}
                />
                <label htmlFor="fecha_inicial_tent">Inicio tentativo</label>
                <span className="red-text">{errors.fecha_inicial_tent}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.fecha_final_tent}
                  error={errors.fecha_final_tent}
                  id="fecha_final_tent"
                  type="date"
                  className={classnames("", {
                    invalid: errors.fecha_final_tent
                  })}
                />
                <label htmlFor="fecha_final_tent">Finalizacion tentativa</label>
                <span className="red-text">{errors.fecha_final_tent}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.imagen1_antes_mant}
                  error={errors.imagen1_antes_mant}
                  id="imagen1_antes_mant"
                  type="text"
                  className={classnames("", {
                    invalid: errors.imagen1_antes_mant
                  })}
                />
                <label htmlFor="imagen1_antes_mant">Imagen antes 1</label>
                <span className="red-text">{errors.imagen1_antes_mant}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.imagen2_antes_mant}
                  error={errors.imagen2_antes_mant}
                  id="imagen2_antes_mant"
                  type="text"
                  className={classnames("", {
                    invalid: errors.imagen2_antes_mant
                  })}
                />
                <label htmlFor="imagen2_antes_mant">Imagen antes 2</label>
                <span className="red-text">{errors.imagen2_antes_mant}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.imagen3_antes_mant}
                  error={errors.imagen3_antes_mant}
                  id="imagen3_antes_mant"
                  type="text"
                  className={classnames("", {
                    invalid: errors.imagen3_antes_mant
                  })}
                />
                <label htmlFor="imagen3_antes_mant">Imagen antes 3</label>
                <span className="red-text">{errors.imagen3_antes_mant}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.imagen4_antes_mant}
                  error={errors.imagen4_antes_mant}
                  id="imagen4_antes_mant"
                  type="text"
                  className={classnames("", {
                    invalid: errors.imagen4_antes_mant
                  })}
                />
                <label htmlFor="imagen4_antes_mant">Imagen antes 4</label>
                <span className="red-text">{errors.imagen4_antes_mant}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.imagen5_antes_mant}
                  error={errors.imagen5_antes_mant}
                  id="imagen5_antes_mant"
                  type="text"
                  className={classnames("", {
                    invalid: errors.imagen5_antes_mant
                  })}
                />
                <label htmlFor="imagen5_antes_mant">Imagen antes 5</label>
                <span className="red-text">{errors.imagen5_antes_mant}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.desc_falla}
                  error={errors.desc_falla}
                  id="desc_falla"
                  type="text"
                  className={classnames("", {
                    invalid: errors.desc_falla
                  })}
                />
                <label htmlFor="desc_falla">Descripción falla</label>
                <span className="red-text">{errors.desc_falla}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email_compras}
                  error={errors.email_compras}
                  id="email_compras"
                  type="text"
                  className={classnames("", {
                    invalid: errors.email_compras
                  })}
                />
                <label htmlFor="email_compras">Email compras</label>
                <span className="red-text">{errors.email_compras}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.desc_materiales_compras}
                  error={errors.desc_materiales_compras}
                  id="desc_materiales_compras"
                  type="text"
                  className={classnames("", {
                    invalid: errors.desc_materiales_compras
                  })}
                />
                <label htmlFor="desc_materiales_compras">Descripción materiales compras</label>
                <span className="red-text">{errors.desc_materiales_compras}</span>
              </div>
              <div className="input-field col s12">
               {/*  <input
                  onChange={this.onChange}
                  value={this.state.ejecutor_interno}
                  error={errors.ejecutor_interno}
                  id="ejecutor_interno"
                  type="text"
                  className={classnames("", {
                    invalid: errors.ejecutor_interno
                  })}
                />
                <label htmlFor="ejecutor_interno">Ejecutor interno</label>
                <span className="red-text">{errors.ejecutor_interno}</span> */}
                <pre>Ejecutor interno: "{this.state.ejecutor_interno}"</pre>
                    <AsyncSelect
                      value={this.state.ejecutor_interno}
                      defaultOptions={options_ejecutor}
                      onChange={this.ejecutorChange}/>
              </div>
              <div className="input-field col s12">
                {/* <input
                  onChange={this.onChange}
                  value={this.state.supervisor}
                  error={errors.supervisor}
                  id="supervisor"
                  type="text"
                  className={classnames("", {
                    invalid: errors.supervisor
                  })}
                />
                <label htmlFor="supervisor">Supervisor</label>
                <span className="red-text">{errors.supervisor}</span> */}
                <pre>Supervisor: "{this.state.supervisor}"</pre>
                    <AsyncSelect
                      value={this.state.supervisor}
                      defaultOptions={options_supervisor}
                      onChange={this.supervisorChange}/>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.nit_empresa_externa}
                  error={errors.nit_empresa_externa}
                  id="nit_empresa_externa"
                  type="text"
                  className={classnames("", {
                    invalid: errors.nit_empresa_externa
                  })}
                />
                <label htmlFor="nit_empresa_externa">NIT empresa</label>
                <span className="red-text">{errors.nit_empresa_externa}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.nombre_empresa_externa}
                  error={errors.nombre_empresa_externa}
                  id="nombre_empresa_externa"
                  type="text"
                  className={classnames("", {
                    invalid: errors.nombre_empresa_externa
                  })}
                />
                <label htmlFor="nombre_empresa_externa">Nombre empresa</label>
                <span className="red-text">{errors.nombre_empresa_externa}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.doc_orden_compra}
                  error={errors.doc_orden_compra}
                  id="doc_orden_compra"
                  type="text"
                  className={classnames("", {
                    invalid: errors.doc_orden_compra
                  })}
                />
                <label htmlFor="doc_orden_compra">Documento orden compra</label>
                <span className="red-text">{errors.doc_orden_compra}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.valor_externo}
                  error={errors.valor_externo}
                  id="valor_externo"
                  type="text"
                  className={classnames("", {
                    invalid: errors.valor_externo
                  })}
                />
                <label htmlFor="valor_externo">Valor monto externo</label>
                <span className="red-text">{errors.valor_externo}</span>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Crear
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

TaskForm.propTypes = {
    addTask: PropTypes.func.isRequired,
    getAssets: PropTypes.func.isRequired,
    assets: PropTypes.object.isRequired,
    getUsers: PropTypes.func.isRequired,
    users: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  assets: state.assets,
  users: state.users,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { getAssets, getUsers, addTask }
)(TaskForm);