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

// Dashbaord data
// Get assigned hospital
export const getAssignedHospitalUser = createAsyncThunk(
    "hospital/getAssignedHospitalUser",
    async (userId, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `${base_Url}hospital/assigned-hospital/${userId}`,
                {
                    withCredentials: true
                }
            );

            return response.data;

        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || "Fetch assigned hospital failed"
            );
        }
    }
);




const initialState = {
    partners: [],
    partnerOne: null,
 assignedHospitalData: null,

    loading: false,
  assignmentLoading: false,

    error: null,
    assignmentError: null,
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
            })



                  // Get assigned hospital
            .addCase(getAssignedHospitalUser.pending, (state) => {
                state.assignmentLoading = true;
            })
            .addCase(getAssignedHospitalUser.fulfilled, (state, action) => {
                state.assignmentLoading = false;
                state.assignedHospitalData = action.payload.data;
            })
            .addCase(getAssignedHospitalUser.rejected, (state, action) => {
                state.assignmentLoading = false;
                state.assignmentError = action.payload;
            })
    },
});

export default partnerSlice.reducer;