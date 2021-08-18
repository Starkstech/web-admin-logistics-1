import { TOGGLE_SEARCH_BOX } from "Constant/searchConstant";

const initialState = {
  status: false
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SEARCH_BOX :
      return { ...state, status: !state.status }
    default :
      return state
  }
}

export default searchReducer
