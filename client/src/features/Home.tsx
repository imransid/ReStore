import React, { useEffect, useState } from "react";
import { Container, CssBaseline } from "@material-ui/core";

import CatalogList from "./Catalog"
import { Product } from "../interface/Product";
import Header from "../components/Header";





const App = () => {


    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        // declare the data fetching function
        const fetchData = async () => {
            const data = await fetch('http://localhost:9483/api/Products').then((e) => e.json()).catch((e) => null);
            setProducts(data);
        }

        // call the function
        fetchData()
            // make sure to catch any error
            .catch(console.error);
    }, [setProducts])
    return (

        <>
            <CssBaseline />
            <Header name="Re-Store" />
            <Container>
                <CatalogList products={products} addProduct={console.log('ok')} />
            </Container>

        </>

    )
}

export default App

