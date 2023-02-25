import { useEffect } from "react";
import ProductList from "./ProductList";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getCatalogRequest } from "../../redux-store/actions/catalogActions"
import { RotatingLines } from "react-loader-spinner";
import ProductSearch from "./ProductSearch";
import RadioButtonGroup from "../../components/RadioButtonGroup";
import CheckBoxButtons from "../../components/CheckBoxButtons";
import AppPagination from "../../components/AppPagination";

const App = () => {

    const dispatch = useDispatch();



    // global state

    const brands = useSelector((state: any) => state.catalog.brands)
    const types = useSelector((state: any) => state.catalog.types)
    const requestPayload = useSelector((state: any) => state.catalog.requestPayload)

    //catalog
    useEffect(() => {
        dispatch(getCatalogRequest());

    }, [dispatch])


    // if (loading) return (
    //     <Grid
    //         container
    //         spacing={0}
    //         direction="column"
    //         alignItems="center"
    //         justifyContent="center"
    //         style={{ minHeight: '100vh' }}
    //     >

    //         <Grid item xs={3}>
    //             <RotatingLines
    //                 strokeColor="grey"
    //                 strokeWidth="5"
    //                 animationDuration="0.75"
    //                 width="96"
    //                 visible={loading}
    //             />
    //         </Grid>
    //     </Grid>)


    return (

        <Grid container spacing={4}>
            <Grid item xs={3}>
                <Paper sx={{ mb: 2 }} elevation={3}>
                    <ProductSearch />
                </Paper>
                <Paper
                    sx={{ mb: 2, p: 2 }}
                >
                    <RadioButtonGroup />
                </Paper>

                <Paper
                    sx={{ mb: 2, p: 2 }}
                >

                    <CheckBoxButtons items={types} checked={requestPayload === undefined ? [] : requestPayload.types} onChange={(items: string[]) => {
                        let reqData;

                        if (requestPayload) {
                            reqData = requestPayload;
                            reqData['types'] = items

                        } else {
                            reqData = {
                                types: items
                            }
                        }
                        dispatch(getCatalogRequest(reqData));
                    }} />
                </Paper>
                <Paper sx={{ mb: 2, p: 2 }}>
                    <CheckBoxButtons items={brands} checked={requestPayload === undefined ? [] : requestPayload.brands} onChange={(items: string[]) => {
                        let reqData;

                        if (requestPayload) {
                            reqData = requestPayload;
                            reqData['brands'] = items

                        } else {
                            reqData = {
                                brands: items
                            }
                        }
                        dispatch(getCatalogRequest(reqData));
                    }} />
                </Paper>
            </Grid>
            <Grid item xs={9}>
                <ProductList />
            </Grid>
            <Grid item xs={3} />
            <Grid item xs={9}>
                <AppPagination />
            </Grid>
        </Grid>


    )

}


export default App


