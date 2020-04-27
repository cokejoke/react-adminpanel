import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { observer } from "mobx-react";
import React from "react";
import { alertStore } from "../store/AlertStore";

@observer
export default class CustomAlert extends React.Component {

    private handleClose(event?: React.SyntheticEvent, reason?: string) {
        alertStore.open = false;
    }

    render() {
        return (
            <Snackbar anchorOrigin={{vertical: "top", horizontal: "right"}} open={alertStore.open} autoHideDuration={4000} onClose={this.handleClose}>
                <Alert variant="filled" severity={alertStore.type}>
                    {alertStore.message}
                </Alert>
            </Snackbar>
        );
    }

}