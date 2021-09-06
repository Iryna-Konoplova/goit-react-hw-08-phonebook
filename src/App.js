import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar';
import ContactsView from './views/ContactsView';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import Container from './components/Container';
import { authOperations } from './redux/auth';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        <Route path="/todos" component={ContactsView} />
      </Switch>
    </Container>
  );
}

// // Модули
// import { useSelector, useDispatch } from "react-redux";
// import { useEffect } from 'react';

// // Компоненты
// import ContactForm from './components/ContactForm';
// import ContactList from './components/ContactList';
// import Filter from './components/Filter';
// import contactsOperations from './redux/contacts/contacts-operations';
// import Loader from "react-loader-spinner";
// import {isContactLoading } from './redux/contacts/contacts-selectors';

// // Стили
// import styles from './App.module.css';

// const App = () => {
//   const isLoadingContacts = useSelector(isContactLoading);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(contactsOperations.fetchContacts());
//   }, [dispatch]);

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Phonebook</h1>
//       <ContactForm  />
//       <h2 className={styles.subtitle}>Contacts</h2>
//       <Filter />
//        {isLoadingContacts && <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />}
//       <ContactList />
//     </div>
//   );
// }

// export default App;
