import { AppBar, CssBaseline, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import CustDrawer from "./CustDrawer";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

interface Props extends RouteComponentProps {
  children: any;
}

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginRight: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
      padding: theme.spacing(3),
    },
  })
);

function MainLayout(props: Props) {
  const classes = useStyles();
  const {
    children,
    location: { pathname },
  } = props;
  return (
    <div style={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            {pathname === "/" && "الرئيسية"}
          </Typography>
        </Toolbar>
      </AppBar>
      <CustDrawer />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}

export default withRouter(MainLayout);
