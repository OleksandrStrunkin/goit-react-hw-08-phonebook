
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactLIst';
import Filter from 'components/Filter/Filter';

import styled from './ContactPage.module.css';

function ContactsPage () {
    return (
        <div className={styled.box}>
          <ContactForm/>
         <div className={styled.boxFilter}>
            <Filter/>
            <ContactList/>
         </div>
        </div>
      );
};

export default ContactsPage;