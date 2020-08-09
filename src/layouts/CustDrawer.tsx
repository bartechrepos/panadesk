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
import { MoveToInbox } from "@material-ui/icons";
import React from "react";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawerPaper: {
      width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
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
        <ListItem button>
          <ListItemIcon>
            <MoveToInbox />{" "}
          </ListItemIcon>
          <ListItemText primary={"اذون الصرف"} />
        </ListItem>
      </List>
    </Drawer>
  );
}
