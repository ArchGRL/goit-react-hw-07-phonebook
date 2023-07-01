import { useDispatch } from 'react-redux';
import { resetFilter } from 'redux/filterSlice';
import { deleteContacts } from 'redux/contactsSlice';
import { Button } from 'components/ContactForm/ContactForm.styled';
import PropTypes from 'prop-types';

export const DeliteContact = ({ id }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContacts(id));
    dispatch(resetFilter());
  };

  return (
    <Button type="button" onClick={handleDeleteContact}>
      Delite
    </Button>
  );
};

DeliteContact.propTypes = {
  id: PropTypes.string.isRequired,
};
