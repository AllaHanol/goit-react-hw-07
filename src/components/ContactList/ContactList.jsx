import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";

// import { contactsArr } from "../../redux/contactsSlice";
import { deleteContact } from "../../redux/contactsOps";
// import { selectFilter } from "../../redux/contactsSlice";
import { selectFilteredContacts } from "../../redux/contactsSlice";
const ContactList = () => {
  const dispatch = useDispatch();

  // const contacts = useSelector(selectFilteredContacts);
  // const filter = useSelector(selectFilter);

  // const filteredContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );
  const filteredContacts = useSelector(selectFilteredContacts);
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


// Завдання вирішено неправильно (компонент ContactList Component)
//  Завдання не прийнято.
// Основні спостереження:
// Імпорт селектора selectFilteredContacts виконано правильно.
// Метод useSelector() правильно використовується з selectFilteredContacts.
// Аналіз критичного питання:
//  Наявність методу filter у компоненті є критичною помилкою. 
// Селектор selectFilteredContacts повинен обробляти логіку фільтрації, і компонент не повинен виконувати додаткову фільтрацію.
// Метод filter прямо суперечить вимозі про те, що методу filler(припустимо, це помилка друку і малося на увазі filter) 
// має бути відсутній.