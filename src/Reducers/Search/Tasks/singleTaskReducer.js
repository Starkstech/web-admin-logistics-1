import {
  GET_SINGLE_TASK_SUCCESS,
  GET_SINGLE_TASK_REQUEST,
  GET_SINGLE_TASK_FAILURE
} from 'Constant/tasksConstant'

const initialState = {
  task: []
}

const singleTaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SINGLE_TASK_SUCCESS :
      return {
        ...state,
        task: action.data
      }
    case GET_SINGLE_TASK_FAILURE :
      return {
        ...state,
        error: action.error
      }
    case GET_SINGLE_TASK_REQUEST :
      return {
        ...state,
        loading: action.status
      }
    default :
      return state;
  }
}

export default singleTaskReducer
