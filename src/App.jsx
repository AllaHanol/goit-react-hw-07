
import ContactForm from './components/ContactForm/ContactForm.jsx';
import ContactList from './components/ContactList/ContactList.jsx';
import SearchBox from './components/SearchBox/SearchBox.jsx';
import './App.css';
import { useEffect } from 'react';
import { fetchContacts } from './redux/contactsOps.js';
import { useDispatch } from 'react-redux';


const App = () => {
  const dispatch = useDispatch();
  
  
  
    useEffect(() => {
      dispatch(fetchContacts())
    }, [dispatch]);
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
        
      </>
    );
  };

export default App;

