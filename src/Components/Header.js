import { Avatar, Breadcrumbs, Chip, Typography } from '@mui/material'
import React from 'react'

export const Header = () => {
    return (
        <>
            <div style={{ display:'flex' , justifyContent: 'space-between' , height:'4vh' , alignItems:'center',padding:'1rem' }} >
                <Chip avatar={<Avatar>M</Avatar>} variant="outlined" label='Mr.x@gmail.com' />
                <Breadcrumbs separator="›" aria-label="breadcrumb" style={{ fontSize:'14px' }} >
                    <Typography color="text.primary">Dashboard</Typography>
                    <p underline="hover" color="inherit">
                        Staff
                    </p>
                    <p
                        underline="hover"
                        color="inherit"
                    >
                        Employee
                    </p>
                </Breadcrumbs>
            </div>

        </>
    )
}
