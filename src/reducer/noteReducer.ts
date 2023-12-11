import { notesAll } from "../noteItems";



export interface Action {
    type: string;
    payload: any;
}

export interface Note{
    title: string;
    content: string;
}

export interface NoteState {
  notes: Note[];
}


export const noteReducer = (
    state: NoteState = { notes: notesAll},
    action: Action
  ) => {
      switch (action.type) {
        case 'NewNote':
          return {notes: [...state.notes,action.payload]};
      
        default:
          return state;
      }
  };