import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { changePassword } from "../../actions/authActions";
import classnames from "classnames";

class Profile extends Component {

    constructor (){
        super();
        this.state = {
            id: "",
            oldPass: "",
            newPass: "",
            changed: false,
            errors: {}
        };
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        console.log(this.props)
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/dashboard"); // push user to dashboard when they login
          }
        if (nextProps.errors) { 
            this.setState({
              errors: nextProps.errors
            });
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = (e) => {
        e.preventDefault();

        const profileData = {
            id: this.props.auth.user.id,
            oldPass: this.state.oldPass,
            newPass: this.state.newPass
        };
        this.props.changePassword(profileData)
    }

    render() {

        const profile = this.props.auth.user
        const { errors } = this.state;

        if(this.state.changed === true ){  
            return <Redirect to = {{ pathname: "/dashboard" }} />;
        }

        return (
            <div className="container">
                <Link to="/Dashboard" className="btn-flat waves-effect">
                <i className="material-icons left">keyboard_backspace</i> Regresar
                </Link>
                <div className="row"> 
                    <div className="col s12 center-align">
                        <h5>
                            <b>Perfil</b>
                        </h5>
                        <br/>
                    </div>
                </div>
                <div className="row">
                    <div className="col s6">
                        Nombre: <input type="text" readOnly value={profile.name} />
                    </div>
                </div>
                <div className="row">
                    <div className="col s6">
                        Documento: <input type="text" readOnly value={profile.documento} />
                    </div>
                </div>
                <div className="row">
                    <div className="col s6">
                        Email: <input type="text" readOnly value={profile.email} />
                    </div>
                </div>
                <form noValidate onSubmit={this.onSubmit}>
                    <div className="row">
                        <br/>
                        <h5><b>Cambiar Contraseña</b></h5>
                        <br/>
                        <div className="input-field col s6">
                            <input
                                required
                                onChange={this.onChange}
                                value={this.state.oldPass}
                                error={errors.oldPass}
                                id="oldPass"
                                type="password"
                                className={classnames("", {
                                    invalid: errors.oldPass || errors.passwordIncorrect
                                })}
                            />
                            <label htmlFor="password">Contraseña:</label>
                            <span className="red-text">{errors.oldPass || errors.passwordIncorrect}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6  ">
                            <input
                                required
                                onChange={this.onChange}
                                value={this.state.newPass}
                                error={errors.newPass}
                                id="newPass"
                                type="password"
                                className={classnames("", {
                                    invalid: errors.newPass || errors.passwodIncorrect
                                })}
                            />
                            <label htmlFor="password">Nueva contraseña:</label>
                            <span className="red-text">{errors.newPass}</span>
                        </div>
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
                    Cambiar
                    </button>
                    <br/>
                    </div>
                </form>
        </div>
        )
    }
}

Profile.propTypes = {
    changePassword: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { changePassword }
)(Profile)