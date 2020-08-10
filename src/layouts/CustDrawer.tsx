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
import { MoveToInbox, SettingsCell } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

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
      </List>
      <List>
        <ListItem className={classes.sidelink}>
          <ListItemIcon>
            <SettingsCell />{" "}
          </ListItemIcon>
          <ListItemText primary={" الاعدادات"} />
        </ListItem>
      </List>
    </Drawer>
  );
}
