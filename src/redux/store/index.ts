import { configureStore } from '@reduxjs/toolkit' 
import { authReducer, setEmail, setName, setPassword, setConfirmPassword, setPhoneNumber } from './slices/authslice'

const store = configureStore({
  reducer: {
    auth: authReducer
  },
})

export { store, setEmail, setName, setPassword, setConfirmPassword, setPhoneNumber }