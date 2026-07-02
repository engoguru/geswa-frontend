import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { base_Url } from "../../utils/baseUrl";

// Fetch all jobs
export const viewAllJob = createAsyncThunk(
  "jobs/viewAllJob",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${base_Url}job/viewall-job`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch jobs"
      );
    }
  }
);


export const viewOneJob=createAsyncThunk(
    "jobs/viewOne",
    async(id,thunkAPI)=>{
        try {
            const response=await axios.get(`${base_Url}job/view-jobdetail/${id}`)
            return response.data;
        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "Failed to fetch job detail"
            );

        }
    }
)

// /create/application

export const createApplication=createAsyncThunk(
  "application/create",
  async(formData,thunkAPI)=>{
    try {
      const response=await axios.post(`${base_Url}job/create/application`,formData)  
    return response.data
    } catch (error) {
      console.log(error)
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "Failed to fetch job detail"
            );
    }
  }  
)

const initialState = {
  jobs: [],
  jobOneDetail:null,
  application:null,
  loading: false,
  error: null,
};

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(viewAllJob.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(viewAllJob.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload;
      })
      .addCase(viewAllJob.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });



 builder
      .addCase(viewOneJob.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(viewOneJob.fulfilled, (state, action) => {
        state.loading = false;
        state.jobOneDetail = action.payload;
      })
      .addCase(viewOneJob.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });


       builder
      .addCase(createApplication.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createApplication.fulfilled, (state, action) => {
        state.loading = false;
        state.application = action.payload;
      })
      .addCase(createApplication.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

  },
});

export default jobSlice.reducer;