import React from "react";
import { Divider, ListItem } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

export type ListLoadingProps = {
  rows: number;
};

export function ListLoading({ rows }: ListLoadingProps) {
  return (
    <>
      {new Array(rows).fill(1).map((_, i) => (
        <div key={i}>
          <ListItem>
            <Skeleton animation="wave" />
          </ListItem>
          <Divider variant="fullWidth" component="li" />
        </div>
      ))}
    </>
  );
}
