import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import DeliveryNotes from "./pages/DeliveryNotes";

import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { blue, teal } from "@material-ui/core/colors";

const theme = createMuiTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: teal[200],
      contrastText: "#fff",
    },
    secondary: {
      main: blue[500],
      contrastText: "#fff",
    },
    error: {
      main: "#f50057",
    },
    text: {
      primary: teal[800],
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <MainLayout>
            <Route exact path="/" component={DeliveryNotes} />
          </MainLayout>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
