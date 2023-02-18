import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../interface/Product";
import agent from "../../utils/api";
import NotFound from "../notFound";


export default function ProductDetails() {
    const { id } = useParams<{ id: string }>();
    const [products, setProducts] = useState<Product | null>(null);
    const [loader, setLoader] = useState<boolean>(false);

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
            </Grid>

        </Grid>
    )
}