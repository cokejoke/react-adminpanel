import React from "react";
import Navigation from "./Navigation";
import { StoreHolder } from "../store/StoreHolder";
import { WithStyles, Theme, withStyles, createStyles, Typography, Grid } from "@material-ui/core";
import EnhancedTable from "./SortableTable";

export const styles = (theme: Theme) =>
    createStyles({
    });

export type Props = WithStyles;

class UsersPage extends React.Component<Props> {

    public render() {
        StoreHolder.drawerStore.setName = "Dashboard";
        return (
            <div>
                <Navigation>
                    <EnhancedTable />
                </Navigation>
            </div>
        );
    }
}

export default withStyles(styles)(UsersPage);