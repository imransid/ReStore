import { AppBar, Toolbar, Typography } from "@material-ui/core"

import { useMediaQuery, useTheme } from '@material-ui/core';

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




const App = ({
    name
}: Prop) => {




    return (
        <>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6">{name}</Typography>
                </Toolbar>
            </AppBar>

            <div style={{ height: useAppBarHeight() + 5 }} ></div>
        </>

    )
}

export default App