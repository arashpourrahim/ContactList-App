import React, { useContext } from "react";
import user from "../../../src/assets/icons/user.png";
import view from "../../../src/assets/icons/view.png";
import deleteI from "../../../src/assets/icons/delete.png";
import { ContactData } from "../../Store/ContactProviders";
import { ACTIONS } from "../../Store/Actions";

const PeopleCard = ({ people }) => {
  const { dispatch } = useContext(ContactData);

  const onDelete = (id) => {
    dispatch({ type: ACTIONS.DELETE_CONTACT, id });
  };
  return (
    <div className="flex items-center">
      <div className="mx-2">
        <img src={user} alt="profile" width="45" height="45" />
      </div>
      <div>
        <h3 className="peopleName">{people.fullName}</h3>
        <p className="peopleInfo">{people.email}</p>
        <p className="peopleInfo">{people.number}</p>
      </div>
      <div className="flex ml-auto">
        <div className="m-1 cursor-pointer">
          <img src={view} alt="view" width="18" height="18" />
        </div>
        <div className="m-1 cursor-pointer" onClick={() => onDelete(people.id)}>
          <img src={deleteI} alt="delete" width="18" height="18" />
        </div>
      </div>
    </div>
  );
};

export default PeopleCard;
