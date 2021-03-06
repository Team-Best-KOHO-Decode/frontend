import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface GroupState {
  group_id: string;
  group_url: string;
  group_name: string;
  group_events: any;
  loading: boolean;
}

const initialState: GroupState = {
  group_id: "",
  group_url: "",
  group_name: "",
  group_events: null,
  loading: false,
};

export const groupSlice = createSlice({
  name: "group",
  initialState,
  reducers: {
    updateGroupName: (state, action: PayloadAction<string>) => {
      state.group_name = action.payload;
    },
    requestPostGroup: (state) => {
      state.loading = true;
    },
    responsePostGroup: (
      state,
      action: PayloadAction<{ group_id: string; group_url: string }>
    ) => {
      state.group_id = action.payload.group_id;
      state.group_url = action.payload.group_url;
      state.loading = false;
    },
    errorPostGroup: (state) => {
      state.loading = false;
    },
    requestGetGroup: (state) => {
      state.loading = true;
    },
    responseGetGroup: (
      state,
      action: PayloadAction<{
        group_id: string;
        group_url: string;
        group_name: string;
        group_events: any;
      }>
    ) => {
      state.group_id = action.payload.group_id;
      state.group_url = action.payload.group_url;
      state.group_name = action.payload.group_name;
      state.group_events = action.payload.group_events;
      state.loading = false;
    },
    errorGetGroup: (state) => {
      state.loading = false;
    },
  },
});

export default groupSlice.reducer;
