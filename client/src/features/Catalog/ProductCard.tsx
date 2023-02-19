import React, { useCallback, useEffect, useState } from "react";
import { Card, Typography, CardActionArea, CardActions, CardContent, CardMedia, CardHeader, Avatar, colors } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import { Product } from "../../interface/Product";
import { Button, } from "@mui/material";
import { Link } from "react-router-dom";
import agent from "../../utils/api";
import LoadingButton from '@mui/lab/LoadingButton';



interface Prop {
    product: Product,
}

const useStyles = makeStyles({
    root: {
        width: '25vw',
        // minHeight: 120,
        backgroundColor: 'red'
    },
    media: {
        height: 150,
        // backgroundSize: 'contain',

    },
});

export default function ProductCard({
    product
}: Prop) {

    const [loading, setLoading] = useState(false)

    const handleSubmit = useCallback(async () => {
        setLoading(true);
        let productId = product.id;
        await agent.Basket.addItem(productId, 1).catch((err) =>{
                console.log("Error", err);
                setLoading(false);
        }).finally(() => {
            setLoading(false);
        })
      }, [product, setLoading]);

    const classes = useStyles();

    return (

        <Card >
            <CardActionArea>
                <CardHeader avatar={
                    <Avatar>
                        {product.name.charAt(0).toUpperCase()}
                    </Avatar>
                } title={product.name}
                    titleTypographyProps={{
                        sx: {
                            fontWeight: 'bold',
                            color: 'secondary.main'
                        }
                    }}
                />
                <CardMedia
                    className={classes.media}
                    image={product.pictureUrl}
                    title={product.name}
                />
                <CardContent>
                    <Typography color="secondary" gutterBottom variant="h5" component="h5">
                        {
                            product.price
                        }
                    </Typography>
                    <Typography variant="body2" color="textSecondary" >
                        {product.brand} / {product.type}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <LoadingButton loading={loading}  onClick={handleSubmit} size="small" color="primary">
                    Add to cart
                </LoadingButton>
                <Button component={Link} to={`/catalog/${product.id}`} size="small" color="primary">
                    View
                </Button>
            </CardActions>
        </Card>

    )
}