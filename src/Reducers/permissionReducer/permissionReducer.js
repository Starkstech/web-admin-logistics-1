import {
  GETALL_PERMISSION_REQUEST,
  GETALL_PERMISSION_SUCCESS,
  GETALL_PERMISSION_FAILURE,
} from 'Constant/roleConstants'

const permissionReducers = (state = false, action) => {
  switch (action.type) {
    case GETALL_PERMISSION_SUCCESS:
      return action.data
    case GETALL_PERMISSION_REQUEST:
      return { loading: true }
    case GETALL_PERMISSION_FAILURE:
      return { error: action.error }
    default:
      return state
  }
}
export default permissionReducers;
