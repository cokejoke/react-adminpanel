import React from "react";
import Navigation from "./Navigation";
import { StoreHolder } from "../store/StoreHolder";
import { WithStyles, Theme, withStyles, createStyles, Typography, Grid } from "@material-ui/core";

export const styles = (theme: Theme) =>
    createStyles({
    });

export type Props = WithStyles;

class DashboardPage extends React.Component<Props> {

    public render() {
        StoreHolder.drawerStore.setName = "Dashboard";
        return (
            <div>
                <Navigation>
                    <Typography variant="h1">TEST2</Typography>
                </Navigation>
            </div>
        );
    }
}

export default withStyles(styles)(DashboardPage);