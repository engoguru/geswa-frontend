import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { base_Url } from "../../utils/baseUrl";

export const fetchAllPartner = createAsyncThunk(
    "partner/fetchAllPartner",
    async (filters, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${base_Url}hospital/viewAll`, {
      params: filters,
    });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const fetchOnePartner = createAsyncThunk(
    "partner/fetchOnePartner",
    async (id, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${base_Url}hospital/viewOne/${id}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const initialState = {
    partners: [],
    partnerOne: null,
    loading: false,
    error: null,
};

const partnerSlice = createSlice({
    name: "partner",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder

            // Fetch All Partners
            .addCase(fetchAllPartner.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAllPartner.fulfilled, (state, action) => {
                state.loading = false;
                state.partners = action.payload;
            })
            .addCase(fetchAllPartner.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Fetch One Partner
            .addCase(fetchOnePartner.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchOnePartner.fulfilled, (state, action) => {
                state.loading = false;
                state.partnerOne = action.payload;
            })
            .addCase(fetchOnePartner.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default partnerSlice.reducer;