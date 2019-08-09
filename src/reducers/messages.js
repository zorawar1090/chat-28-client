import {ALL_MESSAGES} from '../actions'

export default function (state = [], action = {}){
  switch(action.type){
    case ALL_MESSAGES:
      return action.payload
    default:
      return state
  }
}