import React from "react";
import MainLogo from "./RyugakupediaLogoImage.jpeg";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const imgStyle = {
    width: "300px",
    height: "auto"
}

export const RyugakupediaLogo = () =>{
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
                <img style={imgStyle} src={MainLogo} alt="留学ペディアロゴ" />
            </Box>
        </Grid>
        
    );
}