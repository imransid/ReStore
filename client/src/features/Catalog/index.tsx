import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core"
import { Product } from "../../interface/Product";
import ProductList from "./ProductList";

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
            <ProductList products={products} />
            <Button variant="contained" onClick={() => console.log("click")}>Add Product</Button>
        </>


    )

}


export default App


