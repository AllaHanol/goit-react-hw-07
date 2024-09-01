import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";

// import { contactsArr } from "../../redux/contactsSlice";
import { deleteContact } from "../../redux/contactsOps";
import { selectFilter } from "../../redux/contactsSlice";
import { selectFilteredContacts } from "../../redux/contactsSlice";
const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectFilteredContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  if (filteredContacts.length === 0) {
    return;
  }
  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            deleteContacts={(contactId) => {
            dispatch(deleteContact(contactId));
            }}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;
