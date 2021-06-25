import { createStore, applyMiddleware } from "redux";
// import cakeReducer from "./cake/cakeReducer";
import logger from "redux-logger";
import rootRducer from "./rootReducer";

const store = createStore(rootRducer, applyMiddleware(logger));

export default store
