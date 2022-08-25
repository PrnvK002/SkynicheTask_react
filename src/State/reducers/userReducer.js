import { createSlice } from '@reduxjs/toolkit';

const credential = {
    email : 'user@gmail.com',
    password : '12345678'
}

const userReducer = createSlice({
    name : 'user',
    initialState : {
        loginStatus : false,
        error: ''
    },
    reducers : {
        signIn : (state,action) => {
            const {email,password} = action.payload;
            if(email=== credential.email && credential.password === password){
                state.loginStatus = true
            }
        }
    }
});

export const {signIn} = userReducer.actions;

export default userReducer.reducer;