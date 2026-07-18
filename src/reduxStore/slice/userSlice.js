import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { base_Url } from "../../utils/baseUrl";


export const registerUser = (
    createAsyncThunk('user/registerUser', async (userData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${base_Url}user/register`, userData)
            return response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    })
)

export const loginUser = (
    createAsyncThunk('user/loginUser', async (userData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${base_Url}user/login`, userData, { withCredentials: true })
            return response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    })
)


export const forgetPasswordUser = createAsyncThunk(
    "user/forgetPasswordUser",
    async (email, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                `${base_Url}user/forget-password`,
                { email }
            );
            console.log(response, "poo")
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || "Something went wrong"
            );
        }
    }
);

export const verifyOtpUser = (
    createAsyncThunk('user/verifyOtpUser', async (otpData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${base_Url}user/verify-otp`, otpData)
            return response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    })

)
export const resetPasswordUser = (
    createAsyncThunk('user/resetPasswordUser', async (passwordData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${base_Url}user/reset-password`, passwordData)
            return response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }

    })

)



export const verifiedUser = (
    createAsyncThunk('user/verifiedUser', async (token, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${base_Url}user/verifyUser`,
                {
                    withCredentials: true
                }
            )
            // console.log(response,"oiok")
            return response.data

        } catch (error) {
            return rejectWithValue(error.message)
        }
    })
)

export const logoutUser = createAsyncThunk(
    "user/logoutUser",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                `${base_Url}user/logout`,
                {},
                {
                    withCredentials: true,
                }
            );

            return response.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || error.message
            );
        }
    }
);

let initialState = {
    userInfo: null,
    userData: null,
    userForget: null,
    userOtp: null,
    resetPassword: null,

    loading: false,

    loginUserData: null,

    logout: null,
    isloginLoading: false,
    authChecked: false,

    error: null,

}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
            state.loading = true
        })
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false
            state.userInfo = action.payload
        })
        builder.addCase(registerUser.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })

        // user Login

        builder.addCase(loginUser.pending, (state) => {
            state.loading = true
        })

        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.loginUserData  = action.payload
        })

        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        })

        // user forget password
        builder.addCase(forgetPasswordUser.pending, (state) => {
            state.loading = true
        })
        builder.addCase(forgetPasswordUser.fulfilled, (state, action) => {
            state.loading = false;
            state.userForget = action.payload
        })
        builder.addCase(forgetPasswordUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        })

        // user otp
        builder.addCase(verifyOtpUser.pending, (state) => {
            state.loading = true
        })
        builder.addCase(verifyOtpUser.fulfilled, (state, action) => {
            state.loading = false;
            state.userOtp = action.payload
        })
        builder.addCase(verifyOtpUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        })

        // reset
        builder.addCase(resetPasswordUser.pending, (state) => {
            state.loading = true
        })
        builder.addCase(resetPasswordUser.fulfilled, (state, action) => {
            state.loading = false;
            state.resetPassword = action.payload
        })
        builder.addCase(resetPasswordUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        })


        // verified  logged user
        builder.addCase(verifiedUser.pending, (state) => {
            state.isloginLoading = true;
        });

        builder.addCase(verifiedUser.fulfilled, (state, action) => {
            state.isloginLoading = false;
            state.loginUserData = action.payload;
            state.authChecked = true;
        });

        builder.addCase(verifiedUser.rejected, (state) => {
            state.isloginLoading = false;
            state.loginUserData = null;
            state.authChecked = true;
        });



        // verified  logged user
        builder.addCase(logoutUser.pending, (state) => {
            state.isloginLoading = true;
        });

        builder.addCase(logoutUser.fulfilled, (state, action) => {
            state.isloginLoading = false;
            state.logout = action.payload;
            state.authChecked = true;
        });

        builder.addCase(logoutUser.rejected, (state) => {
            state.isloginLoading = false;
            state.logout = null;
            state.authChecked = true;
        });

    }
})
export default userSlice.reducer