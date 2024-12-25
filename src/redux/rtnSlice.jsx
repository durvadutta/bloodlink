import { createSlice } from "@reduxjs/toolkit";

const rtnSlice = createSlice({
  name: "rtn",
  initialState: {
    reqNotification: [],  
  },
  reducers: {
    setReqNotification: (state, action) => {
      state.reqNotification = action.payload;
    },
  },

});

export const { setReqNotification } = rtnSlice.actions;
export default rtnSlice.reducer;
