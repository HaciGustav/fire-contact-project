import { TextField, Container, Grid, Button } from '@mui/material';
import React from 'react';

const Form = () => {
    return (
        <form>
            <Grid
                container
                direction="column"
                justify="center"
                align="center"
                maxWidth="sm"
                margin="auto"
                spacing={1}
                style={{ backgroundColor: '#aaa' }}>
                <Grid item>
                    <TextField id="standard-basic" label="Standard" />
                </Grid>
                <Grid item>
                    <TextField id="standard-basic" label="Standard" />
                </Grid>
                <Grid item>
                    <TextField id="standard-basic" label="Standard" />
                </Grid>
                <Grid item>
                    <Button variant="outlined" color="primary">
                        Primary
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default Form;
