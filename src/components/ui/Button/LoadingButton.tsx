import React, { PropsWithChildren } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button, { ButtonProps as MuiButonProps } from "@material-ui/core/Button";

export interface ButtonProps extends MuiButonProps {
  loading?: boolean;
}

export default React.forwardRef<any, PropsWithChildren<ButtonProps>>(
  (props, ref) => {
    const {
      loading = false,
      startIcon = undefined,
      children,
      ...buttonProps
    } = props;

    const sizes = {
      small: 18,
      medium: 21,
      large: 24
    };
    const Loading = (
      <CircularProgress size={sizes[buttonProps.size ?? "medium"]} />
    );

    return (
      <Button
        variant="outlined"
        {...buttonProps}
        ref={ref}
        startIcon={loading ? Loading : startIcon}
        disabled={loading}
      >
        {children}
      </Button>
    );
  }
);
