
import React from "react";
import { Button, Container, Divider, Paper, Typography } from "@mui/material";



const NotFound = () => {
  return (
    <Container component={Paper} sx={{ height: 20 }}>
      <Typography gutterBottom variant="h4">
        Opps - Not Found!
      </Typography>
      <Divider />
      <Button>GO to Shop</Button>
    </Container>
  )
}

export default NotFound