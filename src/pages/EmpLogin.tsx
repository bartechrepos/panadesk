import { Box, Button, InputAdornment, TextField } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import Axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
import config from "../config";
import { AppContext } from "../Context";
import { UserType } from "../utils/Types";

export default function EmpLogin() {
  const { setUserData } = React.useContext(AppContext);
  const history = useHistory();
  const [empSerial, setEmpSerial] = React.useState("");
  return (
    <Box style={{ display: "flex", justifyContent: "center" }} m={2}>
      <TextField
        onChange={(ev) => {
          setEmpSerial(ev.target.value);
        }}
        label="ادخال كود الموظف"
        value={empSerial}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
      <Box m={2}>
        <Button
          variant="contained"
          onClick={async () => {
            let resp = await Axios(
              `${config.API_URL}/employees?serial=${empSerial}`
            );
            if (resp.status === 200 && (resp.data as UserType[]).length) {
              let [respUser] = resp.data as UserType[];
              if (respUser.user_type.step > 1) {
                setUserData(respUser);
                history.push("/");
              } else {
                alert("ليس من صلاحياتك الدخول لبرنامج ادارة الاذون");
              }
            }
          }}
        >
          التالي
        </Button>
      </Box>
    </Box>
  );
}
