import {
  GET_COMPLETED_TASK_SUCCESS,
  GET_COMPLETED_TASK_REQUEST,
  GET_COMPLETED_TASK_FAILURE
} from 'Constant/tasksConstant'

const initialState = {
  completed: []
}
const completedTaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPLETED_TASK_SUCCESS :
      return {
        ...state,
        completed: action.data
      }
    case GET_COMPLETED_TASK_FAILURE :
      return {
        error: action.error
      }
    case GET_COMPLETED_TASK_REQUEST :
      return {

        loading: action.status
      }
    default :
      return state;
  }
}

export default completedTaskReducer
