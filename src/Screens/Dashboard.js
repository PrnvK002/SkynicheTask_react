import React from 'react';
import { Container, Grid } from '@mui/material';
import { EmployeeComponent } from '../Components/EmployeeComponent'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Header } from '../Components/Header';

export const Dashboard = () => {
    return (
        <>  
            <Header />
            <Container fixed >
                <Grid container>
                    <Grid item xs={6}>
                        <h3>
                            Employee
                        </h3>
                    </Grid>
                    <Grid item xs={6} style={{ textAlign:'right' }} >
                        <AddCircleOutlineIcon />
                    </Grid> 
                </Grid>

                <Grid container rowSpacing={2} columnSpacing={{ xs: 6,  md: 3 }} >
                    <Grid item >
                        <EmployeeComponent />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
