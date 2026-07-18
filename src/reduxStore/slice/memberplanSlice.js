import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { base_Url } from "../../utils/baseUrl";
import axios from "axios";

const initialState = {
    plans: [],
    currentPlan: null,
    loading: false,
    error: null,
    pagination: {
        page: 1,
        limit: 10,
        total: 0,
        totalPages: 0
    }
};

export const getMemberPlans = createAsyncThunk(
    "memberPlan/getPlans",
    async ({ page = 1, limit = 10, search = "" }, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(
                `${base_Url}plan/viewAll?page=${page}&limit=${limit}&search=${search}`
            );

            return data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || "Server Error"
            );
        }
    }
);

export const getOneMemberPlan = createAsyncThunk(
    "memberPlan/getOneMemberPlan",
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(
                `${base_Url}plan/viewOne/${id}`
            );

            return data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || "Server Error"
            );
        }
    }
);

const memberPlanSlice = createSlice({
    name: "memberPlan",

    initialState,

    reducers: {
        clearCurrentPlan: (state) => {
            state.currentPlan = null;
        },

        clearMemberPlanError: (state) => {
            state.error = null;
        }
    },

    extraReducers: (builder) => {
        builder

        .addCase(getMemberPlans.pending, (state) => {
            state.loading = true;
            state.error = null;
        })

        .addCase(getMemberPlans.fulfilled, (state, action) => {
            state.loading = false;
            state.plans = action.payload.data || [];
            state.pagination = action.payload.pagination || {
                page: 1,
                limit: 10,
                total: 0,
                totalPages: 0
            };
        })

        .addCase(getMemberPlans.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })


        .addCase(getOneMemberPlan.pending, (state) => {
            state.loading = true;
            state.error = null;
        })

        .addCase(getOneMemberPlan.fulfilled, (state, action) => {
            state.loading = false;
            state.currentPlan = action.payload.data;
        })

        .addCase(getOneMemberPlan.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    }
});


export const {
    clearCurrentPlan,
    clearMemberPlanError
} = memberPlanSlice.actions;


export default memberPlanSlice.reducer;