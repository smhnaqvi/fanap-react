import React from "react";
import { useHistory, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { useAuth } from ".";

export function AuthButton() {
  const { user, logout } = useAuth();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);

  const handleClick = () => {
    logout();
  };

  const handleMenuItemClick = (value: string) => (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    setOpen(false);
    history.push(value);
  };

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<Document, MouseEvent>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  if (!user) {
    return (
      <Button
        variant="outlined"
        color="primary"
        component={Link}
        to="/login"
        size="small"
        startIcon={<LockOutlinedIcon />}
      >
        ورود
      </Button>
    );
  }

  return (
    <>
      <ButtonGroup
        variant="outlined"
        size="small"
        color="primary"
        ref={anchorRef}
      >
        <Button onClick={handleToggle}>{user.name}</Button>
        <Button size="small" onClick={handleClick}>
          <PowerSettingsNewIcon fontSize="small" />
        </Button>
      </ButtonGroup>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom"
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList>
                  <MenuItem onClick={handleMenuItemClick("/profile")}>
                    مشاهده پروفایل
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}
