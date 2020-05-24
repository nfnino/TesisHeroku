import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import AsyncSelect from 'react-select/async';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      documento: "",
      email: "",
      password: "",
      password2: "",
      role: "",
      errors: {}
    };
  }

  /* componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  } */

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

onChange = e => {
    console.log(e.target.id)
    console.log(e.target.value)
    this.setState({ [e.target.id]: e.target.value });
  };

  roleChange = role => {
    this.setState({
      role: role.value
    });
  }

onSubmit = e => {
    e.preventDefault();

const newUser = {
      name: this.state.name,
      documento: this.state.documento,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      role: this.state.role
    };
    this.props.registerUser(newUser, this.props.history); 
};
  
render() {
    const { errors } = this.state;

     const options = [
      { label: "Superusuario", value: "Superusuario", },
      { label: "Contador",     value: "Contador", },
      { label: "Operario",     value: "Operario",  },
      { label: "Jefe de área", value: "Jefe de área" }
  ]; 

return (
      <div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
            <Link to="/users" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Usuarios
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Agregar</b> usuario
              </h4>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                  className={classnames("", {
                    invalid: errors.name
                  })}
                />
                <label htmlFor="name">Name</label>
                <span className="red-text">{errors.name}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email
                  })}
                />
                <label htmlFor="email">Email</label>
                <span className="red-text">{errors.email}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.documento}
                  error={errors.documento}
                  id="documento"
                  type="text"
                  className={classnames("", {
                    invalid: errors.documento
                  })}
                />
                <label htmlFor="documento">Número de documento</label>
                <span className="red-text">{errors.documento}</span>
              </div>
              <div className="input-field col s12">
              {/* <input
                  onChange={this.onChange}
                  value={this.state.role}
                  error={errors.role}
                  id="role"
                  type="text"
                  className={classnames("", {
                    invalid: errors.role
                  })}
                />
                <label htmlFor="role">Rol</label>
                <span className="red-text">{errors.role}</span> */}
                <pre>Rol: "{this.state.role}"</pre>
                    <AsyncSelect
                      value={this.state.role}
                      defaultOptions={options}
                      onChange={this.roleChange}/>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password
                  })}
                />
                <label htmlFor="password">Password</label>
                <span className="red-text">{errors.password}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password2
                  })}
                />
                <label htmlFor="password2">Confirm Password</label>
                <span className="red-text">{errors.password2}</span>
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
                  Agregar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { registerUser }
    )(withRouter(Register)
);