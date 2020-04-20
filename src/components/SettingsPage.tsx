import React from "react";
import Navigation from "./Navigation";
import { WithStyles, Theme, withStyles, createStyles, Typography } from "@material-ui/core";
import { StoreHolder } from "../store/StoreHolder";

const styles = (theme: Theme) =>
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
            padding: theme.spacing(3),
            margin: "0 45px"
        }
    });

type Props = WithStyles;

class SettingsPage extends React.Component<Props> {

    public render() {
        StoreHolder.drawerStore.setName = "Settings";
        return (
            <div>
                <Navigation />
                <main className={this.props.classes.content}>
                    <div className={this.props.classes.toolbar} />
                    <Typography variant="h1">TEST2</Typography>
                </main>
            </div>
        );
    }
}

export default withStyles(styles)(SettingsPage);