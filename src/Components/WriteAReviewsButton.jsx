import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export const WriteAreviewButton = () => {
    return(
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '0' }}
        >
            <Box m={3}>
                <Button variant="contained" color="primary">合格体験記を書く</Button>
            </Box>
        </Grid>
    );
}