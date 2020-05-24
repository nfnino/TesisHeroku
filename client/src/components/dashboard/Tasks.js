import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Tasks extends Component {

    constructor(){
        super();

        this.state={
            search: null
        };
    }

    searchSpace=(event)=>{
        let keyword = event.target.value;
        this.setState({search:keyword})
    }

    onUpdateClick = id => {
        
    }

    render() {
        const res = this.props.tasks.tasks;
        const tasks = res.data;

        let taskItems = tasks.filter((task) => {
            if(this.state.search == null)
                return task
            else if(task.desc_falla.toLowerCase().includes(this.state.search.toLowerCase())){
                return task
            }
        })
        .map(task => (
            <tr key={task._id} style={{ marginTop: "1rem" }}>
                <td> {task.activo} </td>
                <td> {task.tipo_mant} </td>
                <td> <Link to={'/tasks/' + task._id}> {task.desc_falla} </Link></td>
                <td> {task.fecha_inicial_tent} </td>
                <td> {task.fecha_final_tent} </td>
                <td> {task.supervisor} </td>
                <td> {task.estado} </td>
                <td>
                    <button
                        style={{ marginRight: "1rem" }}
                        onClick={this.onUpdateClick.bind(this, task._id)}
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
                            <b>Actividades</b>
                        </h5>
                        <p className="grey-text text-darken-1">
                            Agregar o modificar actividades de mantenimiento
                        </p>
                        </div>
                </div>
                <div className="row">
                    <div className="col s12">
                    <table>
                        <tbody>
                            <tr>
                                <th>Activo</th>
                                <th>Tipo mant.</th>
                                <th>Descripción</th>
                                <th>Inicio</th>
                                <th>Final</th>
                                <th>Supervisor</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                            <tr>
                                <th></th>
                                <th></th>
                                <th><input type="text" placeholder="Buscar por palabra clave" onChange={(e)=>this.searchSpace(e)}/></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                                {taskItems}
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        );
    }
}

Tasks.propTypes = {
    tasks: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    tasks: state.tasks
  });

export default connect(
    mapStateToProps,
    {  }
)(Tasks);