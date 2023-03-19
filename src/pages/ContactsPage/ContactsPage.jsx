
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactLIst';
import Filter from 'components/Filter/Filter';



function ContactsPage () {
    return (
        <>
          <ContactForm/>
          <Filter/>
          <ContactList/>
        </>
      );
};

export default ContactsPage;