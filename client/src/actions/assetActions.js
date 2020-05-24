import axios from "axios";
import {
    GET_ERRORS,
    GET_ASSETS,
    DELETE_ASSET,
    ASSETS_LOADING,
    UPDATE_ASSET
} from "./types";

export const getAssets = () => dispatch => {
    dispatch(setAssetsLoading());
    axios
    .get("api/assets/assets")
    .then(res =>
        dispatch({
            type: GET_ASSETS,
            payload: res.data
        })
    )
    .catch(err =>
        dispatch({
            type: GET_ASSETS,
            payload: null
        })
    );
};

export const addAsset = (assetData, history) => dispatch => {
    axios
    .post("api/assets/newAsset", assetData)
    .then(res => history.push("/assets"))
    .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
    );
}

export const getAsset = (assetData, history) => dispatch => {
    const id = assetData.id
    axios
    .get(`api/assets/assets/${id}`)
    .catch(err => console.log(err));
}

export const deleteAsset = (assetData) => dispatch => {
    if (window.confirm("Confirmar para eliminar el activo")) {
        const id = assetData.id
        axios
        .delete(`api/assets/assets/${id}`)
        .then(res =>
        dispatch({
          type: DELETE_ASSET,
          payload: id
        })
      )
      .catch(err => console.log(err));
    }
}

export const darBajaAsset = (assetData => dispatch => {
    if(window.confirm("Confirmar para dar de baja al activo")) {
        const id = assetData.id
        const estado = assetData.estado
        axios
        .put(`api/assets/assets/${id}/${estado}`)
        .then(res => 
            dispatch({
                type: UPDATE_ASSET,
                payload: assetData.assets.assets
        }));
    }
});

export const setAssetsLoading = () => {
    return {
        type: ASSETS_LOADING
    };
};