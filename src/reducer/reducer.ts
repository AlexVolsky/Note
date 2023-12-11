import { combineReducers } from "redux";

import { noteReducer, Note } from "./noteReducer";



export const rootReducer = combineReducers({
  
  note : noteReducer,

});