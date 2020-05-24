import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class TaskDetails extends Component {

    render () {
        let task = this.props.task

        task = this.props.task ? (

            <div className="task">
                <Link to="/tasks" className="btn-flat waves-effect">
                    <i className="material-icons left">keyboard_backspace</i> Regresar
                </Link>
                <br/>
                <br/>
                <div className="row">
                    <div className="col s5">
                        Activo <input type="text" value={task.activo} />
                    </div>
                    <div className="col s5">
                        Imagen 1 <input type="text" value={task.imagen1_antes_mant} />
                    </div>
                </div>
                <div className="row">
                    <div className="col s5">
                        Tipo mantenimiento <input type="text" value={task.tipo_mant} />
                    </div>
                    <div className="col s5">
                        Imagen 2 <input type="text" value={task.imagen2_antes_mant} />
                    </div>
                </div>
                <div className="row">
                    <div className="col s5">
                        Fecha de inicio (tentativa) <input type="date" value={task.fecha_inicial_tent} />
                    </div>
                    <div className="col s5">
                        Imagen 3 <input type="text" value={task.imagen3_antes_mant} />
                    </div>
                </div>
                <div className="row">
                    <div className="col s5">
                        Fecha de finalización (tentativa) <input type="date" value={task.fecha_final_tent} />
                    </div>
                    <div className="col s5">
                        Imagen 4 <input type="text" value={task.image4_antes_mant} />
                    </div>
                </div>
                <div className="row">
                    <div className="col s5">
                        Descripción de la falla <input type="text" value={task.desc_falla} />
                    </div>
                    <div className="col s5">
                        Imagen 5 <input type="text" value={task.image5_antes_mant} />
                    </div>
                </div>
                <div className="row">
                    <div className="col s5">
                        Estado de la actividad de mantenimiento<input type="text" value={task.estado} />
                    </div>
                </div>
                <div className="row">
                    <div className="col s5">
                        Email compras <input type="email" value={task.email_compras} />
                    </div>
                </div>
                <div className="row">
                    <div className="col s5">
                        Descripción materiales compra <input type="text" value={task.desc_materiales_compras} />
                    </div>
                </div>
                <div className="row">
                    <div className="col s5">
                        Ejecutor interno de la actividad <input type="text" value={task.ejecutor_interno} />
                    </div>
                </div>
                <div className="row">
                    <div className="col s5">
                        Supervisor de la actividad <input type="text" value={task.supervisor} />
                    </div>
                </div>
                <div className="row">
                    <div className="col s5">
                        NIT empresa externa <input type="text" value={task.nit_empresa_externa} />
                    </div>
                </div>
                <div className="row">
                    <div className="col s5">
                        Documento orden de compra <input type="text" value={task.doc_orden_compra} />
                    </div>
                </div>
                <div className="row">
                    <div className="col s5">
                        Valor orden externa <input type="text" value={task.valor_externo} />
                    </div>
                </div>
                <div className="row">
                    <div className="col s5">
                        Fecha de inicio (real) <input type="date" value={task.fecha_inicial_real} />
                    </div>
                </div>
                <div className="row">
                    <div className="col s5">
                        Fecha de finalización (real) <input type="date" value={task.fecha_final_real} />
                    </div>
                </div>
            </div>
        ) : (
            <div className="center">Cargando ...</div>
        )

        return (
            <div className="container">
                { task }
            </div>
        )
    }
}

TaskDetails.propTypes = {
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => {

    let id = ownProps.match.params.id;
    return {
        task: state.tasks.tasks.data.find(task => task._id === id)
    }
};

export default connect(
    mapStateToProps,
    {  }
)(TaskDetails)
