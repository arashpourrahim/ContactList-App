import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { ACTIONS } from "../../Store/Actions";
import { ContactData } from "../../Store/ContactProviders";
import Modal from "../ui/Modal";

const AddContact = () => {
  const { dispatch } = useContext(ContactData);

  const [active, setActive] = useState(false);
  const [data, setData] = useState({
    id: "",
    fullName: "",
    email: "",
    number: "",
  });

  const dataHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
      id: Math.floor(Math.random() * 100),
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: ACTIONS.ADD_CONTACT,
      data,
      event: e,
    });
    toast.success("Hoooooora");
    setActive(false);
    setData({
      id: "",
      fullName: "",
      email: "",
      number: "",
    });
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
                name="fullName"
                className="input-primary"
                placeholder="please add fullname . . ."
                value={data.fullName}
                onChange={dataHandler}
              />
            </div>
            <div className="flex flex-col my-2">
              <label className="input-label">Email</label>
              <input
                type="text"
                name="email"
                className="input-primary"
                placeholder="please add email . . ."
                value={data.email}
                onChange={dataHandler}
              />
            </div>
            <div className="flex flex-col my-2">
              <label className="input-label">Number</label>
              <input
                type="text"
                name="number"
                className="input-primary"
                placeholder="please add number . . ."
                value={data.number}
                onChange={dataHandler}
              />
            </div>
            <div className="w-full mt-6 mb-4">
              <button
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg p-2 w-full"
                type="button"
                onClick={submitHandler}
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
