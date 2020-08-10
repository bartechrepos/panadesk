import { CssBaseline } from "@material-ui/core";
import React, { useReducer } from "react";
import App from "./App";
import { DeliveryNoteType, UserType } from "./utils/Types";

const ACTION_TYPES = {
  CHANGE_NOTEBOOK: "CHANGE_NOTEBOOK",
  SET_DELIVERYNOTE: "SET_DELIVERYNOTE",
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
};

const initialState = {
  notebook: {},
  deliveryNote: {} as DeliveryNoteType,
  setDeliveryNote: (deliveryNote: DeliveryNoteType) => {},
  setUserData: (user: UserType | null) => {},
};

const AppContext = React.createContext({ ...initialState });

function appReducer(state: any, action: any) {
  switch (action.type) {
    case ACTION_TYPES.CHANGE_NOTEBOOK:
      let notebook = {
        name: action.payload.name,
        id: action.payload.id,
      };
      return {
        ...state,
        notebook,
      };
    case ACTION_TYPES.SET_DELIVERYNOTE:
      let { deliveryNote } = action;
      return {
        ...state,
        deliveryNote,
      };
    case ACTION_TYPES.LOGIN:
      let { user } = action;
      return {
        ...state,
        user,
      };
    case ACTION_TYPES.LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}

function CustContextProvider(props: any) {
  const [state, dispatch] = useReducer(appReducer, { ...initialState });

  function setNotebook(notebook: any) {
    dispatch({ notebook: notebook, type: ACTION_TYPES.CHANGE_NOTEBOOK });
  }

  function setUserData(user: UserType | null) {
    if (user) localStorage.setItem("UserData", JSON.stringify(user));
    dispatch({ user, type: ACTION_TYPES.LOGIN });
  }

  function setDeliveryNote(deliveryNote: DeliveryNoteType) {
    dispatch({ deliveryNote, type: ACTION_TYPES.SET_DELIVERYNOTE });
  }

  return (
    <React.StrictMode>
      <CssBaseline />
      <AppContext.Provider
        value={{
          notebook: state.notebook,
          deliveryNote: state.deliveryNote,
          user: state.user,
          setUserData,
          setNotebook,
          setDeliveryNote: setDeliveryNote,
        }}
        {...props}
      >
        <App />
      </AppContext.Provider>
    </React.StrictMode>
  );
}

export { AppContext, CustContextProvider };
