import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer/rootreducer";

export  const store=configureStore({
   reducer:rootReducer
})