import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContact } from "store/slice";

export const addContacts = createAsyncThunk(
    "items/addContacts",
    async function (user, {rejectWithValue, dispatch}){
        try {
            const response = await fetch(`https://644810f17bb84f5a3e516a67.mockapi.io/contacts/`,
            {method:"POST",
            headers:{"Content-Type": 'application/json'},
            body: JSON.stringify(user)
            })
            if (!response.ok){throw new Error("Cant add contact")} 

            const data = await response.json();
            dispatch(addContact(data))
        } catch (error){
            return rejectWithValue(error.message);
        }
    }
)