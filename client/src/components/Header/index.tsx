import { AppBar, List, makeStyles, Badge } from "@material-ui/core"
import { useMediaQuery, useTheme } from '@material-ui/core';
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton, ListItem, Typography, Toolbar, Box } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import SignedInMenu from "../SignedInMenu";

type MinHeight = {
    minHeight: number,
};

const useAppBarHeight = () => {
    const {
        mixins: { toolbar },
        breakpoints,
    } = useTheme();
    const toolbarDesktopQuery = breakpoints.up('sm');
    const toolbarLandscapeQuery = `${breakpoints.up('xs')} and (orientation: landscape)`;
    const isDesktop = useMediaQuery(toolbarDesktopQuery);
    const isLandscape = useMediaQuery(toolbarLandscapeQuery);
    let currentToolbarMinHeight;
    if (isDesktop) {
        currentToolbarMinHeight = toolbar[toolbarDesktopQuery];
    } else if (isLandscape) {
        currentToolbarMinHeight = toolbar[toolbarLandscapeQuery];
    } else {
        currentToolbarMinHeight = toolbar;
    }
    return (currentToolbarMinHeight as MinHeight).minHeight;
}

interface Prop {
    name: string;
}

const midLinks = [
    {
        title: 'catalog', path: '/catalog'
    },
    {
        title: 'about', path: '/about'
    },
    {
        title: 'contact', path: '/contact'
    }
]

const rightLinks = [
    {
        title: 'login', path: '/login'
    },
    {
        title: 'register', path: '/register'
    },
]


const useStyles = makeStyles({
    midList: {
        display: 'flex',
    },
    rightList: {
        display: 'flex',
    },
    listItem: {
        color: 'inherit',
    }
});


const navStyle = {
    color: 'inherit',
    typography: 'h6',
    '&:hover': {
        color: 'grey.500'
    },
    '&.active': {
        color: 'text.secondary'
    },
    textDecoration: 'none'
}


const App = ({
    name
}: Prop) => {

    const classes = useStyles();
    const navigate = useNavigate();

    const basket = useSelector((state: any) => state.basket.basket)
    const user = useSelector((state: any) => state.auth.userData)
    const itemCount = useMemo(() => {
        if (basket) {
            let totalItem = basket?.items.reduce((sum: number, item: any) => sum + item?.quantity, 0)
            return totalItem;
        } else {
            return 0;
        }

    }, [basket])

    return (
        <>
            <AppBar>
                <Toolbar sx={{
                    display: 'flex',
                    justifyContent: "space-between", alignItems: 'center'
                }}>
                    <Box display={"flex"} alignItems="center" >
                        <Typography to={"/"} component={NavLink} variant="h6" sx={navStyle}>{name.toUpperCase()}</Typography>
                    </Box>
                    <Box display={"flex"} alignItems="center" >
                        <List className={classes.midList} >
                            {
                                midLinks.map(({ title, path }) => (
                                    <ListItem
                                        sx={navStyle}
                                        key={title}
                                        component={NavLink}
                                        to={path}
                                    >
                                        {title.toUpperCase()}
                                    </ListItem>

                                ))
                            }
                        </List>
                    </Box>
                    <Box display={"flex"} alignItems="center" >
                        <IconButton onClick={() => navigate("/basket")} size="large" sx={{ color: 'inherit' }}>
                            <Badge overlap="rectangular" badgeContent={itemCount} color={"secondary"}>
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                        {
                            user !== null ? <SignedInMenu /> :
                                (
                                    <List className={classes.rightList} >
                                        {
                                            rightLinks.map(({ title, path }) => (
                                                <ListItem
                                                    component={NavLink}
                                                    to={path}
                                                    sx={navStyle}
                                                    key={title}
                                                >
                                                    {title.toUpperCase()}
                                                </ListItem>

                                            ))
                                        }
                                    </List>
                                )
                        }
                    </Box>

                </Toolbar>
            </AppBar>

            <div style={{ height: useAppBarHeight() + 15 }} ></div>
        </>

    )
}

export default App