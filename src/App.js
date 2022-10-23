import React from "react";
import Layout from "./common/Layout/Layout";
import ContactDetails from "./components/ContactDetails/ContactDetails";
import ContactList from "./components/ContactList";

const App = () => {
  return (
    <Layout>
      <ContactList />
      <ContactDetails />
    </Layout>
  );
};

export default App;
