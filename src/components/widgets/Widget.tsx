import React from "react";
import { WithStyles, Theme, withStyles, createStyles, Typography, Grid, Paper } from "@material-ui/core";
import { history } from "../../helpers/Helpers";

export const styles = (theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(2),
            fontSize: "16px",
            cursor: "pointer"
        }
    });

interface MyProps {
    clickLink: string;
}    
export type Props = WithStyles & MyProps;

class Widget extends React.Component<Props> {

    public render() {
        return (
            <Paper className={this.props.classes.root} elevation={1} onClick={(e) => this.handleClick()}>
                {this.props.children}
            </Paper>
        );
    }

    private handleClick(): void {
        history.push(this.props.clickLink);
    }
}

export default withStyles(styles)(Widget);