import React from "react";
import { Alert } from "@material-ui/lab";
import { Snackbar } from "@material-ui/core";
import AlertStore from "../store/AlertStore";
import { observer } from "mobx-react";
import { StoreHolder } from "../store/StoreHolder";

@observer
export default class CustomAlert extends React.Component {

    private handleClose(event?: React.SyntheticEvent, reason?: string) {
        /*if (reason === 'clickaway') {
            return;
        }*/
        StoreHolder.alertStore.setOpen = false;
    }

    render() {
        return (
            <Snackbar anchorOrigin={{vertical: "top", horizontal: "right"}} open={StoreHolder.alertStore.isOpen} autoHideDuration={4000} onClose={this.handleClose}>
                <Alert variant="filled" severity={StoreHolder.alertStore.getType}>
                    {StoreHolder.alertStore.getMessage}
                </Alert>
            </Snackbar>
        );
    }

}