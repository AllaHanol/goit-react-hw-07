
// import ContactForm from './components/ContactForm/ContactForm.jsx';
// import ContactList from './components/ContactList/ContactList.jsx';
// import SearchBox from './components/SearchBox/SearchBox.jsx';
import './App.css';
import { useEffect } from 'react';
import { fetchContacts } from './redux/contactsOps.js';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from './redux/contactsSlice.js';

const App = () => {
  const dispatch = useDispatch();
  
  const { items, loading, error } = useSelector(getContacts);
  
    useEffect(() => {
      dispatch(fetchContacts())
    }, [dispatch]);
    return (
      <>
        <h1>Phonebook</h1>
      {loading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
        
        {/* <ContactForm />
        <SearchBox />
        <ContactList /> */}
        
      </>
    );
  };

export default App;

