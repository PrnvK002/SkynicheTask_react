import React, { useState, useEffect } from 'react';
import { Box, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { useForm } from "react-hook-form";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import { useDispatch,useSelector } from 'react-redux';
import { signIn } from '../State/reducers/userReducer';


export const LoginPage = () => {

    // const [password, setPassword] = useState('');
    // const dispatch= useDispatch()
    // ====================== Form submit section ===================
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // dispatch(signIn(data));
    };



    return (
        <>
            <div style={{ display: 'flex', height: '100vh', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >

                <Box
                    sx={{
                        width: 300,
                        height: 300,
                        boxShadow: 12,
                        padding: 4
                    }}
                >
                    <h2 style={{ fontWeight: 'lighter', marginBottom: '10px' }} >
                        Login
                    </h2>
                    <p style={{ fontWeight: 'lighter', color: 'grey', fontSize: '0.9rem' }} > Signin to your account to continue </p>
                    <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: '1rem' }} >

                        {errors.email && (
                            <p style={{ color: "red", fontSize: "0.8rem" }}>
                                {errors.email.message}
                            </p>
                        )}
                        <div style={{ marginBottom:'1rem' }} >

                            <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type='password'
                                placeholder='company@example.com'
                                style={{ width: '100%' }}
                                {...register("email", {
                                    required: "email must be filled",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "invalid email address",
                                    },
                                })}

                            />
                        </div>

                        {errors.password && (
                            <p style={{ color: "red", fontSize: "0.8rem" }}>
                                {errors.password.message}
                            </p>
                        )}
                        <div style={{ marginBottom:'1rem' }} >

                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type='password'
                                style={{ width: '100%' }}
                                {...register("password", {
                                    required: "password must be filled",
                                    minLength: {
                                        value: 6,
                                        message: "Password must contain atlest 6 characters",
                                    },
                                })}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            edge="end"
                                        >
                                            <Visibility />
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />

                        </div>
                        <div className="submit">
                            <button type="submit" style={{ backgroundColor: "#4D4C7D" , width:'5rem' , height:'2rem' , borderRadius:'1rem' , border:'none' , color : 'white' }}>
                                Sign in
                            </button>
                        </div>
                    </form>
                </Box>
            </div>
        </>
    )
}
