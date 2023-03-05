import { useRef } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Label, Input } from '../ContactForm/ContactForm.styled';
import { Loader } from '../Loader/Loader';
import { selectStatus } from 'redux/users/selectors';
import { useSelector } from 'react-redux';
import { Title } from './SignUpForm.styled';

const SignUpForm = ({ onSubmit, isLoginForm = false }) => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const status = useSelector(selectStatus);

  const handleSubmit = event => {
    event.preventDefault();

    const formData = {
      ...(!isLoginForm && { name: nameInputRef.current.value }),
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    };

    onSubmit(formData);

    event.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>{isLoginForm ? 'Sign In' : 'Sign Up'}</Title>
      {isLoginForm ? null : (
        <Label>
          Name
          <Input
            type="text"
            name="name"
            placeholder={'Enter your Name'}
            ref={nameInputRef}
            required
          />
        </Label>
      )}
      <Label>
        Email
        <Input
          type="email"
          name="email"
          placeholder={'Enter a valid email addres'}
          ref={emailInputRef}
          required
        />
      </Label>
      <Label>
        Password
        <Input
          type="password"
          name="password"
          placeholder={'Enter a password'}
          minLength={7}
          ref={passwordInputRef}
          required
        />
      </Label>
      <Button disabled={status === 'pending'} type="submit">
        {isLoginForm ? 'Sign In' : 'Sign Up'}
      </Button>
      {status === 'pending' && <Loader />}
    </Form>
  );
};

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignUpForm;
