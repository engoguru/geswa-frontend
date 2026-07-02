import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice"
import contactReducer from "../slice/contactSlice"
import hospitalReducer from "../slice/partnerSlice"
import partnerfilterReducer from "../slice/partnerFilterSlice"

import jobReducer  from "../slice/careerSlice"

import blogReducer from "../slice/blogSlice"

export const rootReducer=combineReducers({
  user:userReducer,
  contact:contactReducer,
  hospital:hospitalReducer,
  partnerFilter:partnerfilterReducer,

  jobData:jobReducer,
  blog:blogReducer



})