import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteAsset, darBajaAsset } from "../../actions/assetActions";
import { Link } from "react-router-dom";

class Assets extends Component {

    constructor(){
        super();

        this.state={
            search: null
        };
    }

    onUpdateClick = id => {
        /* const {assets} = this.props;
        const assetData = {
            id: id,
            assets: assets
        };
        this.props.updateAsset(assetData); */
    }

    onDeleteClick = id => {
        const { assets } = this.props;
        const assetData = {
        id: id,
        estado: "De baja",
        assets: assets
        };
        console.log(this.props)
        this.props.darBajaAsset(assetData);
    }

    searchSpace=(event)=>{
        let keyword = event.target.value;
        this.setState({search:keyword})
    }

    render() {
        console.log("This.props: ",this.props)
        const res = this.props.assets.assets;
        const assets = res.data;

        const assetItems = assets.filter((asset) =>{
            if(this.state.search == null)
                return asset
            else if(asset.nombre.toLowerCase().includes(this.state.search.toLowerCase())){
                return asset
            }
        })
        .map(asset => (
            <tr key={asset._id} style={{ marginTop: "1rem" }}>
                <td> <Link to={'/assets/' + asset._id}> {asset.nombre} </Link></td>
                <td> {asset.fecha_fin_garantia} </td>
                <td> {asset.categoria} </td>
                <td> {asset.ubicacion} </td>
                <td> {asset.dias_frec_mant_preventivo} </td>
                <td> {asset.estado} </td>
                <td>
                <button
                    style={{ marginRight: "1rem" }}
                    onClick={this.onUpdateClick.bind(this, asset._id)}
                    className="btn btn-small btn-floating waves-effect waves-light hoverable blue accent-3"
                >
                    <i className="material-icons">update</i>
                </button>
                <button
                    style={{ marginRight: "1rem" }}
                    onClick={this.onDeleteClick.bind(this, asset._id)}
                    className="btn btn-small btn-floating waves-effect waves-light hoverable red accent-3">
                    <i className="material-icons">delete</i>
                </button>
                </td>
            </tr>
        ));

        return (
            <div>
                <div className="row s12 center-align">
                    <div className="col s12 ">
                        <h5>
                            <b>Activos</b>
                        </h5>
                        <p className="grey-text text-darken-1">
                            Agregar o modificar activos
                        </p>
                    </div>
                </div>
                <div className="row s12">
                    <div className="col s12 ">
                    <table>
                        <tbody>
                            <tr>
                                <th>Nombre</th>
                                <th>Fin Garantía</th>
                                <th>Categoría</th>
                                <th>Ubicación</th>
                                <th>Frecuencia m/to</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                            <tr>
                                <th><input type="text" placeholder="Buscar por palabra clave" onChange={(e)=>this.searchSpace(e)}/></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                            {assetItems}
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        );
    }
}

Assets.propTypes = {
    assets: PropTypes.array.isRequired,
    deleteAsset: PropTypes.func.isRequired,
    darBajaAsset: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return{
        assets: state.assets
    }
  };

export default connect(
    mapStateToProps,
    { deleteAsset, darBajaAsset }
)(Assets);