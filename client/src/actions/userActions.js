import axios from "axios";
import {
    GET_USERS,
    DELETE_USER,
    USERS_LOADING
} from "./types";

export const getUsers = () => dispatch => {
    dispatch(setUsersLoading());
    axios
    .get("api/users/users")
    .then(res =>
        dispatch({
            type: GET_USERS,
            payload: res.data
        })
    )
    .catch(err =>
        dispatch({
            type: GET_USERS,
            payload: null
        })
    );
};

export const deleteUser = (userData) => dispatch => {
    if (window.confirm("Confirmar para eliminar el usuario")) {
        const id = userData.id
        axios
        .delete(`api/users/users/${id}`)
        .then(res =>
        dispatch({
          type: DELETE_USER,
          payload: id
        })
      )
      .catch(err => console.log(err));
    }
}

export const setUsersLoading = () => {
    return {
        type: USERS_LOADING
    };
};