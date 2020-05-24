import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addAsset } from "../../actions/assetActions";
import classnames from "classnames";
import AsyncSelect from 'react-select/async';

class AssetForm extends Component {
  constructor() {
    super();
    this.state = {
      recinto: "",
      ubicacion: "",
      categoria: "",
      nombre: "",
      fecha_compra: "",
      valor: "",
      dias_garantia: "",
      fecha_fin_garantia: "",
      imagen1: "",
      imagen2: "",
      imagen3: "",
      imagen4: "",
      imagen5: "",
      manual: "",
      cod_qr: "",
      dias_frec_mant_preventivo: "",
      estado: "Creado",
      observacion: "",
      errors: {}
    };
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

  catChange = category => {
    this.setState({ categoria: category.value})
  }

  recChange = recinto => {
    this.setState({ recinto: recinto.value})
  }

onSubmit = e => {
    e.preventDefault();

const newAsset = {
  recinto: this.state.recinto,
  ubicacion: this.state.ubicacion,
  categoria: this.state.categoria,
  nombre: this.state.nombre,
  fecha_compra: this.state.fecha_compra,
  valor: this.state.valor,
  dias_garantia: this.state.dias_garantia,
  fecha_fin_garantia: this.state.fecha_fin_garantia,
  imagen1: this.state.imagen1,
  imagen2: this.state.imagen2,
  imagen3: this.state.imagen3,
  imagen4: this.state.imagen4,
  imagen5: this.state.imagen5,
  manual: this.state.manual,
  cod_qr: this.state.cod_qr,
  dias_frec_mant_preventivo: this.state.dias_frec_mant_preventivo,
  estado: this.state.estado,
  observacion: this.state.observacion,
  };
    this.props.addAsset(newAsset, this.props.history); 
};
  
render() {
    const { errors } = this.state;

    let options_rec = [
      {value: "Movistar Arena Colombia", label: "Movistar Arena Colombia"}
    ]

    let options_cat = [
      {value: "Accesos", label: "Accesos"},
      {value: "Acústica", label: "Acústica"},
      {value: "Aluminio/vidrio", label: "Aluminio/vidrio"},
      {value: "Aparatos sanitarios", label: "Aparatos sanitarios"},
      {value: "Arquitectura", label: "Arquitectura"},
      {value: "Acabados/interior", label: "Acabados/interior"},
      {value: "Cubiertas", label: "Cubiertas"},
      {value: "Dotaciones", label: "Dotaciones"},
      {value: "Equipos de cómputo", label: "Equipos de cómputo"},
      {value: "Equipos de seguridad en alturas", label: "Equipos de seguridad en alturas"},
      {value: "Estructuras metálicas", label: "Estructuras metálicas"},
      {value: "Fachada", label: "Fachada"},
      {value: "Gas", label: "Gas"},
      {value: "Hidrosanitario RCI", label: "Hidrosanitario RCI"},
      {value: "HVAC", label: "HVAC"},
      {value: "Iluminación exterior", label: "Iluminación exterior"},
      {value: "Seguridad y control", label: "Seguridad y control"},
      {value: "Subestación eléctrica", label: "Subestación eléctrica"},
      {value: "Transporte vertical", label: "Transporte vertical"},
      {value: "Urbanismo", label: "Urbanismo"},
      {value: "Vallas", label: "Vallas"},
      {value: "Ventanería de fachada", label: "Ventanería de fachada"},
      {value: "Voz", label: "Voz"},
      {value: "Datos y telecomunicaciones", label: "Datos y telecomunicaciones"}
    ]

return (
      <div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
            <Link to="/assets" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              assets
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Nuevo activo</b> :
              </h4>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                {/* <input
                  onChange={this.onChange}
                  value={this.state.recinto}
                  error={errors.recinto}
                  id="recinto"
                  type="text"
                  className={classnames("", {
                    invalid: errors.recinto
                  })}
                />
                <label htmlFor="desc">Recinto</label>
                <span className="red-text">{errors.recinto}</span> */}
                <pre>Recinto: "{this.state.recinto}"</pre>
                    <AsyncSelect
                      value={this.state.recinto}
                      defaultOptions={options_rec}
                      onChange={this.recChange}/>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.ubicacion}
                  error={errors.ubicacion}
                  id="ubicacion"
                  type="text"
                  className={classnames("", {
                    invalid: errors.ubicacion
                  })}
                />
                <label htmlFor="ubicacion">Ubicación</label>
                <span className="red-text">{errors.ubicacion}</span>
              </div>
              <div className="input-field col s12">
                {/* <input
                  onChange={this.onChange}
                  value={this.state.categoria}
                  error={errors.categoria}
                  id="categoria"
                  type="text"
                  className={classnames("", {
                    invalid: errors.categoria
                  })}
                />
                <label htmlFor="categoria">Categoría</label>
                <span className="red-text">{errors.categoria}</span> */}
                <pre>Categoría: "{this.state.categoria}"</pre>
                    <AsyncSelect
                      value={this.state.categoria}
                      defaultOptions={options_cat}
                      onChange={this.catChange}/>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.nombre}
                  error={errors.nombre}
                  id="nombre"
                  type="text"
                  className={classnames("", {
                    invalid: errors.nombre
                  })}
                />
                <label htmlFor="nombre">Nombre activo</label>
                <span className="red-text">{errors.nombre}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.fecha_compra}
                  error={errors.fecha_compra}
                  id="fecha_compra"
                  type="date"
                  className={classnames("", {
                    invalid: errors.fecha_compra
                  })}
                />
                <label htmlFor="fecha_compra">Fecha de compra</label>
                <span className="red-text">{errors.fecha_compra}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.valor}
                  error={errors.valor}
                  id="valor"
                  type="text"
                  className={classnames("", {
                    invalid: errors.valor
                  })}
                />
                <label htmlFor="valor">Valor activo</label>
                <span className="red-text">{errors.valor}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.dias_garantia}
                  error={errors.dias_garantia}
                  id="dias_garantia"
                  type="text"
                  className={classnames("", {
                    invalid: errors.dias_garantia
                  })}
                />
                <label htmlFor="dias_garantia">Días garantia del activo</label>
                <span className="red-text">{errors.dias_garantia}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.fecha_fin_garantia}
                  error={errors.fecha_fin_garantia}
                  id="fecha_fin_garantia"
                  type="date"
                  className={classnames("", {
                    invalid: errors.fecha_fin_garantia
                  })}
                />
                <label htmlFor="fecha_fin_garantia">Fin de garantía</label>
                <span className="red-text">{errors.fecha_fin_garantia}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.imagen1}
                  error={errors.imagen1}
                  id="imagen1"
                  type="text"
                  className={classnames("", {
                    invalid: errors.imagen1
                  })}
                />
                <label htmlFor="imagen1">Imagen 1</label>
                <span className="red-text">{errors.imagen1}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.imagen2}
                  error={errors.imagen2}
                  id="imagen2"
                  type="text"
                  className={classnames("", {
                    invalid: errors.imagen2
                  })}
                />
                <label htmlFor="imagen2">Imagen 2</label>
                <span className="red-text">{errors.imagen2}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.imagen3}
                  error={errors.imagen3}
                  id="imagen3"
                  type="text"
                  className={classnames("", {
                    invalid: errors.imagen3
                  })}
                />
                <label htmlFor="imagen3">Imagen 3</label>
                <span className="red-text">{errors.imagen3}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.imagen4}
                  error={errors.imagen4}
                  id="imagen4"
                  type="text"
                  className={classnames("", {
                    invalid: errors.imagen4
                  })}
                />
                <label htmlFor="imagen4">Imagen 4</label>
                <span className="red-text">{errors.imagen4}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.imagen5}
                  error={errors.imagen5}
                  id="imagen5"
                  type="text"
                  className={classnames("", {
                    invalid: errors.imagen5
                  })}
                />
                <label htmlFor="imagen5">Imagen 5</label>
                <span className="red-text">{errors.imagen5}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.manual}
                  error={errors.manual}
                  id="manual"
                  type="text"
                  className={classnames("", {
                    invalid: errors.manual
                  })}
                />
                <label htmlFor="manual">Manual del activo</label>
                <span className="red-text">{errors.manual}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.cod_qr}
                  error={errors.cod_qr}
                  id="cod_qr"
                  type="text"
                  className={classnames("", {
                    invalid: errors.cod_qr
                  })}
                />
                <label htmlFor="cod_qr">Código QR</label>
                <span className="red-text">{errors.cod_qr}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.dias_frec_mant_preventivo}
                  error={errors.dias_frec_mant_preventivo}
                  id="dias_frec_mant_preventivo"
                  type="text"
                  className={classnames("", {
                    invalid: errors.dias_frec_mant_preventivo
                  })}
                />
                <label htmlFor="dias_frec_mant_preventivo">Frecuencia mantenimiento preventivo (Días)</label>
                <span className="red-text">{errors.dias_frec_mant_preventivo}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.observacion}
                  error={errors.observacion}
                  id="observacion"
                  type="text"
                  className={classnames("", {
                    invalid: errors.observacion
                  })}
                />
                <label htmlFor="observacion">Observaciones del activo</label>
                <span className="red-text">{errors.observacion}</span>
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

AssetForm.propTypes = {
    addAsset: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { addAsset }
)(AssetForm);