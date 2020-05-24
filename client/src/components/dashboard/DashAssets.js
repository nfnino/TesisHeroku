import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getAssets, addAsset } from "../../actions/assetActions";

import Assets from "./Assets";

class DashAssets extends Component {
    componentDidMount() {
        this.props.getAssets();
    }

    render() {
        const { assets, assetsLoading } = this.props.assets;

        console.log(this.props)

        let dashboardContent;

        const res = Object.values(assets);
        
        console.log(res)

        if (res === null || assetsLoading) {
            dashboardContent = <p className="center-align">Loading...</p>;
          } else if (res.length > 0) {
            dashboardContent = <Assets assets={res}/>;
          } else {
            dashboardContent = <p className="center-align"> No hay activos </p>;
          }

        return (
            <div className="container">
              <Link to="/Dashboard" className="btn-flat waves-effect">
                <i className="material-icons left">keyboard_backspace</i> Regresar
              </Link>
                {dashboardContent}
              <Link to="/newAsset" className="btn-flat waves-effect">
                <i className="material-icons left">add</i> Nuevo
              </Link>
            </div>
        )
    }
}

DashAssets.propTypes = {
    getAssets: PropTypes.func.isRequired,
    assets: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    assets: state.assets
});

export default connect(
    mapStateToProps,
    {getAssets, addAsset}
) (DashAssets);