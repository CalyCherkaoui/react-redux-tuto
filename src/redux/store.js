import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import cakeReducer from "./cake/cakeReducer";
import logger from "redux-logger";
import rootRducer from "./rootReducer";

const store = createStore(rootRducer, applyMiddleware(logger, thunk));

export default store
