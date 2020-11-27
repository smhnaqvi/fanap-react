import React from "react";
import { TableCell, TableRow } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

export type TableLoadingProps = {
  rows: number;
  cols: number;
};

export function TableLoading({ rows, cols }: TableLoadingProps) {
  return (
    <>
      {new Array(rows).fill(1).map((_, i) => (
        <TableRow key={i}>
          <TableCell colSpan={cols}>
            <Skeleton animation="wave" />
          </TableCell>
        </TableRow>
      ))}
    </>
  );
}
