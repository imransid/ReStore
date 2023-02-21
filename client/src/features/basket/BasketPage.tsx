import { useCallback, useEffect, useState } from "react";
import { Basket } from "../../interface/Basket";
import agent from "../../utils/api";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { RotatingLines } from 'react-loader-spinner'
import { Box, Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { updateBasket } from "../../redux-store/actions/basketActions";
import { useDispatch, useSelector } from "react-redux";
import BasketSummary from "./BasketSummary";
import { currencyFormat } from "../../utils";
// import {rootState}

export default function BasketPage() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  // global state
  const basket: Basket = useSelector((state: any) => state.basket.basket);

  const totalSum: number = useSelector((state: any) => state.basket.totalSum)


  const HandleAddItems = (productId: number) => {
    setLoading(true);
    agent.Basket.addItem(productId, 1)
      .then(basket => {

        dispatch(updateBasket(basket));
        setLoading(false);
      })
      .catch((err) => {
        console.log("error in HandleAddItems", err)
      }).finally(() => {
        setLoading(false);
        // loader
      })
  };

  const HandleRemoveItems = (productId: number, quantity: number) => {
    setLoading(true);
    agent.Basket.removeItem(productId, quantity)
      .then(basket => {
        console.log("basket i s", basket);
        // setBasket(basket)
        dispatch(updateBasket(basket));
        setLoading(false);
      })
      .catch((err) => {
        console.log("error in HandleAddItems", err)
      }).finally(() => {
        setLoading(false);
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
    <>
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
                  <IconButton onClick={() => HandleRemoveItems(item.productId, 1)} color="error">
                    <RemoveIcon />
                  </IconButton>
                  {item.quantity}
                  <IconButton onClick={() => HandleAddItems(item.productId)} color="secondary">
                    <AddIcon />
                  </IconButton>
                </TableCell>
                <TableCell align="right">{currencyFormat(item.price * item.quantity)}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => HandleRemoveItems(item.productId, item.quantity)} color="error">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Grid container>
        <Grid item xs={6} />
        <Grid item xs={6} >
          <BasketSummary totalSum={totalSum} />
        </Grid>
      </Grid>
    </>
  )
}