import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);  
      },
      prepare({name, number}) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContacts(state, action) {
     return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;