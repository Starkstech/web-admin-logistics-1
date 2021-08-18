import { TOGGLE_SIDEBAR } from '../../Constant/sidebarConstant'
const initialState = {
  status: false
}

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR :
      return { ...state, status: !state.status }
    default :
      return state
  }
}

export default sidebarReducer
