import {
  GET_ALL_REQUEST,
  GET_ALL_SUCCESS,
  GET_ALL_FAILURE,
  TOGGLE_ASSIGN_ADMIN
} from 'Constant/adminConstant'

const initialState = {
  toggleStatus: false,
  myAdmin: []
}

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ASSIGN_ADMIN:
      return {
        ...state,
        toggleStatus: !state.toggleStatus
      }
    case GET_ALL_SUCCESS:
      return { ...state, myAdmin: action.data }
    case GET_ALL_REQUEST:
      return { ...state, loading: true }
    case GET_ALL_FAILURE:
      return { error: action.error }
    default:
      return state
  }
}
export default adminReducer;
