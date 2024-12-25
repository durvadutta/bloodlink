import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "userAuth",
  initialState: {
    user: null,
    suggestedUsers: [],
    connectedUsers: [],
    userRequests: [],
    requestsSent: [],
    userProfile: null,
    selectedUser: null,
  },
  reducers: {
    setAuthUser: (state, action) => {
      state.user = action.payload;
    },
    setSuggestedUsers: (state, action) => {
      state.suggestedUsers = action.payload;
    },
    setConnectedUsers: (state, action) => {
      state.connectedUsers = action.payload;
    },
    setUserRequests: (state, action) => {
      state.userRequests = action.payload;
    },
    setUserProfile: (state, action) => {
      state.userProfile = action.payload;
    },
    setRequestsSent: (state, action) => {
      state.requestsSent = action.payload;
    },
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
  },
});
export const {
  setAuthUser,
  setSuggestedUsers,
  setUserProfile,
  setUserRequests,
  setRequestsSent,
  setConnectedUsers,
  setSelectedUser,
} = userSlice.actions;
export default userSlice.reducer;
