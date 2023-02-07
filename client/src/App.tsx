
import { AuthState } from "./redux-store/reducers";
import { useSelector } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/brown';
import green from '@material-ui/core/colors/green';
import { Container, CssBaseline } from "@material-ui/core";
import CatalogList from "./features/catalog"
import Header from "./components/Header";
import About from "./features/about/AboutPage"
import Home from "./features/home/HomePage"
import ProductDetails from "./features/catalog/ProductDetails";
import ContactPage from "./features/contact/ContactPage";


const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
    background: {
      default: '#eaeaea'
    }
  },
});


function App() {
  const navigate = useNavigate();

  const pending = useSelector((state: AuthState) => state.auth.pending);

  return (
    <>
      <CssBaseline />
      <Header name="Re-Store" />
      <Container>
        <Content />
      </Container>
    </>
  );
}

const Content = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route element={<CatalogList />} path="/catalog"></Route>
        <Route element={<ProductDetails />} path="/catalog/:id"></Route>
        <Route element={<ContactPage />} path="/contact"></Route>
        <Route element={<About />} path="/about"></Route>
        <Route element={<Home />} path="/"></Route>
      </Routes>
    </ThemeProvider>
  );
};



export default App;
