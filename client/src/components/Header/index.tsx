import { AppBar, List, makeStyles, Badge } from "@material-ui/core"
import { useMediaQuery, useTheme } from '@material-ui/core';
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton, ListItem, Typography, Toolbar, Box } from '@mui/material';

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
                        <IconButton size="large" sx={{ color: 'inherit' }}>
                            <Badge badgeContent={4} color={"secondary"}>
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                        <List className={classes.rightList} >
                            {
                                rightLinks.map(({ title, path }) => (
                                    <ListItem
                                        component={NavLink}
                                        to={path}
                                        sx={navStyle}
                                    >
                                        {title.toUpperCase()}
                                    </ListItem>

                                ))
                            }
                        </List>
                    </Box>

                </Toolbar>
            </AppBar>

            <div style={{ height: useAppBarHeight() + 15 }} ></div>
        </>

    )
}

export default App