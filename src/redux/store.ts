import { configureStore } from '@reduxjs/toolkit'
import commonSlice from './features/commonSlice'

export const store = configureStore({
  reducer: {
    common: commonSlice
  }
})
