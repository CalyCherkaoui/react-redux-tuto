import { createStore } from "redux";
// import cakeReducer from "./cake/cakeReducer";
import rootRducer from "./rootReducer";

const store = createStore(rootRducer);

export default store
