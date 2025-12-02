import { configureStore } from '@reduxjs/toolkit'
import notesSlice from './notesSlice.js'
import userSlice from './userSlice.js'

 const store = configureStore({
  reducer: {
    notes: notesSlice,
    user: userSlice,
  },
})
export default store;