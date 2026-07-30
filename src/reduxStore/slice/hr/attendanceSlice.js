import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { base_Url } from "../../../utils/baseUrl";

export const getEmployees = createAsyncThunk(
 "attendance/getEmployees",
 async ({ page = 1, limit = 10, search = "" }, { rejectWithValue }) => {
  try {
   const token = localStorage.getItem("token");

   const { data } = await axios.get(
    `${base_Url}attendance/employees?page=${page}&limit=${limit}&search=${search}`,
    {
     headers: {
      Authorization: `Bearer ${token}`
     }
    }
   );

   return data;
  } catch (error) {
   return rejectWithValue(
    error.response?.data?.message || "Something went wrong"
   );
  }
}
);


export const createAttendance = createAsyncThunk(
 "attendance/createAttendance",
 async (attendanceData, { rejectWithValue }) => {
  try {
   const token = localStorage.getItem("token");

   const { data } = await axios.post(
    `${base_Url}attendance/create`,
    attendanceData,
    {
     headers: {
      Authorization: `Bearer ${token}`
     }
    }
   );

   return data;
  } catch (error) {
   return rejectWithValue(
    error.response?.data?.message || "Something went wrong"
   );
  }
 }
);

export const getAttendanceHistory = createAsyncThunk(
  "attendance/getAttendanceHistory",
  async (employeeId, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");

      const { data } = await axios.get(
        `${base_Url}attendance/history/${employeeId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Something went wrong"
      );
    }
  }
);

export const calculateSalary = createAsyncThunk(
 "attendance/calculateSalary",
 async (employeeId, { rejectWithValue }) => {
  try {
   const token = localStorage.getItem("token");
console.log(employeeId)
   const { data } = await axios.get(
    `${base_Url}attendance/salary/${employeeId}`,
    {
     headers: {
      Authorization: `Bearer ${token}`
     }
    }
   );

   return data;
  } catch (error) {
   return rejectWithValue(
    error.response?.data?.message || "Something went wrong"
   );
  }
 }
);


const initialState = {
 employees: [],
 pagination: {},

 attendanceHistory:[],

 attendance: null,
 salary: null,

 loading: false,
 attendanceLoading: false,
 salaryLoading: false,

 success: false,
 error: null
};


const attendanceSlice = createSlice({
 name: "attendance",
 initialState,

 reducers: {
  clearAttendanceError: (state) => {
   state.error = null;
  },

  clearAttendanceSuccess: (state) => {
   state.success = false;
  },

  clearSalary: (state) => {
   state.salary = null;
  }
 },

 extraReducers: (builder) => {

  builder

   // Get Employees
   .addCase(getEmployees.pending, (state) => {
    state.loading = true;
    state.error = null;
   })

   .addCase(getEmployees.fulfilled, (state, action) => {
    state.loading = false;
    state.employees = action.payload.data;
    state.pagination = action.payload.pagination;
   })

   .addCase(getEmployees.rejected, (state, action) => {
    state.loading = false;
    state.error = action.payload;
   })


   // Create Attendance
   .addCase(createAttendance.pending, (state) => {
    state.attendanceLoading = true;
    state.success = false;
    state.error = null;
   })

   .addCase(createAttendance.fulfilled, (state, action) => {
    state.attendanceLoading = false;
    state.success = true;
    state.attendance = action.payload.attendance;
   })

   .addCase(createAttendance.rejected, (state, action) => {
    state.attendanceLoading = false;
    state.success = false;
    state.error = action.payload;
   })


   
   // history Attendance
   .addCase(getAttendanceHistory.pending, (state) => {
    state.attendanceLoading = true;
    state.success = false;
    state.error = null;
   })

   .addCase(getAttendanceHistory.fulfilled, (state, action) => {
    state.attendanceLoading = false;
    state.success = true;
    state.attendanceHistory = action.payload;
   })

   .addCase(getAttendanceHistory.rejected, (state, action) => {
    state.attendanceLoading = false;
    state.success = false;
    state.error = action.payload;
   })


   // Calculate Salary
   .addCase(calculateSalary.pending, (state) => {
    state.salaryLoading = true;
    state.error = null;
   })

   .addCase(calculateSalary.fulfilled, (state, action) => {
    state.salaryLoading = false;
    state.salary = action.payload.salary;
   })

   .addCase(calculateSalary.rejected, (state, action) => {
    state.salaryLoading = false;
    state.error = action.payload;
   });

 }
});

export const {
 clearAttendanceError,
 clearAttendanceSuccess,
 clearSalary
} = attendanceSlice.actions;

export default attendanceSlice.reducer;