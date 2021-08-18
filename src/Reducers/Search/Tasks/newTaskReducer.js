import {
  GET_NEW_TASK_SUCCESS,
  GET_NEW_TASK_REQUEST,
  GET_NEW_TASK_FAILURE
} from 'Constant/tasksConstant'

const initialState = {
  newTask: []
}

const newTaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEW_TASK_SUCCESS :
      return {
        ...state,
        newTask: action.data
      }
    case GET_NEW_TASK_FAILURE :
      return {

        error: action.error
      }
    case GET_NEW_TASK_REQUEST :
      return {

        loading: action.status
      }
    default :
      return state;
  }
}

export default newTaskReducer
