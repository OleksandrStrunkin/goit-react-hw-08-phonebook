import styled from './ContactList.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';


import { getFilteredContacts} from 'redux/contacts/contacts-selectors';
import { fetchContacts, fetchDeleteContacts } from 'redux/contacts/contacts-operation';

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getFilteredContacts);
    

    useEffect(() => {
        dispatch(fetchContacts())
        
    }, [dispatch])
    
    const onDeleteContact = id => {
      dispatch(fetchDeleteContacts(id));
    };
     return (
         <ul className={styled.contactList}>
             {contacts.map((contact) => {
                 return (  
                         <li className={styled.contact} key={contact.id}><span className={styled.contactName}>{contact.name}</span><span className={styled.contactPhone}>{contact.number}</span>
                            <button onClick={() => onDeleteContact(contact.id)} className={styled.deleteButton}>Видалити</button>
                         </li>
                 )
             } )}
            </ul>
     )
}

export default ContactList
