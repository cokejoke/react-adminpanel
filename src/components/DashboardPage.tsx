import React from "react";
import Navigation from "./Navigation";
import { StoreHolder } from "../store/StoreHolder";
import { WithStyles, Theme, withStyles, createStyles, Typography, Grid } from "@material-ui/core";

export const styles = (theme: Theme) =>
    createStyles({
        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(8)
        }
    });

export type Props = WithStyles;

class DashboardPage extends React.Component<Props> {

    public render() {
        StoreHolder.drawerStore.setName = "Dashboard";
        return (
            <div>
                <Navigation />
                <main className={this.props.classes.content}>
                    <div className={this.props.classes.toolbar} />
                    <Grid container>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={8}>
                            <Typography variant="h1">TEST2</Typography>
                        </Grid>
                    </Grid>
                </main>
            </div>
        );
    }
}

export default withStyles(styles)(DashboardPage);