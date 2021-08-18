import {
  GET_ALL_NOTIFICATIONS_FAILURE,
  GET_ALL_NOTIFICATIONS_REQUEST,
  GET_ALL_NOTIFICATIONS_SUCCESS
} from 'Constant/notificationConstant'

const initialState = {
  notifications: []
}

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_NOTIFICATIONS_REQUEST :
      return { ...state, notifications: { loading: true } }
    case GET_ALL_NOTIFICATIONS_SUCCESS :
      return { ...state, notifications: action.data }
    case GET_ALL_NOTIFICATIONS_FAILURE :
      return { error: action.error }
    default :
      return state;
  }
}

export default notificationReducer
