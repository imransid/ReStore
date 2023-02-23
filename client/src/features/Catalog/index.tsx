import { useEffect, memo } from "react";
import ProductList from "./ProductList";
import { FormControlLabel, Radio, FormControl, Grid, Paper, RadioGroup, TextField, FormGroup, Checkbox } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getCatalogRequest } from "../../redux-store/actions/catalogActions"
import { RotatingLines } from "react-loader-spinner";
import { sortOption } from "../../interface/Catalog";
import ProductSearch from "./ProductSearch";



const App = () => {

    const dispatch = useDispatch();



    // global state
    const loading = useSelector((state: any) => state.catalog.loading)
    const brands = useSelector((state: any) => state.catalog.brands)
    const types = useSelector((state: any) => state.catalog.types)
    const products = useSelector((state: any) => state.catalog.products)
    const sortOptions = useSelector((state: any) => state.catalog.sortOptions)
    const appState = useSelector((state: any) => state.catalog.appState)


    useEffect(() => {
        // if (loading && appState === 'initial') {
        console.log("hited");
        dispatch(getCatalogRequest());
        //}
    }, [])






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
                    visible={loading}
                />
            </Grid>
        </Grid>)


    return (

        <Grid container spacing={4}>
            <Grid item xs={3}>
                <Paper sx={{ mb: 2 }} elevation={3}>
                    <ProductSearch />
                </Paper>
                <Paper
                    sx={{ mb: 2, p: 2 }}
                >
                    <FormControl>
                        <RadioGroup>
                            {
                                sortOptions.map((item: sortOption, key: number) => <FormControlLabel key={key} value={item.value} control={<Radio sx={{ mr: 1 }} />} label={item.label} />)
                            }
                        </RadioGroup>
                    </FormControl>
                </Paper>
                <Paper
                    sx={{ mb: 2, p: 2 }}
                >
                    <FormControl>
                        <RadioGroup>
                            {
                                types.map((type: string, key: number) => <FormControlLabel key={key} value={type} control={<Radio sx={{ mr: 1 }} />} label={type} />)
                            }
                        </RadioGroup>
                    </FormControl>
                </Paper>
                <Paper sx={{ mb: 2, p: 2 }}>
                    <FormGroup>
                        {
                            brands.map((brand: string, key: number) =>
                                <FormControlLabel key={key} control={<Checkbox sx={{ mr: 1 }} />} label={brand} />
                            )
                        }
                    </FormGroup>
                </Paper>
            </Grid>
            <Grid item xs={9}>
                <ProductList products={products} />
            </Grid>


        </Grid>


    )

}


export default App


