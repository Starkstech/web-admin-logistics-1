import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE
} from "../Constant/userConstant"

const localUser:any = sessionStorage.getItem("localUser")

const initialState = {
  currentUser: JSON.parse(localUser) || {},
  isAuthenticated: !!sessionStorage.getItem("localUser"),
  error: null,
  loading: false
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
    default :
      return state
  }
}
