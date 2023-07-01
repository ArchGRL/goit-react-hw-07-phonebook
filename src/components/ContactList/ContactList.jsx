import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { DeliteContact } from 'components/DeliteContact/DeliteContact';
import { Contact, ContactItem } from './ContactList.stiled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <Contact>
        {filteredContacts.map(({ id, name, number }) => (
          <ContactItem key={id}>
            <li>
              {name}: <span>{number}</span>
            </li>
            <DeliteContact id={id} />
          </ContactItem>
        ))}
      </Contact>
    </div>
  );
};
