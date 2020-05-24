import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getTasks, updateTask, addTask } from "../../actions/taskActions";

import Tasks from "./Tasks";

class DashTasks extends Component {
    componentDidMount() {
        this.props.getTasks();
    }

    render() {
        const { tasks, tasksLoading } = this.props.tasks;

        console.log(this.props)

        let dashboardContent;

        const res = Object.values(tasks);
        
        console.log(res)

        if (res === null || tasksLoading) {
            dashboardContent = <p className="center-align">Loading...</p>;
          } else if (res.length > 0) {
            dashboardContent = <Tasks tasks={res}/>;
          } else {
            dashboardContent = <p className="center-align"> No hay actividades de mantenimiento </p>;
          }

        return (
            <div className="container">
              <Link to="/Dashboard" className="btn-flat waves-effect">
                <i className="material-icons left">keyboard_backspace</i> Regresar
              </Link>
                {dashboardContent}
              <Link to="/newTask" className="btn-flat waves-effect">
                <i className="material-icons left">add</i> Nueva
              </Link>
            </div>
        )
    }
}

DashTasks.propTypes = {
    getTasks: PropTypes.func.isRequired,
    tasks: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    tasks: state.tasks
});

export default connect(
    mapStateToProps,
    {getTasks , updateTask, addTask}
) (DashTasks);