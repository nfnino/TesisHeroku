import axios from "axios";
import {
    GET_ERRORS,
    GET_TASKS,
    //UPDATE_TASK,
    TASKS_LOADING
} from "./types";

export const getTasks = () => dispatch => {
    dispatch(setTasksLoading());
    axios
    .get("/api/tasks/tasks")
    .then(res =>
        dispatch({
            type: GET_TASKS,
            payload: res.data
        })
    )
    .catch(err =>
        dispatch({
            type: GET_TASKS,
            payload: null
        })
    );
};

export const addTask = (taskData, history) => dispatch => {
    axios
    .post("/api/tasks/newTask", taskData)
    .then(res => history.push("/tasks"))
    .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.res.data
        })
    );
}

export const updateTask = (taskData) => dispatch => {
    
}

export const setTasksLoading = () => {
    return {
        type: TASKS_LOADING
    };
};