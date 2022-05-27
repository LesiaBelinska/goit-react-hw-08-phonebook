import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from "react";
import * as yup from 'yup';

import toast from 'react-hot-toast';
import PropTypes from 'prop-types';

import { useGetContactsQuery } from 'redux/contacts/contactsSlice';
import s from "./ContactForm.module.css";

const schema = yup.object().shape({
  name: yup.string().required("enter a name, this is a required field"),
  number: yup.string().min(8).max(13).required("enter a phone number, this is a required field"),
});


export const ContactForm = ({ initialValues = {
  name: '', number: '',}, onSubmit, buttonText }) => {
      
    const id = useId();
  
  const { data: contacts } = useGetContactsQuery();


  const handleSubmit = async (values, { resetForm }) => {
     if (contacts.find(contact => contact.name.toLocaleLowerCase() === values.name.toLocaleLowerCase())){
       toast.error(`${values.name} is already in contacts`)
        return
     }
   await onSubmit(values);
    resetForm();
  };


  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}>
      <Form className={s.form} autoComplete='off'>
        <label htmlFor={`${id}-name`} className={s.label}>Name</label>
        <Field
          className={s.input}
          type="text"
          name="name"
          id={`${id}-name`}
        />
        <ErrorMessage className={s.error} name="name" component="div" />
        <label htmlFor={`${id}-number`} className={s.label}>Number</label>
        <Field
          className={s.input}
          type="tel"
          name="namber"
          id={`${id}-number`}
        />
        <ErrorMessage className={s.error} name="number" component="div" />
        <button className={s.button} type='submit'>{buttonText}</button>
      </Form>
    </Formik>
  );
  
}

ContactForm.propTypes = {
  initialValues: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,

};