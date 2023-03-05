import SignUpForm from 'components/SignInForm/SignInForm';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerRequest } from 'redux/users/operations';
import { selectAuthError, selectIsLoggedIn } from 'redux/users/selectors';
import { Background } from 'pages/Background.styled';
import { toast } from 'react-toastify';
import { Toast } from 'components/Toast/Toast';


function SignUpPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const error = useSelector(selectAuthError);

  useEffect(() => {
    if (!isLoggedIn) return;

    navigate('/contacts');
  }, [isLoggedIn, navigate]);

  const handleRegister = formData => {
    dispatch(registerRequest(formData));
  };

  return (
    <Background>
      {error !== null && (toast('Oops. Something went wrong'))}
      <SignUpForm onSubmit={handleRegister} />
      <Toast/>
    </Background>
  );
};

export default SignUpPage;