import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getContacts, addContact, deleteContact } from './operations';

const initialState = {
  contacts: [],
  status: 'idle',
  error: null,
  filter: '',
};
const extraAction = [getContacts, addContact, deleteContact];

const getAction = type => extraAction.map(action => action[type]);

const handlePending = state => {
  state.error = null;
  state.status = 'pending';
};

const handleRejected = (state, { payload }) => {
  state.status = 'rejected';
  state.error = payload;
};

const handleFulfilled = state => {
  state.status = 'resolved';
};

const contactsSlice = createSlice({
  name: 'contacts',

  initialState,

  reducers: {
    filterChange: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getContacts.fulfilled, (state, { payload }) => {
        state.contacts = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contacts = [...state.contacts, payload];
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== payload.id
        );
      })
      .addMatcher(isAnyOf(...getAction('pending')), handlePending)
      .addMatcher(isAnyOf(...getAction('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getAction('rejected')), handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { filterChange } = contactsSlice.actions;
