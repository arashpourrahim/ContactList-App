import React, { useContext } from "react";
import { ContactData } from "../../Store/ContactProviders";
import PeopleCard from "../PeopleCard/PeopleCard";

const ContactList = () => {
  const { state } = useContext(ContactData);
  const { contactInfo } = state;

    // useEffect(() => {
    //   const localData = localStorage.getItem(state.contactInfo);
    //   return localData ? JSON.parse(localData) : [];
    // }, [state.contactInfo]);

  return (
    <article className="p-2 w-3/12 border-r-2 border-gray-200 h-[100vh]">
      {contactInfo.length === 0 ? (
        <p className="input-label">please add contact . . .</p>
      ) : (
        contactInfo.map((people) => {
          return (
            <div key={people.number}>
              <PeopleCard people={people} />
            </div>
          );
        })
      )}
    </article>
  );
};

export default ContactList;
