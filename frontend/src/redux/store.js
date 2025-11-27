import { configureStore } from '@reduxjs/toolkit'
import notesSlice from './notesSlice.js'

 const store = configureStore({
  reducer: {
    notes: notesSlice,
  },
})
export default store;