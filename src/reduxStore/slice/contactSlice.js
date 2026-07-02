import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { base_Url } from "../../utils/baseUrl";
import axios from "axios";


// CREATE CONTACT
export const createContact = createAsyncThunk(
    "create/contact",

    async (contactdata, { rejectWithValue }) => {
        try {

            const response = await axios.post(
                `${base_Url}contact/create`,
                contactdata
            );

            return response.data;

        } catch (error) {

            return rejectWithValue(
                error.response?.data || {
                    message: "Something went wrong"
                }
            );
        }
    }
);


const initialState = {
    contactData: null,
    loading: false,
    error: null,
    success: false,
};


const contactSlice = createSlice({
    name: "contact",

    initialState,

    reducers: {},

    extraReducers: (builder) => {

        builder

            .addCase(createContact.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })

            .addCase(createContact.fulfilled, (state, action) => {
                state.loading = false;
                state.contactData = action.payload;
                state.success = true;
            })

            .addCase(createContact.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.success = false;
            });
    },
});

export default contactSlice.reducer;