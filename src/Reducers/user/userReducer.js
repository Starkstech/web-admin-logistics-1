import {
  GET_AUTH_REQUEST,
  GET_AUTH_SUCCESS,
  GET_AUTH_FAILURE
} from '../Constant/userConstants'

const userReducer = (state = false, action) => {
  switch (action.type) {
    case GET_AUTH_REQUEST:
      return {
        loading: true
      }
    case GET_AUTH_SUCCESS:
      return action.user
    case GET_AUTH_FAILURE:
      return {
        error: action.error
      }
    default:
      return state
  }
}

export default userReducer
