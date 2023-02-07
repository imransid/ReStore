import React, { useEffect, useState } from "react";
import { Card, Typography, Button, CardActionArea, CardActions, CardContent, CardMedia, CardHeader, Avatar } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import { Product } from "../../interface/Product";

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

    const classes = useStyles();

    return (

        <Card >
            <CardActionArea>
                <CardHeader avatar={
                    <Avatar>
                        {product.name.charAt(0).toUpperCase()}
                    </Avatar>
                } title={product.name} />
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
                <Button size="small" color="primary">
                    Add to cart
                </Button>
                <Button size="small" color="primary">
                    View
                </Button>
            </CardActions>
        </Card>

    )
}