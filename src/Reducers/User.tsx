import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE
} from "../Constant/userConstant"

const initialState = {
  currentUser: null,
  isAuthenticated: false,
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
      // localStorage.setItem("user", JSON.stringify(action.payload))
      return {
        ...state,
        isAuthenticated: true,
        currentUser: action.payload
      }
    case GET_USER_FAILURE :
      return {
        ...state,
        error: action.payload
      }
    case GET_USER_REQUEST :
      return {
        ...state,
        loading: action.payload
      }
    default :
      return state
  }
}
