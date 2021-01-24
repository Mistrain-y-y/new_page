import {LOGIN_IN} from '../constants'

const initState = false
const login = (preState = initState, action) => {
  switch (action.type) {
    case LOGIN_IN:
      return true
    default:
      return preState
  }
}

export default login