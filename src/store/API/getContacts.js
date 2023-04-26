import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContacts = createAsyncThunk(
    "items/fetchContacts",
    async function ( _, {rejectWithValue}){
        try {
            const response = await fetch(`https://644810f17bb84f5a3e516a67.mockapi.io/contacts/`)
            if (!response.ok) throw new Error("Not Found Contacts")

            const data = await response.json();
            return data;
        } catch (error){
            return rejectWithValue(error.message);
        }
    }
)