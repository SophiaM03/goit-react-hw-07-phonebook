import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';
const initialContacts = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};
const pending = state => {
  state.isLoading = true;
};
const rejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts.contacts,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        pending(state);
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        rejected(state, action);
      })

      .addCase(addContact.pending, state => {
        pending(state);
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        rejected(state, action);
      })

      .addCase(deleteContact.pending, state => {
        pending(state);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(
          contact => contact.id !== action.payload
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        rejected(state, action);
      });
  },
});
export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialContacts.filter,
  reducers: {
    setFilter(_, action) {
      return action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
export const contactsReducer = contactsSlice.reducer;
