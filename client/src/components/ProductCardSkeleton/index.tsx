import { Card, CardActions, CardContent, CardHeader, Grid, Skeleton } from "@mui/material"

const ProductCardSkeleton = () => {
    return (
        <Grid item xs component={Card}>
            <CardHeader
                avatar={
                    <Skeleton animation="wave"
                        variant="circular"
                        width={40}
                        height={40}
                    />
                }
                title={
                    <Skeleton animation="wave"
                        width={"80%"}
                        height={10}
                        style={{ marginBottom: 6 }}
                    />
                }
            />
            <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
            <CardContent>
                <>
                    <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                    <Skeleton height={10} animation="wave" width={"80%"} />
                </>
            </CardContent>
            <CardActions>
                <Skeleton height={10} animation="wave" width={"40%"} />
                <Skeleton height={10} animation="wave" width={"20%"} />
            </CardActions>
        </Grid>
    )
}

export default ProductCardSkeleton