import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  LOG_USER_OUT,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS
} from "../Constant/userConstant"

const localUser:any = sessionStorage.getItem("localUser")

const initialState = {
  currentUser: JSON.parse(localUser) || {},
  isAuthenticated: !!sessionStorage.getItem("localUser"),
  error: null,
  loading: false,
}

type Action = {
    type: string,
    payload: any,
}

export default function user (state = initialState, action:Action) {
  switch (action.type) {
    case GET_USER_SUCCESS :
      sessionStorage.setItem("localUser", JSON.stringify(action.payload))
      return {
        ...state,
        isAuthenticated: true,
        currentUser: action.payload
      }
    case GET_USER_FAILURE :
      return {
        ...state,
        error: action.payload,
        currentUser: {},
        loading: false
      }
    case GET_USER_REQUEST :
      return {
        ...state,
        error: null,
        currentUser: {},
        loading: action.payload
      }
    case UPDATE_USER_REQUEST :
      return {
        ...state,
        error: null,
        currentUser: state.currentUser,
        loading: action.payload
      }
    case UPDATE_USER_SUCCESS :
      return {
        ...state,
        error: null,
        currentUser: action.payload,
        loading: false
      }
    case LOG_USER_OUT :
      sessionStorage.removeItem("localUser")
      return {
        ...state,
        isAuthenticated: false,
        currentUser: {}
      }
    default :
      return state
  }
}
