import {
  createStyles, Theme, WithStyles,

  withStyles
} from "@material-ui/core";
import React from "react";
import Table from "../../@rootsher/material-table/src/Table";
import { Query } from "../../@rootsher/material-table/src/types";
import { User } from "../../dto/User";
import { ServiceHolder } from "../../services/ServiceHolder";
import { drawerStore } from "../../store/DrawerStore";
import Navigation from "../Navigation";

export const styles = (theme: Theme) => createStyles({});

export type Props = WithStyles;

class UsersPage extends React.Component<Props> {
  private getQuery(search: string): string {
    if (search) {
      return `${search.includes("@") ? "email" : "username"}='${search}'`;
    }
    return "";
  }

  public render() {
    drawerStore.name = "Users";
    return (
      <div>
        <Navigation>
          <Table
            title="Users"
            dataFetcher={(query: Query) => {
              return ServiceHolder.userService
                .getUsers(query.page+1, query.rowsPerPage, this.getQuery(query.search))
                .then((response: {total: number, data: User[]}) => {
                  return Promise.resolve({ count: response.total, list: response.data });
                });
            }}
            options={{
              search: true,
              pagination: true,
              refresh: 10000,
              sortingMode: "single",
              rowsPerPageOptions: [5, 25, 50],
            }}
            columns={[
              {
                field: "id",
                title: "ID",
              },
              {
                field: "username",
                title: "Username",
              },
              {
                field: "email",
                title: "E-Mail",
              },
            ]}
          />
        </Navigation>
      </div>
    );
  }
}

export default withStyles(styles)(UsersPage);
