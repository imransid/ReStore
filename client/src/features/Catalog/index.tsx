import React, { useEffect, useState } from "react";
import { Menu, DatePicker, Space, version } from "antd";
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Button } from "@material-ui/core"
import { Col, Row, Form, Input, Image, Radio } from 'antd';
import { Typography } from 'antd';
import { Product } from "../../interface/Product";
import ProductList from "./ProductList";
const { Title } = Typography;

interface Prop {
    products: Product[],
    addProduct: void
}

const App = ({
    products,
    addProduct
}: Prop) => {

    return (
        <>
            <ProductList products={products} />
            <Button variant="contained" onClick={() => console.log("click")}>Add Product</Button>
        </>


    )

}


export default App


