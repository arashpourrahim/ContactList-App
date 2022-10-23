import React from "react";
import AddContact from "../../components/AddContact";

const Header = () => {
  return (
    <header className="flex flex-row justify-between px-4 py-1 border-b-2 border-gray-200 align-middle items-center m-0">
      <div>Contact App</div>
      <div>
        <AddContact />
      </div>
    </header>
  );
};

export default Header;
