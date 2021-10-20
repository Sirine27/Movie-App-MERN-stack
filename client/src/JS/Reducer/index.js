import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import {movieReducer} from "./movie";
import {editReducer} from "./edit"


const rootReducer = combineReducers({authReducer,movieReducer, editReducer})


export default rootReducer