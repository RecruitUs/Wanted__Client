import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
      phoneNumber: '',
    },
    reducers: {
      setEmail: (state, action) => {
        state.email = action.payload;
      },
      setName: (state, action) => {
        state.userName = action.payload;
      },
      setPassword: (state, action) => {
        state.password = action.payload;
      },
      setConfirmPassword: (state, action) => {
        state.confirmPassword = action.payload;
      },
      setPhoneNumber: (state, action) => {
        state.phoneNumber = action.payload;
      }
    }

})

export const { setEmail, setName, setPassword, setConfirmPassword, setPhoneNumber } = authSlice.actions;
export const authReducer = authSlice.reducer;