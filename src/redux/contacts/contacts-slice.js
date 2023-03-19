import {createSlice} from "@reduxjs/toolkit";
import { fetchContacts, fetchAddContacts, fetchDeleteContacts } from "./contacts-operation";

const initialState ={
  items: [],
  isLoading: false,
  error: null,
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: (builder) => {
      builder
          .addCase(fetchContacts.pending, (store)=>{
            store.isLoading = true;
          })
          .addCase(fetchContacts.fulfilled, (store, { payload }) => {
              store.isLoading = false;
              store.items = payload;
          })
          .addCase(fetchContacts.rejected, (store, { payload }) => {
              store.isLoading = false;
              store.error = payload;
          })
          .addCase(fetchAddContacts.pending, (store) => {
              store.isLoading = true;
          })
          .addCase(fetchAddContacts.fulfilled, (store, { payload }) => {
              store.isLoading = false;
              store.items.push(payload);
          })
          .addCase(fetchAddContacts.rejected, (store, { payload }) => {
              store.isLoading = false;
              store.error = payload;
          })
          .addCase(fetchDeleteContacts.pending, (store) => {
              store.isLoading = true;
          })
          .addCase(fetchDeleteContacts.fulfilled, (store, { payload }) => {
              store.isLoading = false;
              const index = store.items.findIndex(item => item.id === payload);
              store.items.splice(index, 1);
          })
          .addCase(fetchDeleteContacts.rejected, (store, { payload }) => {
              store.isLoading = false;
              store.error = payload;
          })
    },
  });


// export const {addContact, deleteContact} = contactsSlice.actions;
export default contactsSlice.reducer;

