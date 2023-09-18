import React from 'react';
import { Formik, Form, Field } from 'formik'; 
import { Button } from 'react-bootstrap';
import BsForm from 'react-bootstrap/Form';

function MyForm() {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
  };

  const handleSubmit = (values) => {
    
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, handleChange }) => (
        <Form as={BsForm} noValidate>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              Prénom
            </label>
            <Field
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Nom de famille
            </label>
            <Field
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Adresse e-mail
            </label>
            <Field
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <Button type="submit">Soumettre</Button>
        </Form>
      )}
    </Formik>
  );
}

export default MyForm;
