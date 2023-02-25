import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import ProductCardSkeleton from "../../components/ProductCardSkeleton";
import { Product } from "../../interface/Product";
import ProductCard from "./ProductCard";


export default function ProductList() {

    const loading = useSelector((state: any) => state.catalog.loading)
    const products = useSelector((state: any) => state.catalog.products)

    return (

        <Grid container spacing={3}>

            {
                products.map((product: Product) => (
                    <Grid item xs={3} md={3} key={product.id + Math.floor(Math.random() * 90109)}>
                        {
                            loading ? <ProductCardSkeleton /> : <ProductCard product={product} />
                        }
                    </Grid>

                ))
            }
        </Grid>
    )
}
