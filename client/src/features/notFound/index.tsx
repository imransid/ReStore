
import React from "react";
import { Button, Container, Divider, Paper, Typography } from "@mui/material";



const NotFound = () => {
    return (
        <Container component={Paper} >
            <Typography gutterBottom variant="h4">
                Opps - Not Found!
            </Typography>
            <Divider />
            <Button variant="outlined" href="/catalog">GO Back</Button>
        </Container>
    )
}

export default NotFound