import React from "react";
import Layout from "./common/Layout/Layout";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

const App = () => {
  return (
    <Layout>
      <AddContact />
      <ContactList />
    </Layout>
  );
};

export default App;
