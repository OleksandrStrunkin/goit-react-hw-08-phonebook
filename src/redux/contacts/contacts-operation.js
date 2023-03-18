import { getContacts, addContact, deleteContact } from "shared/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContacts = createAsyncThunk(
    'contacts/fech-all',
    async(_, {rejectWithValue}) => {
        try {
            const data = await getContacts();
            return data;
        } catch ({response}) {
            return rejectWithValue(response);
        }
    }
);

export const fetchAddContacts = createAsyncThunk(
    'contacts/add',
    async(data, {rejectWithValue}) => {
        try {
            const result = await addContact(data);
            return result;
        } catch ({response}) {
            return rejectWithValue(response.data.message)
        }
    }
);
export const fetchDeleteContacts = createAsyncThunk(
    'contacts/delete',
    async(id, {rejectWithValue}) => {
        try {
            await deleteContact(id);
            return id;
        } catch ({response}) {
            return rejectWithValue(response.data.message)
        }
    }
);