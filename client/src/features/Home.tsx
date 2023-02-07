import { Container, CssBaseline } from "@material-ui/core";

import CatalogList from "./catalog"
import Header from "../components/Header";
const App = () => {

    return (

        <>
            <CssBaseline />
            <Header name="Re-Store" />
            <Container>
                <CatalogList />
            </Container>

        </>

    )
}

export default App

