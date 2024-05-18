import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChronosStructure, ChronosStateStructure } from "./types";

const initialChronosSlice: ChronosStateStructure = {
  habilities: [],
};

const chronosSlice = createSlice({
  name: "habilities",
  initialState: initialChronosSlice,
  reducers: {
    loadHabilities: (
      currentState,
      action: PayloadAction<ChronosStructure[]>,
    ): ChronosStateStructure => ({
      ...currentState,
      habilities: action.payload,
    }),
  },
});

export const { loadHabilities: loadHabilitiesActionCreator } =
  chronosSlice.actions;
export const chronosReducer = chronosSlice.reducer;
