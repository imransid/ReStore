import { Table, TableContainer, Paper, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { useState } from "react";
import { currencyFormat } from "../../utils";

interface Prop {
    totalSum: number
}


const BasketSummary = (prop: Prop) => {


    const [subTotal, setSubtotal] = useState(0);


    const deliveryFee = 1000;

    return (
        <TableContainer component={Paper} variant={'outlined'}>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell colSpan={2}>Subtotal</TableCell>
                        <TableCell align="right">{currencyFormat(prop.totalSum)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}>Delivery fee*</TableCell>
                        <TableCell align="right">{currencyFormat(deliveryFee)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}>Total</TableCell>
                        <TableCell align="right">{currencyFormat(deliveryFee + prop.totalSum)}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default BasketSummary;

function useSelector(arg0: (state: any) => any) {
    throw new Error("Function not implemented.");
}


function useMemo(arg0: () => any, arg1: any[]) {
    throw new Error("Function not implemented.");
}
