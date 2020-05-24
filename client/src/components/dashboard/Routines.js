import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Routines extends Component {

    onUpdateClick = id => {
        
    }

    render() {
        const res = this.props.routines.routines;
        const routines = res.data;

        let routineItems = routines.map(routine => (
            <tr key={routine._id} style={{ marginTop: "1rem" }}>
                <td> {routine.fecha} </td>
                <td> {routine.ejecutor} </td>
                <td> {routine.supervisor} </td>
                <td> {routine.observaciones} </td>
                <td> {routine.estado} </td>
                <td>
                <button
                    style={{ marginRight: "1rem" }}
                    onClick={this.onUpdateClick.bind(this, routine._id)}
                    className="btn btn-small btn-floating waves-effect waves-light hoverable red accent-3"
                >
                    <i className="material-icons">update</i>
                </button>
                </td>
            </tr>
        ));

        return (
            <div>
                <div className="row center-align">
                    <div className="col s12">
                        <h5>
                            <b>Rutinas</b>
                        </h5>
                        <p className="grey-text text-darken-1">
                            Agregar o modificar rutinas 
                        </p>
                        </div>
                </div>
                <div className="row">
                    <div className="col s12">
                    <table>
                        <tbody>
                            <tr>
                                <th>Fecha</th>
                                <th>Ejecutor</th>
                                <th>Supervisor</th>
                                <th>Observaciones</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                            {routineItems}
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        );
    }
}

Routines.propTypes = {
    routines: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    routines: state.routines
  });

export default connect(
    mapStateToProps,
    {  }
)(Routines);