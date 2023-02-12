import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core"
import { Product } from "../../interface/Product";
import ProductList from "./ProductList";
import agent from "../../utils/api";

const App = () => {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await agent.Catalog.list()
                .then((products) => products);
            setProducts(data);
        }

        fetchData()
            // make sure to catch any error
            .catch(console.error);
    }, [setProducts])

    return (
        <>
            <ProductList products={products} />
            <Button variant="contained" onClick={() => console.log("click")}>Add Product</Button>
        </>


    )

}


export default App


