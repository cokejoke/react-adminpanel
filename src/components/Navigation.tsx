import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LightIcon from '@material-ui/icons/WbSunny';
import DarkIcon from '@material-ui/icons/NightsStay';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SettingIcon from '@material-ui/icons/Settings';
import DashboardIcon from '@material-ui/icons/Dashboard';
import UsersIcon from '@material-ui/icons/Group';
import LogOutIcon from '@material-ui/icons/ExitToApp';
import clsx from 'clsx';
import { AlertService } from '../services/AlertService';
import { WithStyles, withStyles, Theme, createStyles, useMediaQuery, Grid } from '@material-ui/core';
import { observer } from 'mobx-react';
import { StoreHolder } from '../store/StoreHolder';
import { history } from '../helpers/Helpers';
import { ThemeType } from '../store/ThemeStore';

export const drawerWidth = 240;

export const styles = (theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: 36,
        },
        hide: {
            display: 'none',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
        },
        drawerOpen: {
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerClose: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: theme.spacing(7) + 1,
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9) + 1,
            },
        },
        toolbar: {
            display: 'flex',
            width: "100% !important",
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        listItem: {
            paddingLeft: "24px",
            [theme.breakpoints.down('xs')]: {
                paddingLeft: "16px",
            },
        },
        themeToggle: {
            marginLeft: "auto"
        }
    });

export type Props = WithStyles;

@observer
class Navigation extends React.Component<Props> {

    private handleDrawerOpen(): void {
        StoreHolder.drawerStore.setOpen = true;
    }

    private handleDrawerClose(): void {
        StoreHolder.drawerStore.setOpen = false;
    }

    private toggleTheme(): void {
        let theme: ThemeType = StoreHolder.themeStore.getType === "light" ? "dark" : "light";
        localStorage.setItem("theme", theme);
        StoreHolder.themeStore.setType = theme;
    }

    private isOpen(): boolean {
        return StoreHolder.drawerStore.isOpen;
    }

    render() {
        return (
            <div className={this.props.classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={clsx(this.props.classes.appBar, {
                        [this.props.classes.appBarShift]: this.isOpen(),
                    })}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.handleDrawerOpen}
                            edge="start"
                            className={clsx(this.props.classes.menuButton, {
                                [this.props.classes.hide]: this.isOpen(),
                            })}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            {StoreHolder.drawerStore.getName}
                        </Typography>
                        <IconButton
                            color="inherit"
                            onClick={this.toggleTheme}
                            className={this.props.classes.themeToggle}
                        >
                            {StoreHolder.themeStore.getType === "light" && localStorage.getItem("theme") === "light" ? <LightIcon /> : <DarkIcon />}
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    className={clsx(this.props.classes.drawer, {
                        [this.props.classes.drawerOpen]: this.isOpen(),
                        [this.props.classes.drawerClose]: !this.isOpen(),
                    })}
                    classes={{
                        paper: clsx({
                            [this.props.classes.drawerOpen]: this.isOpen(),
                            [this.props.classes.drawerClose]: !this.isOpen(),
                        }),
                    }}
                >
                    <div className={this.props.classes.toolbar}>
                        <IconButton onClick={this.handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        <ListItem className={this.props.classes.listItem} onClick={e => this.changePage("/dashboard")} button key="Dashboard">
                            <ListItemIcon><DashboardIcon /></ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItem>
                        <ListItem className={this.props.classes.listItem} onClick={e => this.changePage("/users")} button key="Users">
                            <ListItemIcon><UsersIcon /></ListItemIcon>
                            <ListItemText primary="Users" />
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem className={this.props.classes.listItem} onClick={e => this.changePage("/settings")} button key="Settings">
                            <ListItemIcon><SettingIcon /></ListItemIcon>
                            <ListItemText primary="Settings" />
                        </ListItem>
                        <ListItem className={this.props.classes.listItem} onClick={e => this.logOut()} button key="Log Out">
                            <ListItemIcon><LogOutIcon /></ListItemIcon>
                            <ListItemText primary="Log Out" />
                        </ListItem>
                    </List>
                </Drawer>
                <main className={this.props.classes.content}>
                    <div className={this.props.classes.toolbar} />
                    <Grid container>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={8}>
                            {this.props.children}
                        </Grid>
                    </Grid>
                </main>
            </div>
        );
    }

    private changePage(url: string): void {
        history.push(url);
    }

    private logOut(): void {
        StoreHolder.drawerStore.setOpen = false;
        localStorage.removeItem("user");
        history.push("/login");
        AlertService.create("success", "You've been logged out!");
    }
}

export default withStyles(styles)(Navigation);