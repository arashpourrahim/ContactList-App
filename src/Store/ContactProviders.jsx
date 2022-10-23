import { createContext, useReducer } from "react";
import { reducer } from "./Reducer";

export const ContactData = createContext();

const initialState = {
  contactInfo: [],
};

const ContactProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <ContactData.Provider value={value}>{children}</ContactData.Provider>;
};

export default ContactProvider;
