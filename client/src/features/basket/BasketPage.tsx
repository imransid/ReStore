import { useEffect, useState } from "react";
import { Basket } from "../../interface/Basket";
import agent from "../../utils/api";

import { RotatingLines } from  'react-loader-spinner'
import { Typography } from "@mui/material";

export default function BasketPage(){
    const [loading, setLoading] = useState(true);
    const [basket, setBasket] = useState<Basket | null>(null);
    useEffect(()=> {
        agent.Basket.get()
        .then((res) => setBasket(res))
        .catch((err) => {
            setLoading(false)
            console.log(err , "Error basket")
        }).finally(() => {
            setLoading(false)
        })
    },[setLoading, setBasket])

    if(loading) return <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
        />
    if(!basket) return <Typography variant="h3">Your Basket Is Empty</Typography>

    return(
        <h1>
            Buyer Id Is : {
                basket.buyerId
            }
        </h1>
    )
}