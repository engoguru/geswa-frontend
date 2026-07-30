import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { base_Url } from "../../../utils/baseUrl";


// Create Transaction
export const createTransaction = createAsyncThunk(
 "transaction/createTransaction",
 async(data,{rejectWithValue})=>{
  try{

   const token = localStorage.getItem("token");

   const res = await axios.post(
    `${base_Url}expanse/create`,
    data,
    {
     headers:{
      Authorization:`Bearer ${token}`
     }
    }
   );

   return res.data;

  }
  catch(error){

   return rejectWithValue(
    error.response?.data?.message || "Something went wrong"
   );

  }
 }
);



// View All Transaction
export const getAllTransaction = createAsyncThunk(
 "transaction/getAllTransaction",
 async(_,{rejectWithValue})=>{
  try{

   const token = localStorage.getItem("token");


   const res = await axios.get(
    `${base_Url}expanse/viewAll`,
    {
     headers:{
      Authorization:`Bearer ${token}`
     }
    }
   );
console.log(res,"pp")

   return res.data;


  }
  catch(error){

   return rejectWithValue(
    error.response?.data?.message || "Something went wrong"
   );

  }
 }
);



// View One Transaction
export const getOneTransaction = createAsyncThunk(
 "transaction/getOneTransaction",
 async(id,{rejectWithValue})=>{
  try{

   const token = localStorage.getItem("token");


   const res = await axios.get(
    `${base_Url}transaction/${id}`,
    {
     headers:{
      Authorization:`Bearer ${token}`
     }
    }
   );


   return res.data;


  }
  catch(error){

   return rejectWithValue(
    error.response?.data?.message || "Something went wrong"
   );

  }
 }
);



// Update Transaction
export const updateTransaction = createAsyncThunk(
 "transaction/updateTransaction",
 async({id,data},{rejectWithValue})=>{
  try{

   const token = localStorage.getItem("token");


   const res = await axios.put(
    `${base_Url}transaction/update/${id}`,
    data,
    {
     headers:{
      Authorization:`Bearer ${token}`
     }
    }
   );


   return res.data;


  }
  catch(error){

   return rejectWithValue(
    error.response?.data?.message || "Something went wrong"
   );

  }
 }
);



// Delete Transaction
export const deleteTransaction = createAsyncThunk(
 "transaction/deleteTransaction",
 async(id,{rejectWithValue})=>{
  try{

   const token = localStorage.getItem("token");


   const res = await axios.delete(
    `${base_Url}transaction/delete/${id}`,
    {
     headers:{
      Authorization:`Bearer ${token}`
     }
    }
   );


   return {
    id,
    data:res.data
   };


  }
  catch(error){

   return rejectWithValue(
    error.response?.data?.message || "Something went wrong"
   );

  }
 }
);



const initialState={

 transactions:[],
 transactionOne:null,

 pagination:{},

 loading:false,

 error:null,

 success:false

};



const transactionSlice=createSlice({

 name:"transaction",

 initialState,


 reducers:{

  clearTransactionError:(state)=>{
   state.error=null;
  },


  clearTransactionSuccess:(state)=>{
   state.success=false;
  }

 },


 extraReducers:(builder)=>{

  builder



  // CREATE

  .addCase(createTransaction.pending,(state)=>{
   state.loading=true;
  })


  .addCase(createTransaction.fulfilled,(state,action)=>{

   state.loading=false;

   state.success=true;

   state.transactions.unshift(
    action.payload.data
   );

  })


  .addCase(createTransaction.rejected,(state,action)=>{

   state.loading=false;

   state.error=action.payload;

  })





  // GET ALL

  .addCase(getAllTransaction.pending,(state)=>{
   state.loading=true;
  })


  .addCase(getAllTransaction.fulfilled,(state,action)=>{

   state.loading=false;

   state.transactions =
   action.payload.data;


   state.pagination =
   action.payload.pagination;

  })


  .addCase(getAllTransaction.rejected,(state,action)=>{

   state.loading=false;

   state.error=action.payload;

  })






  // GET ONE

  .addCase(getOneTransaction.pending,(state)=>{
   state.loading=true;
  })


  .addCase(getOneTransaction.fulfilled,(state,action)=>{

   state.loading=false;

   state.transactionOne =
   action.payload.data;

  })


  .addCase(getOneTransaction.rejected,(state,action)=>{

   state.loading=false;

   state.error=action.payload;

  })






  // UPDATE

  .addCase(updateTransaction.pending,(state)=>{
   state.loading=true;
  })


  .addCase(updateTransaction.fulfilled,(state,action)=>{

   state.loading=false;

   state.success=true;


   const index =
   state.transactions.findIndex(
    item=>item.id === action.payload.data.id
   );


   if(index !== -1){

    state.transactions[index] =
    action.payload.data;

   }


  })


  .addCase(updateTransaction.rejected,(state,action)=>{

   state.loading=false;

   state.error=action.payload;

  })






  // DELETE

  .addCase(deleteTransaction.pending,(state)=>{

   state.loading=true;

  })


  .addCase(deleteTransaction.fulfilled,(state,action)=>{

   state.loading=false;

   state.success=true;


   state.transactions =
   state.transactions.filter(
    item=>item.id !== action.payload.id
   );


  })


  .addCase(deleteTransaction.rejected,(state,action)=>{

   state.loading=false;

   state.error=action.payload;

  });


 }


});


export const {
 clearTransactionError,
 clearTransactionSuccess
}=transactionSlice.actions;


export default transactionSlice.reducer;