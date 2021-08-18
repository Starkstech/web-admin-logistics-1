import {
  GET_ALL_TASKS_SUCCESS,
  GET_ALL_TASKS_REQUEST,
  GET_ALL_TASKS_FAILURE
} from 'Constant/tasksConstant'

const initialState = {
  tasksList: [],
  loading: false
}

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TASKS_SUCCESS :
      return {
        tasksList: action.data
      }
    case GET_ALL_TASKS_FAILURE :
      return {
        error: action.error
      }
    case GET_ALL_TASKS_REQUEST :
      return {
        loading: action.status
      }
    default :
      return state;
  }
}

export default taskReducer
