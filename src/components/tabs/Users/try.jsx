import React, { useState } from 'react';
import { Button, Form, InputGroup, Col } from 'react-bootstrap';
import { isEmpty } from '../../../js/checkAddUserForm';
import * as yup from 'yup';

import { Formik } from 'formik';
import { schema } from '../../../js/user-schema';

function Try(props) {
  const submit = (errors, values) => {
    if (isEmpty(errors) && !isEmpty(values)) {
      props.close();
      props.addNewUser(values);
    }
  };

  return (
    <Formik validationSchema={schema} onSubmit={console.log} initialValues={{}}>
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate>
          <Form.Row>
            <Form.Group as={Col} md='4' controlId='validationFormik01'>
              <Form.Label>First name</Form.Label>
              <Form.Control
                type='text'
                name='firstName'
                placeholder='First Name'
                value={values.firstName}
                onChange={handleChange}
                isInvalid={!!errors.firstName}
              />
              <Form.Control.Feedback type='invalid'>
                {errors.firstName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md='4' controlId='validationFormik02'>
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type='text'
                name='lastName'
                placeholder='Last Name'
                value={values.lastName}
                onChange={handleChange}
                isInvalid={!!errors.lastName}
              />

              <Form.Control.Feedback type='invalid'>
                {errors.lastName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md='4' controlId='validationFormikEmail'>
              <Form.Label>Email</Form.Label>
              <InputGroup>
                <Form.Control
                  type='text'
                  placeholder='Email'
                  aria-describedby='inputGroupPrepend'
                  name='email'
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.email}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md='4' controlId='validationFormikEducation'>
              <Form.Label>Education</Form.Label>
              <Form.Control
                type='text'
                name='education'
                placeholder='Education'
                value={values.education}
                onChange={handleChange}
                isInvalid={!!errors.education}
              />
              <Form.Control.Feedback type='invalid'>
                {errors.education}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md='4' controlId='validationFormikUniversity'>
              <Form.Label>University</Form.Label>
              <Form.Control
                type='text'
                name='university'
                placeholder='University'
                value={values.university}
                onChange={handleChange}
                isInvalid={!!errors.university}
              />
              <Form.Control.Feedback type='invalid'>
                {errors.university}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md='4' controlId='validationFormikMath'>
              <Form.Label>Math Score</Form.Label>
              <InputGroup>
                <Form.Control
                  type='text'
                  placeholder='Math Score'
                  aria-describedby='inputGroupPrepend'
                  name='mathScore'
                  value={values.mathScore}
                  onChange={handleChange}
                  isInvalid={!!errors.mathScore}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.mathScore}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md='4' controlId='validationFormikAddress'>
              <Form.Label>Address</Form.Label>
              <Form.Control
                type='text'
                placeholder='Address'
                name='address'
                value={values.address}
                onChange={handleChange}
                isInvalid={!!errors.address}
              />
              <Form.Control.Feedback type='invalid'>
                {errors.address}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md='4' controlId='validationFormikPhone'>
              <Form.Label>Mobile Phone</Form.Label>
              <Form.Control
                type='tel'
                placeholder='Mobile Phone'
                name='mobilePhone'
                value={values.mobilePhone}
                onChange={handleChange}
                isInvalid={!!errors.mobilePhone}
              />
              <Form.Control.Feedback type='invalid'>
                {errors.mobilePhone}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md='4' controlId='validationFormikSkype'>
              <Form.Label>Skype</Form.Label>
              <Form.Control
                type='text'
                placeholder='Skype'
                name='skype'
                value={values.skype}
                onChange={handleChange}
                isInvalid={!!errors.skype}
              />

              <Form.Control.Feedback type='invalid'>
                {errors.skype}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md='3' controlId='validationFormikDataStart'>
              <Form.Label>Start data</Form.Label>
              <Form.Control
                type='date'
                name='startData'
                placeholder='Start data'
                value={values.startData}
                onChange={handleChange}
                isInvalid={!!errors.startData}
              />
              <Form.Control.Feedback type='invalid'>
                {errors.startData}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md='3' controlId='validationFormikDateBirthDa'>
              <Form.Label>Date of birth day</Form.Label>
              <Form.Control
                type='date'
                name='birthDay'
                placeholder='Birth Day'
                value={values.birthDay}
                onChange={handleChange}
                isInvalid={!!errors.birthDay}
              />
              <Form.Control.Feedback type='invalid'>
                {errors.birthDay}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md='3' controlId='validationFormikAge'>
              <Form.Label>Age</Form.Label>
              <InputGroup>
                <Form.Control
                  type='text'
                  placeholder='age'
                  aria-describedby='inputGroupPrepend'
                  name='age'
                  value={values.age}
                  onChange={handleChange}
                  isInvalid={!!errors.age}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.age}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md='3' controlId='validationFormikDirection'>
              <Form.Label>Direction</Form.Label>
              <Form.Control
                type='text'
                name='direction'
                placeholder='Direction'
                value={values.direction}
                onChange={handleChange}
                isInvalid={!!errors.direction}
              />
              <Form.Control.Feedback type='invalid'>
                {errors.direction}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Button
            onClick={() => {
              submit(errors, values);
            }}
          >
            Submit form
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default Try;

// 'Name'..
// 'LastName'..
//  'Email'..
//  'Education'..
//  'Age'
//  'University'..
//  'MathScore'..
//  'Address'..
//  'MobilePhone'..
// 'Skype'..
// Direction:
// Sex:
// Date of Birth:
// Start Date:
