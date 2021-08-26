import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS
} from "../Constant/userConstant"

const userAction = {
  setCurrentUser: (user:Object) => {
    const success = (data:Object) => {
      return { type: GET_USER_SUCCESS, payload: data }
    }

    const request = () => {
      return { type: GET_USER_REQUEST, payload: 'loading' }
    }

    return (dispatch:Function) => {
      dispatch(request)
      dispatch(success(user))
    }
  }
}

export default userAction
