import React from "react";

const PeopleCard = ({ people }) => {
  return (
    <div>
      <h3 className="peopleName">{people.fullName}</h3>
      <p className="peopleInfo">{people.email}</p>
      <p className="peopleInfo">{people.number}</p>
    </div>
  );
};

export default PeopleCard;
