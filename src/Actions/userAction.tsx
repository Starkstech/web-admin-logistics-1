import {
  SAVE_REQUEST,
  SAVE_SUCCESS
} from "../Constant/userConstant"

const userAction = {

  saveUser: (data: any) => {
    const success = (data: any) => {
      return { type: SAVE_SUCCESS, data }
    }

    const request = () => {
      return { type: SAVE_REQUEST, status: true }
    }

    return (
      dispatch: (arg0: {type: any, data: any}) => any) => {
      request()
      return dispatch(success(data))
    }
  }

}
export default userAction
