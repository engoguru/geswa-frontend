import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice"
import contactReducer from "../slice/contactSlice"
import hospitalReducer from "../slice/partnerSlice"
import partnerfilterReducer from "../slice/partnerFilterSlice"

import jobReducer  from "../slice/careerSlice"

import blogReducer from "../slice/blogSlice"
import memberPlanReducer from "../slice/memberplanSlice"
import memberPurchaseReducer from "../slice/premiumPurchaseSlice"
import memberServiceReducer from "../slice/premiumServiceSlice"

export const rootReducer=combineReducers({
  user:userReducer,
  contact:contactReducer,
  hospital:hospitalReducer,
  partnerFilter:partnerfilterReducer,

  jobData:jobReducer,
  blog:blogReducer,
  memberPlan:memberPlanReducer,
  memberPurchase:memberPurchaseReducer,
  memberService:memberServiceReducer

})