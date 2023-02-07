import { Grid } from "@material-ui/core";
import { Product } from "../../interface/Product";
import ProductCard from "./ProductCard";

interface Prop {
    products: Product[],
}



export default function ProductList({
    products
}: Prop) {


    return (

        <Grid container spacing={3}>

            {
                products.map((product) => (
                    <Grid item xs={3} md={3} key={product.id}>
                        <ProductCard product={product} />

                    </Grid>

                ))
            }
        </Grid>
    )
}
