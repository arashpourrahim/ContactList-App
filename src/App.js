import React from "react";
import Layout from "./common/Layout/Layout";
import ContactDetails from "./components/ContactDetails/ContactDetails";
import ContactList from "./components/ContactList";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <Layout>
      <ContactList />
      <ContactDetails />
      <ToastContainer />
    </Layout>
  );
};

export default App;
