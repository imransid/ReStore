import { useCallback, useEffect, useState } from "react";
import { Basket } from "../../interface/Basket";
import agent from "../../utils/api";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { RotatingLines } from 'react-loader-spinner'
import { Box, Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

export default function BasketPage() {
  const [loading, setLoading] = useState(true);
  const [basket, setBasket] = useState<Basket | null>(null);
  const [status, setStatus] = useState({
    loading: false,
    name: ''
  });
  useEffect(() => {
    agent.Basket.get()
      .then((res) => {
        console.log("res", res?.items)
        setBasket(res)


      })
      .catch((err) => {
        setLoading(false)
        console.log(err, "Error basket")
      }).finally(() => {
        setLoading(false)
      })
  }, [setLoading, setBasket])


  const HandleAddItems = (productId: number) => {
    agent.Basket.addItem(productId, 1)
      .then(basket => {
        console.log("basket i s", basket);
        setBasket(basket)
      })
      .catch((err) => {
        console.log("error in HandleAddItems", err)
      }).finally(() => {
        // loader
      })
  };

  if (loading) return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
    >

      <Grid item xs={3}>
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </Grid>
    </Grid>)

  if (!basket) return <Typography variant="h3">Your Basket Is Empty</Typography>

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="right">Subtotal</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {basket.items.map(item => (
            <TableRow
              key={item.productId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Box display={"flex"} alignItems="center">
                  <img src={item.pictureUrl} alt={item.name} style={{ height: 50, marginRight: 20, width: 70 }} />
                  <span> {item.name} </span>
                </Box>
              </TableCell>
              <TableCell align="right">${(item.price / 100).toFixed(2)}</TableCell>
              <TableCell align="center">
                <IconButton color="error">
                  <RemoveIcon />
                </IconButton>
                {item.quantity}
                <IconButton color="secondary">
                  <AddIcon />
                </IconButton>
              </TableCell>
              <TableCell align="right">{((item.price / 100) * item.quantity).toFixed(2)}</TableCell>
              <TableCell align="right">
                <IconButton color="error">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}