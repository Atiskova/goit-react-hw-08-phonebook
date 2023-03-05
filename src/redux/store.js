import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/slice';
import { userReducer } from './users/users.Slice';


const rootReducer = combineReducers({
  user: userReducer,
  contacts: contactsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
