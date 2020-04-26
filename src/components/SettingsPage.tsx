import React from "react";
import Navigation from "./Navigation";
import {
  WithStyles,
  Theme,
  withStyles,
  createStyles,
  Typography,
} from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import SettingsStore from "../store/SettingsStore";
import { observer } from "mobx-react";
import { StoreHolder } from "../store/StoreHolder";

const styles = (theme: Theme) =>
  createStyles({
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      margin: "0 45px",
    },
  });

type Props = WithStyles;
@observer
class SettingsPage extends React.Component<Props> {
  private settingsStore: SettingsStore = new SettingsStore();

  componentDidMount() {
    StoreHolder.drawerStore.setName = "Settings";
  }

  public render() {
    const handleChange = (panel: string) => (
      event: React.ChangeEvent<{}>,
      isExpanded: boolean
    ) => {
      this.settingsStore.expansionExpanded = isExpanded ? panel : false;
      //setExpanded(isExpanded ? panel : false);
    };
    return (
      <div>
        <Navigation>
          <main className={this.props.classes.content}>
            <ExpansionPanel
              expanded={this.settingsStore.expansionExpanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography>Theme Settings</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>Change Color</Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </main>
        </Navigation>
      </div>
    );
  }
}

export default withStyles(styles)(SettingsPage);
