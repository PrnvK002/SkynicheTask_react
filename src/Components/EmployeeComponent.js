import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import { Grid, Card, CardHeader, CardContent, CardActions, IconButton, Chip, Avatar } from '@mui/material';


export const EmployeeComponent = () => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }} style={{ padding:'1rem' }} >
        <div style={{ textAlign:'right' }} >
          <button style={{ background: '#0a1a54', border: 'none', color: 'white', borderRadius: '4px' }} >#EMP0001</button>
        </div>

        <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
          <Avatar
            sx={{ bgcolor: 'orange' }}
            alt="Remy Sharp"
            src="/broken-image.jpg"
          />

          <p style={{ textAlign: 'center' }}>
            Shibhu Bhai <br />
            <span style={{ fontWeight: 'lighter', color: 'grey',fontSize: '0.9rem' }} >
              Shibhubhai@gmail.com
            </span>
          </p>
        </CardContent>
        <CardActions style={{ display: 'flex', justifyContent: 'space-around' }} >
          <IconButton aria-label="share">
            <EditIcon />
          </IconButton>
          <IconButton aria-label="share">
            <RemoveRedEyeIcon />
          </IconButton>
          <IconButton aria-label="add to favorites">
            <DeleteIcon />
          </IconButton>
        </CardActions>
        <CardContent>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
              <p style={{ textAlign: 'center' }}>
                Android <br />
                <span style={{ fontWeight: 'lighter', color: 'grey', fontSize: '0.8rem' }} >
                  Department
                </span>
              </p>
            </Grid>
            <Grid item xs={6}>
              <p style={{ textAlign: 'center' }}>
                Android <br />
                <span style={{ fontWeight: 'lighter', color: 'grey', fontSize: '0.8rem' }} >
                  Department
                </span>
              </p>
            </Grid>
            <Grid item xs={6}>
              <p style={{ textAlign: 'center' }}>
                Android <br />
                <span style={{ fontWeight: 'lighter', color: 'grey', fontSize: '0.8rem' }} >
                  Department
                </span>
              </p>
            </Grid>
            <Grid item xs={6}>
              <p style={{ textAlign: 'center' }}>
                Android <br />
                <span style={{ fontWeight: 'lighter', color: 'grey', fontSize: '0.8rem' }} >
                  Department
                </span>
              </p>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}
