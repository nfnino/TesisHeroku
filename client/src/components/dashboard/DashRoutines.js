import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getRoutines, updateRoutine, addRoutine } from "../../actions/routineActions";

import Routines from "./Routines";

class DashRoutines extends Component {
    componentDidMount() {
        this.props.getRoutines();
    }

    render() {
        const { routines, routinesLoading } = this.props.routines;

        console.log(this.props)

        let dashboardContent;

        const res = Object.values(routines);
        
        console.log(res)

        if (res === null || routinesLoading) {
            dashboardContent = <p className="center-align">Loading...</p>;
          } else if (res.length > 0) {
            dashboardContent = <Routines routines={res}/>;
          } else {
            dashboardContent = <p className="center-align"> No hay rutinas </p>;
          }

        return (
            <div className="container">
              <Link to="/Dashboard" className="btn-flat waves-effect">
                <i className="material-icons left">keyboard_backspace</i> Regresar
              </Link>
                {dashboardContent}
              <Link to="/newRoutine" className="btn-flat waves-effect">
                <i className="material-icons left">add</i> Nueva
              </Link>
            </div>
        )
    }
}

DashRoutines.propTypes = {
    getRoutines: PropTypes.func.isRequired,
    routines: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    routines: state.routines
});

export default connect(
    mapStateToProps,
    {getRoutines , updateRoutine, addRoutine}
) (DashRoutines);