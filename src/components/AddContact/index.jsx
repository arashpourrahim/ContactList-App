import React, { useState } from "react";
import Modal from "../ui/Modal";

const AddContact = () => {
  const [active, setActive] = useState(false);
  const [data, setData] = useState({ fullName: "", email: "", number: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="m-0 p-0">
      <button className="btn-primary" onClick={() => setActive(true)}>
        +
      </button>
      {active && (
        <Modal onClick={() => setActive(false)}>
          <form className="p-2" onSubmit={submitHandler}>
            <div className="flex flex-col my-2">
              <label className="input-label">FullName</label>
              <input
                type="text"
                className="input-primary"
                placeholder="please add fullname . . ."
                value={data.fullName}
                onChange={(e) => setData(...data, e.target.value)}
              />
            </div>
            <div className="flex flex-col my-2">
              <label className="input-label">Email</label>
              <input
                type="text"
                className="input-primary"
                placeholder="please add email . . ."
                value={data.email}
                onChange={(e) => setData(...data, e.target.value)}
              />
            </div>
            <div className="flex flex-col my-2">
              <label className="input-label">Number</label>
              <input
                type="text"
                className="input-primary"
                placeholder="please add number . . ."
                value={data.number}
                onChange={(e) => setData(...data, e.target.value)}
              />
            </div>
            <div className="w-full mt-6 mb-4">
              <button
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg p-2 w-full"
                type="submit"
                onClick={() => setActive(false)}
              >
                Submit
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default AddContact;
