import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { base_Url } from "../../utils/baseUrl";

/* =========================
   GET ALL BLOGS
========================= */
export const viewaAllBlog = createAsyncThunk(
  "blog/viewAll",
  async (
    { search = "", page = 1, itemsPerPage = 50 } = {},
    { rejectWithValue }
  ) => {
    try {
      const res = await axios.get(`${base_Url}blog/viewall`, {
        params: { search, page, itemsPerPage },
      });

      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

/* =========================
   GET SINGLE BLOG
========================= */
export const viewOneBlog = createAsyncThunk(
  "blog/viewOne",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${base_Url}blog/viewOne/${id}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

/* =========================
   INITIAL STATE
========================= */
const initialState = {
  // all blogs
  blogAll: [],
  loading: false,

  // single blog
  singleBlog: null,
  singleLoading: false,

  // error
  error: null,

  // pagination
  currentPage: 1,
  totalPages: 0,
  itemsPerPage: 50,
  totalBlogs: 0,
};

/* =========================
   SLICE
========================= */
const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    clearBlogError: (state) => {
      state.error = null;
    },
    clearSingleBlog: (state) => {
      state.singleBlog = null;
    },
  },

  extraReducers: (builder) => {
    builder

      /* ================= ALL BLOGS ================= */
      .addCase(viewaAllBlog.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(viewaAllBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.blogAll = action.payload.data;

        state.currentPage = action.payload.currentPage;
        state.totalPages = action.payload.totalPages;
        state.itemsPerPage = action.payload.itemsPerPage;
        state.totalBlogs = action.payload.totalBlogs;
      })
      .addCase(viewaAllBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      /* ================= SINGLE BLOG ================= */
      .addCase(viewOneBlog.pending, (state) => {
        state.singleLoading = true;
        state.error = null;
      })
      .addCase(viewOneBlog.fulfilled, (state, action) => {
        state.singleLoading = false;
        state.singleBlog = action.payload.data;
      })
      .addCase(viewOneBlog.rejected, (state, action) => {
        state.singleLoading = false;
        state.error = action.payload;
      });
  },
});

export const { clearBlogError, clearSingleBlog } = blogSlice.actions;

export default blogSlice.reducer;