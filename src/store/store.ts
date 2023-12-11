import {legacy_createStore as createStore } from "redux";
import { rootReducer } from "../reducer/reducer";
import { NoteState } from "../reducer/noteReducer";
const initialState: NoteState = {
  notes: [

  ]
}


  export const store = createStore(rootReducer, initialState);