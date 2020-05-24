import axios from "axios";
import {
    GET_ERRORS,
    GET_ROUTINES,
    //UPDATE_ROUTINE,
    ROUTINES_LOADING
} from "./types";

export const getRoutines = () => dispatch => {
    dispatch(setRoutinesLoading());
    axios
    .get("/api/routines/routines")
    .then(res =>
        dispatch({
            type: GET_ROUTINES,
            payload: res.data
        })
    )
    .catch(err =>
        dispatch({
            type: GET_ROUTINES,
            payload: null
        })
    );
};

export const addRoutine = (routineData, history) => dispatch => {
    console.log("Entra")
    axios
    .post("/api/routines/newRoutine", routineData)
    .then(res => history.push("/routines"))
    .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.res.data
        })
    );
}

export const updateRoutine = (routineData) => dispatch => {
    
}

export const setRoutinesLoading = () => {
    return {
        type: ROUTINES_LOADING
    };
};