import {
  List,
  ListItemText,
  ListItem,
  ListItemIcon,
  ListItemAvatar,
  Avatar,
  Box,
  Typography,
} from "@material-ui/core";
import Axios from "axios";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import React from "react";
import config from "../config";
import { AppContext } from "../Context";
import { DeliverynoteDetailsType } from "../utils/Types";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 660,
      backgroundColor: theme.palette.background.paper,
    },
  })
);

export default function DeliverynoteDetails() {
  const { deliveryNote } = React.useContext(AppContext);
  const [details, setDetails] = React.useState<DeliverynoteDetailsType[]>([]);
  const classes = useStyles();

  React.useEffect(() => {
    const fetchData = async () => {
      let resp = await Axios(
        `${config.API_URL}/deliverynote-details?delivery_note=${deliveryNote.id}`
      );
      if (resp.status === 200) setDetails(resp.data);
    };
    fetchData();
  }, [deliveryNote]);

  return (
    <>
      <Box
        px={2}
        style={{ backgroundColor: deliveryNote?.deliverynote_status?.hexcode }}
      >
        <Typography variant="h6">
          {" "}
          {deliveryNote?.deliverynote_status?.status_arname}
        </Typography>
      </Box>
      <Box>
        <br />
      </Box>
      <Typography variant="h4">اذن #: {deliveryNote?.serial}</Typography>
      <Box>
        <br />
      </Box>

      <Box boxShadow={1} className={classes.root}>
        <List>
          {details.map((item) => (
            <ListItem key={item.id}>
              <ListItemAvatar>
                <Avatar alt="" src={item?.product?.cover_img} />
              </ListItemAvatar>
              <ListItemText>{item.product.name}</ListItemText>
              <ListItemText>{item.quantity}</ListItemText>
              <ListItemIcon style={{ marginRight: "2em" }}>
                <MoreVertIcon />
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
}
