import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { base_Url } from "../../utils/baseUrl";
import axios from "axios";

const initialState = {
    purchase: null,
    purchaseData: null,
    purchaseAll:[],
    purchaseEmployee:[],
    loading: false,
    error: null
};


export const createPurchasePlan = createAsyncThunk(
    "membershipPurchase/create",
    async (data, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                `${base_Url}membership-purchase/create`,
                data,
                {
                    withCredentials: true
                }
            );

            return response.data;

        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || "Server Error"
            );
        }
    }
);


export const getPurchasePlan = createAsyncThunk(
    "membershipPurchase/getOne",
    async (id, { rejectWithValue }) => {
        try {

            const response = await axios.get(
                `${base_Url}membership-purchase/${id}`,
                {
                    withCredentials:true
                }
            );

            return response.data;

        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || "Server Error"
            );
        }
    }
);


export const getAllPurchasePlan = createAsyncThunk(
    "membershipPurchase/getAll",
    async (search = "", { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `${base_Url}membership-purchase/viewAll`,
                {
                    params: { search },
                    withCredentials: true
                }
            );

            return response.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || "Server Error"
            );
        }
    }
);
// /emplyeeAssign/:employeeId
export const getAllPurchasePlanByemployeeId = createAsyncThunk(
    "membershipPurchase/getAllPurchasePlanByemployeeId",
    async (employeeId, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `${base_Url}membership-purchase/emplyeeAssign/${employeeId}`,
                {
                    withCredentials: true
                }
            );

            return response.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || "Server Error"
            );
        }
    }
);

const membershipPurchaseSlice = createSlice({

    name:"membershipPurchase",

    initialState,

    reducers:{
        clearPurchase:(state)=>{
            state.purchase=null;
            state.purchaseData=null;
        }
    },


    extraReducers:(builder)=>{

        builder

        // create purchase
        .addCase(createPurchasePlan.pending,(state)=>{
            state.loading=true;
        })

        .addCase(createPurchasePlan.fulfilled,(state,action)=>{
            state.loading=false;
            state.purchase=action.payload.data;
        })

        .addCase(createPurchasePlan.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        })


        // get purchase
        .addCase(getPurchasePlan.pending,(state)=>{
            state.loading=true;
        })

        .addCase(getPurchasePlan.fulfilled,(state,action)=>{
            state.loading=false;
            state.purchaseData=action.payload.data;
        })

        .addCase(getPurchasePlan.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        })



        

        // getAll purchase
        .addCase(getAllPurchasePlan.pending,(state)=>{
            state.loading=true;
        })

        .addCase(getAllPurchasePlan.fulfilled,(state,action)=>{
            state.loading=false;
            state.purchaseAll=action.payload.data;
        })

        .addCase(getAllPurchasePlan.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        })



        
        // getAll purchase purchaseEmployee
        .addCase(getAllPurchasePlanByemployeeId.pending,(state)=>{
            state.loading=true;
        })

        .addCase(getAllPurchasePlanByemployeeId.fulfilled,(state,action)=>{
            state.loading=false;
            state.purchaseEmployee=action.payload.data;
        })

        .addCase(getAllPurchasePlanByemployeeId.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        })
    }

});


export const {clearPurchase}=membershipPurchaseSlice.actions;

export default membershipPurchaseSlice.reducer;