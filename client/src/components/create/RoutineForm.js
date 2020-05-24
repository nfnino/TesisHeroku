import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addRoutine } from "../../actions/routineActions";
import classnames from "classnames";

class RoutineForm extends Component {
  constructor() {
    super();
    this.state = {
      fecha: "",
      ejecutor: "",
      supervisor: "",
      espacio_vip: "",
      estado: "Creada",
      espacio_local: "",
      espacio_banio: "",
      espacio_parq: "",
      espacio_fach: "",
      espacio_pant: "",
      espacio_rci: "",
      observaciones: "",
      recinto: "",
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

onSubmit = e => {
    e.preventDefault();

const newRoutine = {
    fecha: this.state.fecha,
    ejecutor: this.state.ejecutor,
    supervisor: this.state.supervisor,
    espacio_vip: this.state.espacio_vip,
    estado: this.state.estado,
    espacio_local: this.state.espacio_local,
    espacio_banio: this.state.espacio_banio,
    espacio_parq: this.state.espacio_parq,
    espacio_fach: this.state.espacio_fach,
    espacio_pant: this.state.espacio_pant,
    espacio_rci: this.state.espacio_rci,
    observaciones: this.state.observaciones,
    recinto: this.state.recinto,
    errors: {}
    };
    this.props.addRoutine(newRoutine, this.props.history); 
};
  
render() {
    const { errors } = this.state;
return (
      <div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
            <Link to="/routines" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              routines
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Nueva Rutina</b> :
              </h4>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.fecha}
                  error={errors.fecha}
                  id="fecha"
                  type="date"
                  className={classnames("", {
                    invalid: errors.fecha
                  })}
                />
                <label htmlFor="fecha">Fecha</label>
                <span className="red-text">{errors.fecha}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.ejecutor}
                  error={errors.ejecutor}
                  id="ejecutor"
                  type="text"
                  className={classnames("", {
                    invalid: errors.ejecutor
                  })}
                />
                <label htmlFor="ejecutor">Ejecutor </label>
                <span className="red-text">{errors.ejecutor}</span>
              </div>
              <div className="input-field col s12">
                <input
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
                <span className="red-text">{errors.supervisor}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.espacio_vip}
                  error={errors.espacio_vip}
                  id="espacio_vip"
                  type="text"
                  className={classnames("", {
                    invalid: errors.espacio_vip
                  })}
                />
                <label htmlFor="espacio_vip">Espacio VIP</label>
                <span className="red-text">{errors.espacio_vip}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.espacio_local}
                  error={errors.espacio_local}
                  id="espacio_local"
                  type="text"
                  className={classnames("", {
                    invalid: errors.espacio_local
                  })}
                />
                <label htmlFor="espacio_local">Espacio Locales</label>
                <span className="red-text">{errors.espacio_local}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.espacio_banio}
                  error={errors.espacio_banio}
                  id="espacio_banio"
                  type="text"
                  className={classnames("", {
                    invalid: errors.espacio_banio
                  })}
                />
                <label htmlFor="espacio_banio">Espacio Baño</label>
                <span className="red-text">{errors.espacio_banio}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.espacio_parq}
                  error={errors.espacio_parq}
                  id="espacio_parq"
                  type="text"
                  className={classnames("", {
                    invalid: errors.espacio_parq
                  })}
                />
                <label htmlFor="espacio_parq">Espacio Parque</label>
                <span className="red-text">{errors.espacio_parq}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.espacio_fach}
                  error={errors.espacio_fach}
                  id="espacio_fach"
                  type="text"
                  className={classnames("", {
                    invalid: errors.espacio_fach
                  })}
                />
                <label htmlFor="espacio_fach">Espacio Fachada</label>
                <span className="red-text">{errors.espacio_fach}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.espacio_pant}
                  error={errors.espacio_pant}
                  id="espacio_pant"
                  type="text"
                  className={classnames("", {
                    invalid: errors.espacio_pant
                  })}
                />
                <label htmlFor="espacio_pant">Espacio Pantalla</label>
                <span className="red-text">{errors.espacio_pant}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.espacio_rci}
                  error={errors.espacio_rci}
                  id="espacio_rci"
                  type="text"
                  className={classnames("", {
                    invalid: errors.espacio_rci
                  })}
                />
                <label htmlFor="espacio_rci">Espacio RCI</label>
                <span className="red-text">{errors.espacio_rci}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.observaciones}
                  error={errors.observaciones}
                  id="observaciones"
                  type="text"
                  className={classnames("", {
                    invalid: errors.observaciones
                  })}
                />
                <label htmlFor="observaciones">Observaciones</label>
                <span className="red-text">{errors.observaciones}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.recinto}
                  error={errors.recinto}
                  id="recinto"
                  type="text"
                  className={classnames("", {
                    invalid: errors.recinto
                  })}
                />
                <label htmlFor="recinto">Recinto</label>
                <span className="red-text">{errors.recinto}</span>
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

RoutineForm.propTypes = {
    addRoutine: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { addRoutine }
)(RoutineForm);