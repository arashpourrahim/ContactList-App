import { createContext, useEffect, useReducer } from "react";
import { reducer } from "./Reducer";

export const ContactData = createContext();

const initialState = {
  contactInfo: [],
};

const ContactProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(state.contactInfo));
  }, [state.contactInfo]);

//   useEffect(() => {
//     const localData = localStorage.getItem(state.contactInfo);
//     return localData ? JSON.parse(localData) : [];
//   }, [state.contactInfo]);

  return <ContactData.Provider value={value}>{children}</ContactData.Provider>;
};

export default ContactProvider;
