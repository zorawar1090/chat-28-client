import {ALL_CHANNELS} from '../actions'

export default function (state = [], action = {}){
  switch(action.type){
    case ALL_CHANNELS:
      return action.payload
    default:
      return state
  }
}