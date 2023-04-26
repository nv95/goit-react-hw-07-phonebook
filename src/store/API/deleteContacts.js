import { createAsyncThunk } from "@reduxjs/toolkit";
import { removeContact } from "store/slice";

export const deleteContacts = createAsyncThunk(
    "items/removeContacts",
    async function (id, {rejectWithValue, dispatch}){
        try {
            const response = await fetch(`https://644810f17bb84f5a3e516a67.mockapi.io/contacts/${id}`,
            {method:"DELETE" })
            if (!response.ok) throw new Error("Cant delete contacts")

            dispatch(removeContact(id))
        } catch (error){
            return rejectWithValue(error.message);
        }
    }
)