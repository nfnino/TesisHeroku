import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { logoutUser } from "../../actions/authActions";

class Dashboard extends Component {

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

render() {

  const { user } = this.props.auth;

  const isSuper = (
    user.role === "Superusuario"
  );

  const superuserLinks = (
    <div className="row s13">
              <div className="col s3">
                <Link
                  to="/users"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                  }}
                  className="btn btn-large btn-flat waves-effect white black-text"
                >
                  Usuarios
                </Link>
              </div>
              <div className="col s3">
                <Link
                  to="/assets"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                  }}
                  className="btn btn-large btn-flat waves-effect white black-text"
                >
                  Activos
                </Link>
              </div>
              <div className="col s3">
                <Link
                  to="/tasks"
                  style={{
                    width: "170px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                  }}
                  className="btn btn-large btn-flat waves-effect white black-text"
                >
                  Mantenimiento
                </Link>
              </div>
              <div className="col s3">
                <Link
                  to="/routines"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                  }}
                  className="btn btn-large btn-flat waves-effect white black-text"
                >
                  Rutinas
                </Link>
              </div>
            </div>
  );

  const otroLinks = (
    <div className = "row s12">
      <div className="col s4">
                <Link
                  to="/assets"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                  }}
                  className="btn btn-large btn-flat waves-effect white black-text"
                >
                  Activos
                </Link>
              </div>
              <div className="col s4">
                <Link
                  to="/tasks"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                  }}
                  className="btn btn-large btn-flat waves-effect white black-text"
                >
                  Actividades
                </Link>
              </div>
              <div className="col s4">
                <Link
                  to="/routines"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                  }}
                  className="btn btn-large btn-flat waves-effect white black-text">
                  Rutinas
                </Link>
              </div>
    </div>
  );


  return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Bienvenido,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                Acabas de ingresar al sistema {" "}
                <span style={{ fontFamily: "monospace" }}>CMMS</span> 👏
              </p>
            </h4>
            <div className ="row">
              { isSuper ? superuserLinks : otroLinks }
              <div className="col s12 center-align">
              <Link
                  to="/profile"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                  }}
                  className="btn btn-large btn-flat waves-effect white black-text">
                  Perfil
                </Link>
              </div>
            </div>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default withRouter(connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard));