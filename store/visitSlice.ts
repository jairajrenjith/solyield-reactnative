import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface VisitState {
  checkedInSiteId: string | null; // Tracks if technician is on-site
  isOnline: boolean; // Tracks network status
}

const initialState: VisitState = {
  checkedInSiteId: null,
  isOnline: true,
};

export const visitSlice = createSlice({
  name: "visit",
  initialState,
  reducers: {
    setCheckIn: (state, action: PayloadAction<string | null>) => {
      state.checkedInSiteId = action.payload;
    },
    setOnlineStatus: (state, action: PayloadAction<boolean>) => {
      state.isOnline = action.payload;
    },
  },
});

export const { setCheckIn, setOnlineStatus } = visitSlice.actions;
export default visitSlice.reducer;
