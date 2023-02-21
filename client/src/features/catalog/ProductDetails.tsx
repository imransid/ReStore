import LoadingButton from "@mui/lab/LoadingButton";
import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Basket } from "../../interface/Basket";
import { Product } from "../../interface/Product";
import agent from "../../utils/api";
import NotFound from "../notFound";
import { updateBasket } from "../../redux-store/actions/basketActions";

export default function ProductDetails() {
    const dispatch = useDispatch();
    const { id } = useParams<{ id: string }>();
    const [products, setProducts] = useState<Product | null>(null);
    const [loader, setLoader] = useState<boolean>(false);
    const [quantity, setQuantity] = useState(0);
    const [submitting, setSubmitting] = useState(false);

    const basket: Basket = useSelector((state: any) => state.basket.basket);

    const item = basket?.items.find(i => i.productId === products?.id);

    useEffect(() => {
        // declare the data fetching function
        const fetchData = async () => {

            const ID = id !== undefined ? parseInt(id) : 0;

            await agent.Catalog.details(ID)
                .then((res) => setProducts(res))
                .catch((e) => console.log("error in ", e))
                .finally(() => setLoader(false))
        }

        // call the funon
        fetchData()
            // make sure to catch any error
            .catch(console.error);
    }, [id])

    function handleInputChange(event: any) {
        if (event.target.value > 0) {
            setQuantity(parseInt(event.target.value));
        }
    }


    const handleUpdateCart = useCallback(() => {
        setSubmitting(true);

        if (!item || quantity > item.quantity) {
            const updatedQuantity = item ? quantity - item.quantity : quantity;
            agent.Basket.addItem(products?.id!, updatedQuantity)
                .then((basket) => {
                    dispatch(updateBasket(basket))
                })
                .catch((err) => {
                    console.log("Error is ", err);
                    setSubmitting(false);
                })
                .finally(() => {
                    setSubmitting(false);
                });
        } else {
            const updatedQuantity = item.quantity - quantity;
            agent.Basket.removeItem(products?.id!, updatedQuantity)
                .then((basket) => {
                    dispatch(updateBasket(basket))
                })
                .catch((err) => {
                    console.log("Error is ", err);
                    setSubmitting(false);
                })
                .finally(() => {
                    setSubmitting(false);
                });
        }

    }, [setSubmitting, quantity, item, dispatch, products]);

    if (loader) return (<h4>loading</h4>)
    if (!products) return <NotFound />

    return (
        <Grid container spacing={6}>
            <Grid item xs={6}>
                <img src={products.pictureUrl} alt={products.name} style={{ width: '100%' }} />
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h3" >
                    {
                        products.name
                    }
                </Typography>
                <Divider />
                <Typography variant="h4" color={'secondary'} >
                    ${
                        (products.price / 100).toFixed(2)
                    }
                </Typography>
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    Name
                                </TableCell>
                                <TableCell>
                                    {products.name}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    Description
                                </TableCell>
                                <TableCell>
                                    {products.description}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    Type
                                </TableCell>
                                <TableCell>
                                    {products.type}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    Brand
                                </TableCell>
                                <TableCell>
                                    {products.brand}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            onChange={handleInputChange}
                            variant="outlined"
                            type="number"
                            label="Quantity in Cart"
                            fullWidth
                            value={quantity} />
                    </Grid>
                    <Grid item xs={6}>
                        <LoadingButton
                            disabled={item?.quantity === quantity || !item && quantity === 0}
                            loading={submitting}
                            onClick={handleUpdateCart}
                            fullWidth
                            variant="contained"
                            size="large"
                            color="primary"
                            sx={{ height: '55px' }}>
                            {
                                item ? 'Update Quantity' : 'Add to Cart'
                            }
                        </LoadingButton>
                    </Grid>

                </Grid>
            </Grid>


        </Grid>
    )
}