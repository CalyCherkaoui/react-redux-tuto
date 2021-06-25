import { combineReducers } from "redux";
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'

const rootRducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
})

export default rootRducer