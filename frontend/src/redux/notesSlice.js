import { createSlice } from '@reduxjs/toolkit'

const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    notesData: [],
  },
  reducers: {
    setNotesData: (state, action) => {
        state.notesData = action.payload;
    },
  },
})

export const { setNotesData } = notesSlice.actions;
export default notesSlice.reducer;