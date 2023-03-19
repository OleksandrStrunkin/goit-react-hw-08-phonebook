import { useState } from 'react';
import styled from './ContactForm.module.css';
import { fetchAddContacts } from 'redux/contacts/contacts-operation';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredContacts,} from 'redux/contacts/contacts-selectors';


import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getFilteredContacts);


  const dispatch = useDispatch();

  const handleName = e => {
    setName(e.currentTarget.value);
  };

  const handleNumber = event => {
    const regex = /^[0-9+]+$/;
    if (event.target.value === '' || regex.test(event.target.value)) {
      setNumber(event.currentTarget.value);
    }
    
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isContactExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isContactExist) {
      alert(`User with name ${name} is already in contacts`);
      return;
    }

    dispatch(fetchAddContacts({ name, number }));

    setName('');
    setNumber('');
  };
  return (
    <form onSubmit={handleSubmit} className={styled.form}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="name"
        label="Ім'я"
        name="name"
        autoComplete="name"
        autoFocus
        value={name}
        onChange={handleName}
        inputProps={{ maxLength: 15}}
      />
      <TextField
  margin="normal"
  required
  fullWidth
  id="number"
  label="Номер телефону"
  name="number"
  type="text"
  autoComplete="number"
  value={number}
  onChange={handleNumber}
  inputProps={{ maxLength: 10 }}
/>
      <Button type="submit" variant="contained">
        Зберегти
      </Button>
    </form>
  );
}