import {
  createStyles,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Theme,
} from "@material-ui/core";
import { MoveToInbox, SettingsCell, ExitToApp } from "@material-ui/icons";
import React from "react";
import { Link, useHistory } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawerPaper: {
      width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    sidelink: {
      color: theme.palette.text.primary,
    },
  })
);

export default function CustDrawer() {
  const classes = useStyles();
  let history = useHistory();
  return (
    <Drawer
      style={{ width: drawerWidth, flexShrink: 0 }}
      classes={{ paper: classes.drawerPaper }}
      variant="permanent"
    >
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem component={Link} to="/" className={classes.sidelink}>
          <ListItemIcon>
            <MoveToInbox />{" "}
          </ListItemIcon>
          <ListItemText primary={"اذون الصرف"} />
        </ListItem>

        <ListItem className={classes.sidelink}>
          <ListItemIcon>
            <SettingsCell />{" "}
          </ListItemIcon>
          <ListItemText primary={" الاعدادات"} />
        </ListItem>

        <ListItem
          className={classes.sidelink}
          onClick={() => {
            localStorage.clear();
            history.replace("/");
            window.location.reload(true);
          }}
        >
          <ListItemIcon>
            <ExitToApp />{" "}
          </ListItemIcon>
          <ListItemText primary={" تسجيل الخروج"} />
        </ListItem>
      </List>
    </Drawer>
  );
}
