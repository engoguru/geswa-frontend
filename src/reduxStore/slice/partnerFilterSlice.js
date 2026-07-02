// reduxStore/slice/partnerFilterSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: "",
    city: "",
    speciality: [],
    discount: 10,
};

const partnerFilterSlice = createSlice({
    name: "partnerFilter",
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload;
        },

        setCity: (state, action) => {
            state.city = action.payload;
        },

        setDiscount: (state, action) => {
            state.discount = action.payload;
        },
        setPage: (state, action) => {
            state.page = action.payload;
        },

        resetFilters: () => initialState,
    },
});

export const {
    setSearch,
    setCity,
    setDiscount,
    resetFilters,
    setPage
} = partnerFilterSlice.actions;

export default partnerFilterSlice.reducer;