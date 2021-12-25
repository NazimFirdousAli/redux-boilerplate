import { combineReducers } from "redux";
import index from './index';
import index2 from './index2';


export default combineReducers({
    name:index,
    class:index2
})