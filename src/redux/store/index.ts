import { configureStore } from '@reduxjs/toolkit' 
import { authReducer, setEmail } from './slices/authslice'

const store = configureStore({
  reducer: {
    auth: authReducer
  },
})

export { store, setEmail }