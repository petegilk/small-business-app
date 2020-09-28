import { combineReducers } from 'redux'

const listings = (state = [], action) => {
  switch(action.type) {
    case 'ADD_LISTING' : return [...state, action.value]
    case 'DELETE_LISTING' : 
      let stateCopy = [...state]
      stateCopy.splice(action.value, 1)
      return stateCopy
    default : return state
  }
}

export default combineReducers({ listings })