import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteUser } from "../../actions/userActions";


class Users extends Component {

// Delete account
    onDeleteClick = id => {
        const { users } = this.props;
        const userData = {
        id: id,
        users: users
        };
        console.log(this.props)
        this.props.deleteUser(userData);
    };

    render() {
        const res = this.props.users.users;
        const users = res.data;

        let userItems = users.map(user => (
            <tr key={user._id} style={{ marginTop: "1rem" }}>
               <td> {user.name} </td>
               <td> {user.email} </td>
               <td> {user.role} </td>
               <td>
                <button
                    style={{ marginRight: "1rem" }}
                    onClick={this.onDeleteClick.bind(this, user._id)}
                    className="btn btn-small btn-floating waves-effect waves-light hoverable red accent-3">
                    <i className="material-icons">delete</i>
                </button>
                </td>
            </tr>
        ));

        return (
            <div>
            <div className="row">
                <div className="col s12 center-align">
                    <h5>
                        <b>Usuarios</b>
                    </h5>
                    <p className="grey-text text-darken-1">
                        Agregar o eliminar usuarios
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col s12 board">
                    <table>
                        <tbody>
                            <tr>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Rol</th>
                                <th>Acciones</th>
                            </tr>
                            {userItems}
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        );
    }
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    deleteUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    users: state.users
  });

export default connect(
    mapStateToProps,
    { deleteUser }
)(Users);