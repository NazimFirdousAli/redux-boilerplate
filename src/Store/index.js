import combineReducer from "./Reducer/combineReducer";
import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
const store = createStore(combineReducer,{},applyMiddleware(thunk))


export default store;