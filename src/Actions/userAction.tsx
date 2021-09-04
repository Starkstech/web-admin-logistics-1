import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOG_USER_OUT
} from "../Constant/userConstant"
// import axios from '../Services/axios'

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
  },

  clearCurrentUser: () => async (dispatch: Function) => {
    // await axios.post('/user/logout')

    dispatch({
      type: LOG_USER_OUT
    })
  }
}

export default userAction
