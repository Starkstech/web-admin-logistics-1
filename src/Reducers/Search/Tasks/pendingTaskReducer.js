import {
  GET_PENDING_TASK_SUCCESS,
  GET_PENDING_TASK_REQUEST,
  GET_PENDING_TASK_FAILURE
} from 'Constant/tasksConstant'

const initialState = {
  pending: []
}

const completedTaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PENDING_TASK_SUCCESS :
      return {
        ...state,
        pending: action.data
      }
    case GET_PENDING_TASK_FAILURE :
      return {

        error: action.error
      }
    case GET_PENDING_TASK_REQUEST :
      return {

        loading: action.status
      }
    default :
      return state;
  }
}

export default completedTaskReducer
