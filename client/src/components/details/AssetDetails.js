import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//import { getAssets } from "../../actions/assetActions";

class AssetDetails extends Component {

    render() {
        console.log(this.props)

        let asset = this.props.asset

        asset = this.props.asset ? (
            <div className="asset">

                <Link to="/assets" className="btn-flat waves-effect">
                    <i className="material-icons left">keyboard_backspace</i> Regresar
                </Link>
                <br/>
                <br/>
                <div className="row">
                    <div className="col s5">
                        Nombre: <input type="text" value={asset.nombre} />
                    </div>
                    <div className="col s5">
                        Imagen 1: <input type="text" value={asset.imagen1} />
                    </div>
                </div>
                <div className="row">
                    <div className="col s5">
                        Categoria: <input type="text" value={asset.categoria} />
                    </div>
                    <div className="col s3">
                        Imagen 2: <input type="text" value={asset.imagen2} />
                    </div>
                </div>
                <div className="row">
                    <div className="col s5">
                        Recinto: <input type="text" value={asset.recinto} />
                    </div>
                    <div className="col s5">
                        Imagen 3: <input type="text" value={asset.imagen3} />
                    </div>
                </div>
                <div className="row">
                    <div className="col s5">
                        Ubicación: <input type="text" value={asset.ubicacion} />
                    </div>
                    <div className="col s5">
                        Imagen 4: <input type="text" value={asset.imagen4} />
                    </div>
                </div>
                <div className="row">
                    <div className="col s5">
                        Fecha Compra: <input type="text" value={asset.fecha_compra} />
                    </div>
                    <div className="col s3">
                        Imagen 5: <input type="text" value={asset.imagen5} />
                    </div>
                </div>
                <div className="row">
                    <div className="col s5">
                        Valor: <input type="text" value={asset.valor} />
                    </div>
                    <div className="col s5">
                        Codigo QR: <input type="text" value={asset.cod_qr} />
                    </div>
                </div>
                <div className="row">
                    <div className="col s5">
                        Dias Garantía: <input type="text" value={asset.dias_garantia} />
                    </div>
                </div>
                <div className="row">
                    <div className="col s5">
                        Fecha fin garantía: <input type="text" value={asset.fecha_fin_garantia} />
                    </div>
                </div>
                <div className="row">
                    <div className="col s5">
                        Frecuencia mantenimiento: <input type="text" value={asset.dias_frec_mant_preventivo} />
                    </div>
                </div>
                <div className="row">
                    <div className="col s5">
                        Manual: <input type="text" value={asset.manual} />
                    </div>
                </div>
                <div className="row">
                    <div className="col s5">
                        Estado: <input type="text" value={asset.estado} />
                    </div>
                </div>
                <div className="row">
                    <div className="col s5">
                        Observación: <input type="text" value={asset.observacion} />
                    </div>
                </div>
            </div>
        ) : (
            <div className="center">Cargando ...</div>
        )

        return (
            <div className="container">
                { asset }
            </div>
        )
    }
}

AssetDetails.propTypes = {
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps)
    console.log(state)
    let id = ownProps.match.params.id;
    return {
        asset: state.assets.assets.data.find(asset => asset._id === id)
    }
};

export default connect(
    mapStateToProps,
    {  }
)(AssetDetails)
