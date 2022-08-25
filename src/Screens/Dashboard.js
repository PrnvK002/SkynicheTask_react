import React from 'react';
import { Container } from '@mui/material';
import { EmployeeComponent } from '../Components/EmployeeComponent'

export const Dashboard = () => {
    return (
        <>
            <Container fixed >
                <h3>
                    Employee    
                </h3>
                <EmployeeComponent />
            </Container>
        </>
    )
}
