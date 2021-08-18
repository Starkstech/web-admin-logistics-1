import {
  GET_SETTINGS_FAILURE,
  GET_SETTINGS_SUCCESS,
  GET_SETTINGS_REQUEST
} from '../../Constant/settingsContants'

const settingsReducers = (state = false, action) => {
  switch (action.type) {
    case GET_SETTINGS_SUCCESS:
      return action.data
    case GET_SETTINGS_REQUEST:
      return { loading: true }
    case GET_SETTINGS_FAILURE:
      return { error: action.error }
    default:
      return state
  }
}
export default settingsReducers;
