import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { DeliveryNoteType } from "../utils/Types";
import config from "../config";
import Axios from "axios";
import { Box, Typography } from "@material-ui/core";
import moment from "moment";
import MoreVertIcon from "@material-ui/icons/MoreVert";
//@ts-ignore
import ar from "moment/locale/ar";
import { AppContext } from "../Context";
import { useHistory } from "react-router-dom";
moment.locale("ar", ar);

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tablehead: {
    fontSize: "1.2em",
    fontWeight: "bold",
  },
  tablecell: {
    fontSize: "1.1em",
  },
});

export default function DeliveryNotes() {
  const classes = useStyles();
  const { setDeliveryNote: setAppstateDeliveryNote } = React.useContext(
    AppContext
  );
  const history = useHistory();

  const [deliveryNotes, setDeliveryNotes] = React.useState<DeliveryNoteType[]>(
    []
  );

  const userData = localStorage.getItem("UserData");

  React.useEffect(() => {
    // Check for user first

    if (!userData) {
      history.replace("/login");
    }

    const fetchData = async () => {
      let resp = await Axios(`${config.API_URL}/delivery-notes`);
      if (resp.status === 200) setDeliveryNotes(resp.data);
    };
    fetchData();
  }, []);

  if (userData)
    return (
      <>
        <Box m={2}>
          <Typography variant="h3" align="center">
            {" "}
            اذون الصرف
          </Typography>
        </Box>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.tablehead}>رقم الاذن</TableCell>
                <TableCell className={classes.tablehead}>
                  تاريخ الانشاء
                </TableCell>
                <TableCell className={classes.tablehead}>الحالة</TableCell>
                <TableCell className={classes.tablehead}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {deliveryNotes.map((note: DeliveryNoteType) => (
                <TableRow
                  onClick={() => {
                    setAppstateDeliveryNote(note);
                    history.push("/dn_details");
                  }}
                  key={note.id}
                  style={{
                    backgroundColor: note?.deliverynote_status?.hexcode + "",
                  }}
                >
                  <TableCell
                    className={classes.tablecell}
                    component="th"
                    scope="row"
                  >
                    {note.serial}
                  </TableCell>
                  <TableCell className={classes.tablecell}>
                    {moment(note.created_at as string).format(
                      "Do MMMM YYYY, h:mm a"
                    )}
                  </TableCell>
                  <TableCell className={classes.tablecell}>
                    {note.deliverynote_status.status_arname}
                  </TableCell>
                  <TableCell className={classes.tablecell}>
                    <MoreVertIcon />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  return <></>;
}
