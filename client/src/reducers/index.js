import { combineReducers } from "redux";
import authReducer from "./auth.js";
import questionsReducer from "./questions.js";
import currentUserReducer from "./currentUser.js";

export default combineReducers({
    authReducer, currentUserReducer, questionsReducer
})

